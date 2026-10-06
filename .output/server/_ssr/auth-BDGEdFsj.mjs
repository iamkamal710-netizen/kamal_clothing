import { n as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-BDGEdFsj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var url = "https://jkflqypelylkhmbljsfw.supabase.co";
var anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprZmxxeXBlbHlsa2htYmxqc2Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTExODcwODgsImV4cCI6MjEwNjc2MzA4OH0.pNPp5VxXcKUAb11l27wSeAumuCzLrYm1cJRvO_BItAQ";
var supabaseConfigured = Boolean(anonKey);
var supabase = createClient(url, anonKey);
var AuthCtx = (0, import_react.createContext)(null);
var notConfigured = { error: "Sign-in is not configured. Add the Supabase keys to .env." };
function AuthProvider({ children }) {
	const [session, setSession] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
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
	const value = {
		user: session?.user ?? null,
		loading,
		signIn: async (email, password) => {
			if (!supabaseConfigured) return notConfigured;
			const { error } = await supabase.auth.signInWithPassword({
				email,
				password
			});
			return { error: error?.message ?? null };
		},
		signUp: async (email, password, name) => {
			if (!supabaseConfigured) return notConfigured;
			const { data, error } = await supabase.auth.signUp({
				email,
				password,
				options: {
					data: { full_name: name },
					emailRedirectTo: window.location.origin
				}
			});
			if (error) return { error: error.message };
			return {
				error: null,
				needsConfirmation: !data.session
			};
		},
		sendLoginCode: async (email) => {
			if (!supabaseConfigured) return notConfigured;
			const { error } = await supabase.auth.signInWithOtp({
				email,
				options: { shouldCreateUser: false }
			});
			return { error: error?.message ?? null };
		},
		verifyCode: async (email, code, type) => {
			if (!supabaseConfigured) return notConfigured;
			const { error } = await supabase.auth.verifyOtp({
				email,
				token: code,
				type
			});
			return { error: error?.message ?? null };
		},
		signOut: async () => {
			await supabase.auth.signOut();
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthCtx.Provider, {
		value,
		children
	});
}
function useAuth() {
	const c = (0, import_react.useContext)(AuthCtx);
	if (!c) throw new Error("useAuth outside AuthProvider");
	return c;
}
//#endregion
export { useAuth as n, AuthProvider as t };
