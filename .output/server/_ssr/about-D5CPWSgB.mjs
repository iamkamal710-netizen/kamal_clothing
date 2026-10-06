import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-D5CPWSgB.js
var import_jsx_runtime = require_jsx_runtime();
var values = [
	["Natural fabrics", "Linen, wool and organic cotton — chosen to age beautifully."],
	["Small batches", "We produce in limited runs to avoid waste and overstock."],
	["Made to last", "Reinforced seams and timeless cuts, built for years of wear."]
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl px-6 pt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-accent",
				children: "Our story"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-5xl leading-tight md:text-7xl",
				children: "Clothing made slowly, worn for a long time."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-2xl text-lg text-muted-foreground",
				children: "Maison Ardent began with a simple idea: a wardrobe of fewer, better pieces. Every garment is designed in our studio and made with partners we know by name."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 grid gap-12 border-t border-border pt-12 md:grid-cols-3",
				children: values.map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl",
					children: t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: d
				})] }, t))
			})
		]
	});
}
//#endregion
export { About as component };
