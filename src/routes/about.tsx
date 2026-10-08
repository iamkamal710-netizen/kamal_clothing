import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maison Ardent" },
      {
        name: "description",
        content: "The story behind Maison Ardent and how we make our clothing.",
      },
      { property: "og:title", content: "About — Maison Ardent" },
      { property: "og:description", content: "Our story, materials and approach to slow fashion." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: About,
});

const values = [
  ["Natural fabrics", "Linen, wool and organic cotton — chosen to age beautifully."],
  ["Small batches", "We produce in limited runs to avoid waste and overstock."],
  ["Made to last", "Reinforced seams and timeless cuts, built for years of wear."],
];

function About() {
  return (
    <main className="mx-auto max-w-5xl px-6 pt-20">
      <p className="eyebrow text-accent">Our story</p>
      <h1 className="mt-4 text-5xl leading-tight md:text-7xl">
        Clothing made slowly, worn for a long time.
      </h1>
      <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
        Maison Ardent began with a simple idea: a wardrobe of fewer, better pieces. Every garment is
        designed in our studio and made with partners we know by name.
      </p>
      <div className="mt-20 grid gap-12 border-t border-border pt-12 md:grid-cols-3">
        {values.map(([t, d]) => (
          <div key={t}>
            <h2 className="text-3xl">{t}</h2>
            <p className="mt-3 text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
