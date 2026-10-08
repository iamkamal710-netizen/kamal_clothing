import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { ShieldCheck } from "lucide-react";
import { useCart, UPI_ID, UPI_NAME } from "@/lib/cart";
import { inr } from "@/lib/products";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Maison Ardent" },
      { name: "description", content: "Enter your address and pay securely with UPI." },
      { property: "og:title", content: "Checkout — Maison Ardent" },
      {
        property: "og:description",
        content: "Pay securely with Google Pay, PhonePe or any UPI app.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Checkout,
});

function Checkout() {
  const { lines, total } = useCart();
  const [orderId] = useState(() => "MA" + Date.now().toString().slice(-8));

  const upi = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(UPI_NAME)}&am=${total}.00&cu=INR&tn=${encodeURIComponent("Order " + orderId)}`;

  if (!lines.length)
    return (
      <main className="mx-auto max-w-xl px-6 pt-24 text-center">
        <h1 className="text-4xl">Your bag is empty</h1>
        <Link to="/shop" className="eyebrow mt-8 inline-block underline">
          Go to shop
        </Link>
      </main>
    );

  return (
    <main className="mx-auto grid max-w-5xl gap-12 px-6 pt-16 lg:grid-cols-[1fr_320px]">
      <section>
        <p className="eyebrow text-muted-foreground">Order {orderId}</p>
        <h1 className="mt-4 text-4xl">Pay {inr(total)} with UPI</h1>
        <p className="mt-2 text-muted-foreground">
          Scan with Google Pay, PhonePe, Paytm or any UPI app.
        </p>
        <div className="mt-6 inline-block bg-card p-6">
          <QRCodeSVG value={upi} size={240} bgColor="transparent" />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">UPI ID: {UPI_ID}</p>
        <a
          href={upi}
          className="eyebrow mt-4 block border border-primary py-4 text-center md:hidden"
        >
          Open UPI app
        </a>
      </section>
      <aside className="h-fit bg-card p-6">
        <h2 className="text-2xl">Your order</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {lines.map((l) => (
            <li key={l.name} className="flex justify-between">
              <span>
                {l.name} × {l.qty}
              </span>
              <span>{inr(l.qty * l.product.price)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 flex justify-between border-t border-border pt-4 text-lg font-medium">
          <span>Total</span>
          <span>{inr(total)}</span>
        </p>
        <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4" /> Payments go directly to the store's UPI account
        </p>
      </aside>
    </main>
  );
}
