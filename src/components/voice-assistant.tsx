import { useEffect, useRef, useState } from "react";
import { Mic, PhoneOff, Phone, Loader2 } from "lucide-react";
import type Vapi from "@vapi-ai/web";
import { SUPPORT_PHONE, SUPPORT_PHONE_LABEL } from "@/components/site-chrome";

const publicKey = import.meta.env.VITE_VAPI_PUBLIC_KEY as string | undefined;
const assistantId = import.meta.env.VITE_VAPI_ASSISTANT_ID as string | undefined;

type Status = "idle" | "connecting" | "live" | "error";

// Floating support button. With Vapi keys set, it starts a voice call with the
// assistant right in the browser; without them it falls back to a phone call.
export function VoiceAssistant() {
  const vapi = useRef<Vapi | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => () => void vapi.current?.stop(), []);

  if (!publicKey || !assistantId) {
    return (
      <a
        href={`tel:${SUPPORT_PHONE}`}
        className="eyebrow fixed bottom-5 right-5 z-30 flex items-center gap-2 bg-primary px-5 py-4 text-primary-foreground shadow-lg transition-opacity hover:opacity-90"
        aria-label={`Call our assistant at ${SUPPORT_PHONE_LABEL}`}
      >
        <Phone className="h-4 w-4" /> Talk to us
      </a>
    );
  }

  async function start() {
    setStatus("connecting");
    try {
      if (!vapi.current) {
        const { default: VapiClient } = await import("@vapi-ai/web");
        const v = new VapiClient(publicKey!);
        v.on("call-start", () => setStatus("live"));
        v.on("call-end", () => {
          setStatus("idle");
          setSpeaking(false);
        });
        v.on("speech-start", () => setSpeaking(true));
        v.on("speech-end", () => setSpeaking(false));
        v.on("error", (e) => {
          console.error("Vapi error", e);
          setStatus("error");
        });
        vapi.current = v;
      }
      await vapi.current.start(assistantId!);
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  }

  const live = status === "live";
  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-2">
      {status === "error" && (
        <p className="max-w-64 bg-card px-4 py-3 text-sm shadow">
          Couldn't start the call. Allow microphone access and try again, or call{" "}
          <a href={`tel:${SUPPORT_PHONE}`} className="underline">{SUPPORT_PHONE_LABEL}</a>.
        </p>
      )}
      {live && <p className="eyebrow bg-card px-3 py-2 shadow">{speaking ? "Aria is speaking…" : "Listening…"}</p>}
      <button
        onClick={() => (live ? vapi.current?.stop() : start())}
        disabled={status === "connecting"}
        className={`eyebrow flex items-center gap-2 px-5 py-4 shadow-lg transition-opacity hover:opacity-90 disabled:opacity-70 ${live ? "bg-destructive text-white" : "bg-primary text-primary-foreground"}`}
      >
        {status === "connecting" ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Connecting…</>
        ) : live ? (
          <><PhoneOff className="h-4 w-4" /> End call</>
        ) : (
          <><Mic className="h-4 w-4" /> Talk to Aria</>
        )}
      </button>
    </div>
  );
}
