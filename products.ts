import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";
import p9 from "@/assets/p9.jpg";
import p10 from "@/assets/p10.jpg";
import p11 from "@/assets/p11.jpg";
import a1 from "@/assets/a1.jpg";
import a2 from "@/assets/a2.jpg";
import a3 from "@/assets/a3.jpg";
import a4 from "@/assets/a4.jpg";
import a5 from "@/assets/a5.jpg";
import a6 from "@/assets/a6.jpg";
import a7 from "@/assets/a7.jpg";
import a8 from "@/assets/a8.jpg";
import a9 from "@/assets/a9.jpg";
import a10 from "@/assets/a10.jpg";
import a11 from "@/assets/a11.jpg";

export const products = [
  { name: "Belted Camel Wool Coat", mrp: 23099, price: 1, category: "Outerwear", image: p4 },
  { name: "Silk Slip Midi Dress", mrp: 14299, price: 1, category: "Dresses", image: p5 },
  { name: "Leather Biker Jacket", mrp: 27899, price: 1, category: "Outerwear", image: p8 },
  { name: "Straight-Leg Indigo Jeans", mrp: 7899, price: 1, category: "Denim", image: p6 },
  { name: "Chunky Olive Knit", mrp: 11899, price: 1, category: "Knitwear", image: p3 },
  { name: "Linen Camp Shirt", mrp: 7099, price: 1, category: "Shirts", image: p1 },
  { name: "Pleated Midi Skirt", mrp: 9499, price: 1, category: "Skirts", image: p9 },
  { name: "Heavyweight Cotton Tee", mrp: 3099, price: 1, category: "T-Shirts", image: p7 },
  { name: "Pleated Wide Trouser", mrp: 10299, price: 1, category: "Trousers", image: p2 },
  { name: "Grey Marl Hoodie", mrp: 6299, price: 1, category: "Sweats", image: p10 },
  { name: "White Leather Sneakers", mrp: 12699, price: 1, category: "Shoes", image: p11 },
  { name: "Classic Gold Leather Watch", mrp: 19899, price: 1, category: "Watches", image: a1 },
  { name: "Steel Chronograph Watch", mrp: 31899, price: 1, category: "Watches", image: a6 },
  { name: "Leather Everyday Tote", mrp: 18299, price: 1, category: "Bags", image: a2 },
  { name: "Chain Strap Crossbody", mrp: 15099, price: 1, category: "Bags", image: a7 },
  { name: "Leather Weekender Duffel", mrp: 26299, price: 1, category: "Bags", image: a10 },
  { name: "Stacked Gold Bangles", mrp: 7099, price: 1, category: "Bracelets", image: a3 },
  { name: "Silver Link Bracelet", mrp: 6299, price: 1, category: "Bracelets", image: a8 },
  { name: "Bold Gold Link Chain", mrp: 12699, price: 1, category: "Chains", image: a4 },
  { name: "Fine Gold Pendant Chain", mrp: 7899, price: 1, category: "Chains", image: a9 },
  { name: "Mixed Metal Ring Stack", mrp: 10299, price: 1, category: "Rings", image: a5 },
  { name: "Silver Signet Ring", mrp: 8699, price: 1, category: "Rings", image: a11 },
];

export const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export const slug = (n: string) => n.toLowerCase().replace(/[^a-z0-9]+/g, "-");
export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

export type Product = (typeof products)[number];
