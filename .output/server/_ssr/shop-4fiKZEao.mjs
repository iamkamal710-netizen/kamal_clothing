import { n as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as categories, o as products } from "./cart-C5Ngn_gM.mjs";
import { t as ProductCard } from "./product-card-Bzhzznpa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-4fiKZEao.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var cats = categories;
function Shop() {
	const [cat, setCat] = (0, import_react.useState)("All");
	const list = cat === "All" ? products : products.filter((p) => p.category === cat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-7xl px-6 pt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-6xl",
				children: "Shop"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-muted-foreground",
				children: [list.length, " pieces"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCat(c),
					className: `eyebrow border px-5 py-2 transition-colors ${c === cat ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`,
					children: c
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p }, p.name))
			})
		]
	});
}
//#endregion
export { Shop as component };
