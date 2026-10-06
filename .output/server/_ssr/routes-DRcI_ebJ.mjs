import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as products } from "./cart-C5Ngn_gM.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ProductCard } from "./product-card-Bzhzznpa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DRcI_ebJ.js
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-DYKe0wQr.jpg";
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_default,
				alt: "Model in camel wool coat",
				width: 1600,
				height: 1008,
				className: "h-[85vh] w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-end bg-gradient-to-t from-foreground/50 to-transparent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-7xl px-6 pb-16 text-background",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Autumn / Winter 2026"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 max-w-2xl text-6xl leading-none md:text-8xl",
							children: "Quiet layers for colder days"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "eyebrow mt-8 inline-block border border-background px-8 py-4 transition-colors hover:bg-background hover:text-foreground",
							children: "Shop the collection"
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 pt-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl md:text-5xl",
					children: "New arrivals"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "eyebrow underline underline-offset-4",
					children: "View all"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-10 sm:grid-cols-2 lg:grid-cols-3",
				children: products.slice(0, 6).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p }, p.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-3xl px-6 pt-32 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-accent",
				children: "Our promise"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-display text-3xl leading-snug md:text-4xl",
				children: "Fewer, better pieces — cut from linen, wool and organic cotton, made to be worn for years."
			})]
		})
	] });
}
//#endregion
export { Index as component };
