import { n as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useAuth } from "./auth-BDGEdFsj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-form-CmilE_nA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var field = "w-full border border-input bg-background px-4 py-3 outline-none focus:border-ring";
function AuthForm({ mode }) {
	const { signUp, sendLoginCode, verifyCode } = useAuth();
	const navigate = useNavigate();
	const isSignup = mode === "signup";
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [code, setCode] = (0, import_react.useState)("");
	const [codeSent, setCodeSent] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function onSubmit(e) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-md px-6 pt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-accent",
				children: isSignup ? "Join Maison Ardent" : "Welcome back"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-5xl",
				children: isSignup ? "Sign up" : "Log in"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "mt-10 space-y-5",
				children: [
					!codeSent && isSignup && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "name",
						className: "eyebrow",
						children: "Full name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "name",
						className: `${field} mt-2`,
						value: name,
						onChange: (e) => setName(e.target.value),
						autoComplete: "name",
						required: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "email",
						className: "eyebrow",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "email",
						type: "email",
						className: `${field} mt-2`,
						value: email,
						onChange: (e) => setEmail(e.target.value),
						autoComplete: "email",
						disabled: codeSent,
						required: true
					})] }),
					!codeSent && isSignup && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "password",
						className: "eyebrow",
						children: "Password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "password",
						type: "password",
						className: `${field} mt-2`,
						value: password,
						onChange: (e) => setPassword(e.target.value),
						autoComplete: "new-password",
						required: true
					})] }),
					codeSent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "code",
							className: "eyebrow",
							children: "Verification code"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "code",
							inputMode: "numeric",
							autoComplete: "one-time-code",
							className: `${field} mt-2 tracking-[0.4em]`,
							value: code,
							onChange: (e) => setCode(e.target.value),
							placeholder: "Enter the code from your email",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-accent",
							children: [
								"We sent a code to ",
								email.trim(),
								". Check spam if you don't see it."
							]
						})
					] }),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "alert",
						className: "text-sm text-destructive",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: busy,
						className: "eyebrow w-full bg-primary py-4 text-primary-foreground disabled:opacity-60",
						children: busy ? "Please wait…" : codeSent ? "Verify code" : isSignup ? "Sign up" : "Send code"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-muted-foreground",
				children: [isSignup ? "Already have an account? " : "New here? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: isSignup ? "/login" : "/signup",
					className: "text-foreground underline underline-offset-4",
					children: isSignup ? "Log in" : "Sign up"
				})]
			})
		]
	});
}
//#endregion
export { AuthForm as t };
