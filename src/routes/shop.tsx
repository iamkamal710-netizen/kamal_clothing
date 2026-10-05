import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Maison Ardent" },
      { name: "description", content: "Shop shirts, trousers and knitwear from Maison Ardent." },
      { property: "og:title", content: "Shop — Maison Ardent" },
      { property: "og:description", content: "Shirts, trousers and knitwear in natural fabrics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Shop,
});

const cats = categories;

function Shop() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? products : products.filter((p) => p.category === cat);
  return (
    <main className="mx-auto max-w-7xl px-6 pt-16">
      <h1 className="text-6xl">Shop</h1>
      <p className="mt-2 text-muted-foreground">{list.length} pieces</p>
      <div className="mt-8 flex flex-wrap gap-3">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`eyebrow border px-5 py-2 transition-colors ${c === cat ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => <ProductCard key={p.name} p={p} />)}
      </div>
    </main>
  );
}
