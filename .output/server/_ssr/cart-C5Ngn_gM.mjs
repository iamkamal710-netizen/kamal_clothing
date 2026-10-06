import { n as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-C5Ngn_gM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var products = [
	{
		name: "Belted Camel Wool Coat",
		mrp: 23099,
		price: 1,
		category: "Outerwear",
		image: "/assets/p4-B0E1e30F.jpg"
	},
	{
		name: "Silk Slip Midi Dress",
		mrp: 14299,
		price: 1,
		category: "Dresses",
		image: "/assets/p5-B46mm5r1.jpg"
	},
	{
		name: "Leather Biker Jacket",
		mrp: 27899,
		price: 1,
		category: "Outerwear",
		image: "/assets/p8-BiJXYLI3.jpg"
	},
	{
		name: "Straight-Leg Indigo Jeans",
		mrp: 7899,
		price: 1,
		category: "Denim",
		image: "/assets/p6-DwiySub4.jpg"
	},
	{
		name: "Chunky Olive Knit",
		mrp: 11899,
		price: 1,
		category: "Knitwear",
		image: "/assets/p3-2N8-hZgX.jpg"
	},
	{
		name: "Linen Camp Shirt",
		mrp: 7099,
		price: 1,
		category: "Shirts",
		image: "/assets/p1-00KN1keB.jpg"
	},
	{
		name: "Pleated Midi Skirt",
		mrp: 9499,
		price: 1,
		category: "Skirts",
		image: "/assets/p9-Ch0i_4RS.jpg"
	},
	{
		name: "Heavyweight Cotton Tee",
		mrp: 3099,
		price: 1,
		category: "T-Shirts",
		image: "/assets/p7-BjQ4LHRg.jpg"
	},
	{
		name: "Pleated Wide Trouser",
		mrp: 10299,
		price: 1,
		category: "Trousers",
		image: "/assets/p2-D-uya5fu.jpg"
	},
	{
		name: "Grey Marl Hoodie",
		mrp: 6299,
		price: 1,
		category: "Sweats",
		image: "/assets/p10-CLQneI-F.jpg"
	},
	{
		name: "White Leather Sneakers",
		mrp: 12699,
		price: 1,
		category: "Shoes",
		image: "/assets/p11-CipQtQm4.jpg"
	},
	{
		name: "Classic Gold Leather Watch",
		mrp: 19899,
		price: 1,
		category: "Watches",
		image: "/assets/a1-BtQrxVQs.jpg"
	},
	{
		name: "Steel Chronograph Watch",
		mrp: 31899,
		price: 1,
		category: "Watches",
		image: "/assets/a1-BtQrxVQs.jpg"
	},
	{
		name: "Leather Everyday Tote",
		mrp: 18299,
		price: 1,
		category: "Bags",
		image: "/assets/a2-DBqL2I2k.jpg"
	},
	{
		name: "Chain Strap Crossbody",
		mrp: 15099,
		price: 1,
		category: "Bags",
		image: "/assets/a7-TlgFDmLc.jpg"
	},
	{
		name: "Leather Weekender Duffel",
		mrp: 26299,
		price: 1,
		category: "Bags",
		image: "/assets/a10-C7KnvQjK.jpg"
	},
	{
		name: "Stacked Gold Bangles",
		mrp: 7099,
		price: 1,
		category: "Bracelets",
		image: "/assets/a3-D63OQP3O.jpg"
	},
	{
		name: "Silver Link Bracelet",
		mrp: 6299,
		price: 1,
		category: "Bracelets",
		image: "/assets/a8-CRMTA7lX.jpg"
	},
	{
		name: "Bold Gold Link Chain",
		mrp: 12699,
		price: 1,
		category: "Chains",
		image: "/assets/a4-Ck9OkIyL.jpg"
	},
	{
		name: "Fine Gold Pendant Chain",
		mrp: 7899,
		price: 1,
		category: "Chains",
		image: "/assets/a9-BqJ5Ep2P.jpg"
	},
	{
		name: "Mixed Metal Ring Stack",
		mrp: 10299,
		price: 1,
		category: "Rings",
		image: "/assets/a5-8LBH-ZZH.jpg"
	},
	{
		name: "Silver Signet Ring",
		mrp: 8699,
		price: 1,
		category: "Rings",
		image: "/assets/a11-B2iTLGQY.jpg"
	}
];
var categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
var inr = (n) => "₹" + n.toLocaleString("en-IN");
var UPI_ID = "yourname@upi";
var UPI_NAME = "Maison Ardent";
var CartCtx = (0, import_react.createContext)(null);
function CartProvider({ children }) {
	const [lines, setLines] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		try {
			setLines(JSON.parse(localStorage.getItem("cart") || "[]"));
		} catch {}
	}, []);
	const save = (l) => {
		setLines(l);
		localStorage.setItem("cart", JSON.stringify(l));
	};
	const full = lines.map((l) => ({
		...l,
		product: products.find((p) => p.name === l.name)
	})).filter((l) => l.product);
	const value = {
		lines: full,
		count: full.reduce((a, l) => a + l.qty, 0),
		total: full.reduce((a, l) => a + l.qty * l.product.price, 0),
		add: (name) => {
			const ex = lines.find((l) => l.name === name);
			save(ex ? lines.map((l) => l.name === name ? {
				...l,
				qty: l.qty + 1
			} : l) : [...lines, {
				name,
				qty: 1
			}]);
		},
		setQty: (name, qty) => save(qty <= 0 ? lines.filter((l) => l.name !== name) : lines.map((l) => l.name === name ? {
			...l,
			qty
		} : l)),
		clear: () => save([])
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartCtx.Provider, {
		value,
		children
	});
}
function useCart() {
	const c = (0, import_react.useContext)(CartCtx);
	if (!c) throw new Error("useCart outside CartProvider");
	return c;
}
//#endregion
export { inr as a, categories as i, UPI_ID as n, products as o, UPI_NAME as r, useCart as s, CartProvider as t };
