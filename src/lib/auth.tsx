import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase, supabaseConfigured } from "./supabase";

type Result = { error: string | null; needsConfirmation?: boolean };
type Ctx = {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<Result>;
  signUp: (email: string, password: string, name: string) => Promise<Result>;
  signOut: () => Promise<void>;
};

const AuthCtx = createContext<Ctx | null>(null);

const notConfigured: Result = { error: "Sign-in is not configured. Add the Supabase keys to .env." };

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabaseConfigured) {
      setLoading(false);
      return;
    }
    const { data } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      setLoading(false);
    });
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setLoading(false);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  const value: Ctx = {
    user: session?.user ?? null,
    loading,
    signIn: async (email, password) => {
      if (!supabaseConfigured) return notConfigured;
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      return { error: error?.message ?? null };
    },
    signUp: async (email, password, name) => {
      if (!supabaseConfigured) return notConfigured;
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: name }, emailRedirectTo: window.location.origin },
      });
      if (error) return { error: error.message };
      // No session means the project requires email confirmation before first sign-in.
      return { error: null, needsConfirmation: !data.session };
    },
    signOut: async () => {
      await supabase.auth.signOut();
    },
  };
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
  const c = useContext(AuthCtx);
  if (!c) throw new Error("useAuth outside AuthProvider");
  return c;
}
