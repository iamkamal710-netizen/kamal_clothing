import { n as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as inr, n as UPI_ID, r as UPI_NAME, s as useCart } from "./cart-C5Ngn_gM.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as QRCodeSVG } from "../_libs/qrcode.react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-xU1jPwvX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Checkout() {
	const { lines, total } = useCart();
	const [orderId] = (0, import_react.useState)(() => "MA" + Date.now().toString().slice(-8));
	const upi = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(UPI_NAME)}&am=${total}.00&cu=INR&tn=${encodeURIComponent("Order " + orderId)}`;
	if (!lines.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-xl px-6 pt-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-4xl",
			children: "Your bag is empty"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/shop",
			className: "eyebrow mt-8 inline-block underline",
			children: "Go to shop"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid max-w-5xl gap-12 px-6 pt-16 lg:grid-cols-[1fr_320px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow text-muted-foreground",
				children: ["Order ", orderId]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-4 text-4xl",
				children: [
					"Pay ",
					inr(total),
					" with UPI"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Scan with Google Pay, PhonePe, Paytm or any UPI app."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 inline-block bg-card p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QRCodeSVG, {
					value: upi,
					size: 240,
					bgColor: "transparent"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: ["UPI ID: ", UPI_ID]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: upi,
				className: "eyebrow mt-4 block border border-primary py-4 text-center md:hidden",
				children: "Open UPI app"
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "h-fit bg-card p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "Your order"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							l.name,
							" × ",
							l.qty
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: inr(l.qty * l.product.price) })]
					}, l.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 flex justify-between border-t border-border pt-4 text-lg font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: inr(total) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 flex items-center gap-2 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }), " Payments go directly to the store's UPI account"]
				})
			]
		})]
	});
}
//#endregion
export { Checkout as component };
