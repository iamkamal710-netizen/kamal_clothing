import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";

const field = "w-full border border-input bg-background px-4 py-3 outline-none focus:border-ring";

// Sign up: name + email + password, then a code emailed by Supabase confirms the address.
// Log in: email only, then a code emailed by Supabase signs the user in.
export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const { signUp, sendLoginCode, verifyCode } = useAuth();
  const navigate = useNavigate();
  const isSignup = mode === "signup";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!codeSent && isSignup && password.length < 6) {
      setError("Use a password with at least 6 characters.");
      return;
    }
    setBusy(true);
    const addr = email.trim();
    let res;
    if (codeSent) res = await verifyCode(addr, code.trim(), isSignup ? "signup" : "email");
    else res = isSignup ? await signUp(addr, password, name.trim()) : await sendLoginCode(addr);
    setBusy(false);
    if (res.error) return setError(res.error);
    if (codeSent) return navigate({ to: "/" });
    if (isSignup && res.needsConfirmation === false) return navigate({ to: "/" });
    setCodeSent(true);
  }

  return (
    <main className="mx-auto max-w-md px-6 pt-20">
      <p className="eyebrow text-accent">{isSignup ? "Join Maison Ardent" : "Welcome back"}</p>
      <h1 className="mt-3 text-5xl">{isSignup ? "Sign up" : "Log in"}</h1>
      <form onSubmit={onSubmit} className="mt-10 space-y-5">
        {!codeSent && isSignup && (
          <div>
            <label htmlFor="name" className="eyebrow">Full name</label>
            <input id="name" className={`${field} mt-2`} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
          </div>
        )}
        <div>
          <label htmlFor="email" className="eyebrow">Email</label>
          <input id="email" type="email" className={`${field} mt-2`} value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" disabled={codeSent} required />
        </div>
        {!codeSent && isSignup && (
          <div>
            <label htmlFor="password" className="eyebrow">Password</label>
            <input id="password" type="password" className={`${field} mt-2`} value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" required />
          </div>
        )}
        {codeSent && (
          <div>
            <label htmlFor="code" className="eyebrow">Verification code</label>
            <input id="code" inputMode="numeric" autoComplete="one-time-code" className={`${field} mt-2 tracking-[0.4em]`} value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter the code from your email" required />
            <p className="mt-2 text-sm text-accent">We sent a code to {email.trim()}. Check spam if you don't see it.</p>
          </div>
        )}
        {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
        <button type="submit" disabled={busy} className="eyebrow w-full bg-primary py-4 text-primary-foreground disabled:opacity-60">
          {busy ? "Please wait…" : codeSent ? "Verify code" : isSignup ? "Sign up" : "Send code"}
        </button>
      </form>
      <p className="mt-6 text-sm text-muted-foreground">
        {isSignup ? "Already have an account? " : "New here? "}
        <Link to={isSignup ? "/login" : "/signup"} className="text-foreground underline underline-offset-4">
          {isSignup ? "Log in" : "Sign up"}
        </Link>
      </p>
    </main>
  );
}
