import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as inr, s as useCart } from "./cart-C5Ngn_gM.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Trash2, o as Plus, s as Minus } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-CVL47VXK.js
var import_jsx_runtime = require_jsx_runtime();
function Cart() {
	const { lines, total, setQty } = useCart();
	const mrp = lines.reduce((a, l) => a + l.qty * l.product.mrp, 0);
	if (!lines.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-6 pt-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-5xl",
			children: "Your bag is empty"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/shop",
			className: "eyebrow mt-8 inline-block bg-primary px-8 py-4 text-primary-foreground",
			children: "Start shopping"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid max-w-6xl gap-12 px-6 pt-16 lg:grid-cols-[1fr_360px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-5xl",
			children: "Your bag"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-8 divide-y divide-border border-y border-border",
			children: lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-5 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: l.product.image,
					alt: l.name,
					width: 96,
					height: 120,
					className: "h-30 w-24 object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg",
							children: l.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								inr(l.product.price),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "line-through",
									children: inr(l.product.mrp)
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": "Decrease",
									onClick: () => setQty(l.name, l.qty - 1),
									className: "border border-border p-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.qty }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": "Increase",
									onClick: () => setQty(l.name, l.qty + 1),
									className: "border border-border p-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": "Remove",
									onClick: () => setQty(l.name, 0),
									className: "ml-auto text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
								})
							]
						})
					]
				})]
			}, l.name))
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "h-fit bg-card p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "Order summary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-6 space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Total MRP" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: inr(mrp) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Discount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: ["-", inr(mrp - total)] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Delivery" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "FREE" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between border-t border-border pt-3 text-lg font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "To pay" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: inr(total) })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/checkout",
					className: "eyebrow mt-6 block bg-primary py-4 text-center text-primary-foreground",
					children: "Place order"
				})
			]
		})]
	});
}
//#endregion
export { Cart as component };
