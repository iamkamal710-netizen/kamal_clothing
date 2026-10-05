import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Ardent — Considered Everyday Clothing" },
      { name: "description", content: "Wool coats, linen shirts and knitwear in natural fabrics. Discover the Autumn collection." },
      { property: "og:title", content: "Maison Ardent — Considered Everyday Clothing" },
      { property: "og:description", content: "Wool coats, linen shirts and knitwear in natural fabrics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="relative">
        <img src={hero} alt="Model in camel wool coat" width={1600} height={1008} className="h-[85vh] w-full object-cover" />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/50 to-transparent">
          <div className="mx-auto w-full max-w-7xl px-6 pb-16 text-background">
            <p className="eyebrow">Autumn / Winter 2026</p>
            <h1 className="mt-3 max-w-2xl text-6xl leading-none md:text-8xl">Quiet layers for colder days</h1>
            <Link to="/shop" className="eyebrow mt-8 inline-block border border-background px-8 py-4 transition-colors hover:bg-background hover:text-foreground">
              Shop the collection
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-24">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-4xl md:text-5xl">New arrivals</h2>
          <Link to="/shop" className="eyebrow underline underline-offset-4">View all</Link>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((p) => <ProductCard key={p.name} p={p} />)}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-32 text-center">
        <p className="eyebrow text-accent">Our promise</p>
        <p className="mt-6 font-display text-3xl leading-snug md:text-4xl">
          Fewer, better pieces — cut from linen, wool and organic cotton, made to be worn for years.
        </p>
      </section>
    </main>
  );
}
