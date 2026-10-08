import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart";
import { inr } from "@/lib/products";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Bag — Maison Ardent" },
      { name: "description", content: "Review the items in your shopping bag." },
      { property: "og:title", content: "Your Bag — Maison Ardent" },
      { property: "og:description", content: "Review the items in your shopping bag." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Cart,
});

function Cart() {
  const { lines, total, setQty } = useCart();
  const mrp = lines.reduce((a, l) => a + l.qty * l.product.mrp, 0);
  if (!lines.length)
    return (
      <main className="mx-auto max-w-3xl px-6 pt-24 text-center">
        <h1 className="text-5xl">Your bag is empty</h1>
        <Link
          to="/shop"
          className="eyebrow mt-8 inline-block bg-primary px-8 py-4 text-primary-foreground"
        >
          Start shopping
        </Link>
      </main>
    );
  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 lg:grid-cols-[1fr_360px]">
      <div>
        <h1 className="text-5xl">Your bag</h1>
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {lines.map((l) => (
            <li key={l.name} className="flex gap-5 py-5">
              <img
                src={l.product.image}
                alt={l.name}
                width={96}
                height={120}
                className="h-30 w-24 object-cover"
              />
              <div className="flex flex-1 flex-col">
                <p className="text-lg">{l.name}</p>
                <p className="text-sm text-muted-foreground">
                  {inr(l.product.price)} <span className="line-through">{inr(l.product.mrp)}</span>
                </p>
                <div className="mt-auto flex items-center gap-3">
                  <button
                    aria-label="Decrease"
                    onClick={() => setQty(l.name, l.qty - 1)}
                    className="border border-border p-1"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span>{l.qty}</span>
                  <button
                    aria-label="Increase"
                    onClick={() => setQty(l.name, l.qty + 1)}
                    className="border border-border p-1"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                  <button
                    aria-label="Remove"
                    onClick={() => setQty(l.name, 0)}
                    className="ml-auto text-muted-foreground"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <aside className="h-fit bg-card p-6">
        <h2 className="text-2xl">Order summary</h2>
        <dl className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between">
            <dt>Total MRP</dt>
            <dd>{inr(mrp)}</dd>
          </div>
          <div className="flex justify-between text-accent">
            <dt>Discount</dt>
            <dd>-{inr(mrp - total)}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Delivery</dt>
            <dd>FREE</dd>
          </div>
          <div className="flex justify-between border-t border-border pt-3 text-lg font-medium">
            <dt>To pay</dt>
            <dd>{inr(total)}</dd>
          </div>
        </dl>
        <Link
          to="/checkout"
          className="eyebrow mt-6 block bg-primary py-4 text-center text-primary-foreground"
        >
          Place order
        </Link>
      </aside>
    </main>
  );
}
