import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { useCart, UPI_ID, UPI_NAME } from "@/lib/cart";
import { inr } from "@/lib/products";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Maison Ardent" },
      { name: "description", content: "Enter your address and pay securely with UPI." },
      { property: "og:title", content: "Checkout — Maison Ardent" },
      { property: "og:description", content: "Pay securely with Google Pay, PhonePe or any UPI app." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Checkout,
});

const field = "w-full border border-input bg-background px-4 py-3 outline-none focus:border-ring";

function Checkout() {
  const { lines, total, clear } = useCart();
  const [step, setStep] = useState<"address" | "pay" | "done">("address");
  const [orderId] = useState(() => "MA" + Date.now().toString().slice(-8));
  const [utr, setUtr] = useState("");
  const [addr, setAddr] = useState({ name: "", phone: "", address: "", pincode: "" });

  const upi = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(UPI_NAME)}&am=${total}.00&cu=INR&tn=${encodeURIComponent("Order " + orderId)}`;

  if (step === "done")
    return (
      <main className="mx-auto max-w-xl px-6 pt-24 text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-accent" />
        <h1 className="mt-6 text-5xl">Order placed!</h1>
        <p className="mt-4 text-muted-foreground">Order ID <strong className="text-foreground">{orderId}</strong> · Payment ref {utr}</p>
        <p className="mt-2 text-muted-foreground">Delivering to {addr.name}, {addr.pincode}</p>
        <Link to="/shop" className="eyebrow mt-8 inline-block bg-primary px-8 py-4 text-primary-foreground">Continue shopping</Link>
      </main>
    );

  if (!lines.length)
    return (
      <main className="mx-auto max-w-xl px-6 pt-24 text-center">
        <h1 className="text-4xl">Your bag is empty</h1>
        <Link to="/shop" className="eyebrow mt-8 inline-block underline">Go to shop</Link>
      </main>
    );

  return (
    <main className="mx-auto grid max-w-5xl gap-12 px-6 pt-16 lg:grid-cols-[1fr_320px]">
      <section>
        <p className="eyebrow text-muted-foreground">Step {step === "address" ? 1 : 2} of 2</p>
        {step === "address" ? (
          <form
            className="mt-4 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setStep("pay");
            }}
          >
            <h1 className="text-4xl">Delivery address</h1>
            <input required placeholder="Full name" className={field} value={addr.name} onChange={(e) => setAddr({ ...addr, name: e.target.value })} />
            <input required pattern="[6-9][0-9]{9}" placeholder="10-digit mobile number" className={field} value={addr.phone} onChange={(e) => setAddr({ ...addr, phone: e.target.value })} />
            <textarea required placeholder="House no, street, area, city" className={field} rows={3} value={addr.address} onChange={(e) => setAddr({ ...addr, address: e.target.value })} />
            <input required pattern="[0-9]{6}" placeholder="6-digit PIN code" className={field} value={addr.pincode} onChange={(e) => setAddr({ ...addr, pincode: e.target.value })} />
            <button className="eyebrow w-full bg-primary py-4 text-primary-foreground">Continue to payment</button>
          </form>
        ) : (
          <div className="mt-4">
            <h1 className="text-4xl">Pay {inr(total)} with UPI</h1>
            <p className="mt-2 text-muted-foreground">Scan with Google Pay, PhonePe, Paytm or any UPI app.</p>
            <div className="mt-6 inline-block bg-card p-6">
              <QRCodeSVG value={upi} size={220} bgColor="transparent" />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">UPI ID: {UPI_ID}</p>
            <a href={upi} className="eyebrow mt-4 block border border-primary py-4 text-center md:hidden">Open UPI app</a>
            <form
              className="mt-8 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                clear();
                setStep("done");
              }}
            >
              <label className="text-sm">After paying, enter the 12-digit UPI reference (UTR) number</label>
              <input required pattern="[0-9]{12}" placeholder="e.g. 412345678901" className={field} value={utr} onChange={(e) => setUtr(e.target.value)} />
              <button className="eyebrow w-full bg-primary py-4 text-primary-foreground">I have paid · Confirm order</button>
            </form>
          </div>
        )}
      </section>
      <aside className="h-fit bg-card p-6">
        <h2 className="text-2xl">Your order</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {lines.map((l) => (
            <li key={l.name} className="flex justify-between"><span>{l.name} × {l.qty}</span><span>{inr(l.qty * l.product.price)}</span></li>
          ))}
        </ul>
        <p className="mt-4 flex justify-between border-t border-border pt-4 text-lg font-medium"><span>Total</span><span>{inr(total)}</span></p>
        <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground"><ShieldCheck className="h-4 w-4" /> Payments go directly to the store's UPI account</p>
      </aside>
    </main>
  );
}
