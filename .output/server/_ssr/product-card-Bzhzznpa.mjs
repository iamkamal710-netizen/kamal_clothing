import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as inr, s as useCart } from "./cart-C5Ngn_gM.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-Bzhzznpa.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ p }) {
	const { add } = useCart();
	const off = Math.round((1 - p.price / p.mrp) * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "eyebrow absolute left-3 top-3 z-10 bg-accent px-2 py-1 text-accent-foreground",
					children: [off, "% off"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.image,
					alt: p.name,
					loading: "lazy",
					width: 800,
					height: 1008,
					className: "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mt-4 text-muted-foreground",
				children: p.category
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-1 text-xl",
				children: p.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 flex items-baseline gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-lg font-medium",
					children: inr(p.price)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted-foreground line-through",
					children: inr(p.mrp)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					add(p.name);
					toast.success(`${p.name} added to bag`);
				},
				className: "eyebrow mt-3 border border-primary py-3 transition-colors hover:bg-primary hover:text-primary-foreground",
				children: "Add to bag"
			})
		]
	});
}
//#endregion
export { ProductCard as t };
