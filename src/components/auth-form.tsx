import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";

const field = "w-full border border-input bg-background px-4 py-3 outline-none focus:border-ring";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const isSignup = mode === "signup";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setNotice(null);
    if (isSignup && password.length < 6) {
      setError("Use a password with at least 6 characters.");
      return;
    }
    setBusy(true);
    const res = isSignup
      ? await signUp(email.trim(), password, name.trim())
      : await signIn(email.trim(), password);
    setBusy(false);
    if (res.error) return setError(res.error);
    if (res.needsConfirmation)
      return setNotice(`We sent a confirmation link to ${email.trim()}. Open it, then log in.`);
    navigate({ to: "/" });
  }

  return (
    <main className="mx-auto max-w-md px-6 pt-20">
      <p className="eyebrow text-accent">{isSignup ? "Join Maison Ardent" : "Welcome back"}</p>
      <h1 className="mt-3 text-5xl">{isSignup ? "Sign up" : "Log in"}</h1>
      <form onSubmit={onSubmit} className="mt-10 space-y-5">
        {isSignup && (
          <div>
            <label htmlFor="name" className="eyebrow">
              Full name
            </label>
            <input
              id="name"
              className={`${field} mt-2`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="email" className="eyebrow">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`${field} mt-2`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="eyebrow">
            Password
          </label>
          <input
            id="password"
            type="password"
            className={`${field} mt-2`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete={isSignup ? "new-password" : "current-password"}
            required
          />
        </div>
        {error && (
          <p role="alert" className="text-sm text-destructive">
            {error}
          </p>
        )}
        {notice && (
          <p role="status" className="text-sm text-accent">
            {notice}
          </p>
        )}
        <button
          type="submit"
          disabled={busy}
          className="eyebrow w-full bg-primary py-4 text-primary-foreground disabled:opacity-60"
        >
          {busy ? "Please wait…" : isSignup ? "Sign up" : "Log in"}
        </button>
      </form>
      <p className="mt-6 text-sm text-muted-foreground">
        {isSignup ? "Already have an account? " : "New here? "}
        <Link
          to={isSignup ? "/login" : "/signup"}
          className="text-foreground underline underline-offset-4"
        >
          {isSignup ? "Log in" : "Sign up"}
        </Link>
      </p>
    </main>
  );
}
