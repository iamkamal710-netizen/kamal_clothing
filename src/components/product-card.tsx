import { toast } from "sonner";
import { inr, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ p }: { p: Product }) {
  const { add } = useCart();
  const off = Math.round((1 - p.price / p.mrp) * 100);
  return (
    <article className="group flex flex-col">
      <div className="relative overflow-hidden bg-card">
        <span className="eyebrow absolute left-3 top-3 z-10 bg-accent px-2 py-1 text-accent-foreground">{off}% off</span>
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          width={800}
          height={1008}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <p className="eyebrow mt-4 text-muted-foreground">{p.category}</p>
      <h3 className="mt-1 text-xl">{p.name}</h3>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-lg font-medium">{inr(p.price)}</span>
        <span className="text-sm text-muted-foreground line-through">{inr(p.mrp)}</span>
      </div>
      <button
        onClick={() => {
          add(p.name);
          toast.success(`${p.name} added to bag`);
        }}
        className="eyebrow mt-3 border border-primary py-3 transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Add to bag
      </button>
    </article>
  );
}
