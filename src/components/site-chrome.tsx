import { Link } from "@tanstack/react-router";
import { ShoppingBag, ShieldCheck, Truck, RotateCcw, BadgeIndianRupee } from "lucide-react";
import { useCart } from "@/lib/cart";
import { useAuth } from "@/lib/auth";

export function SiteHeader() {
  const { count } = useCart();
  const { user, loading, signOut } = useAuth();
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
      <div className="bg-primary py-2 text-center text-primary-foreground eyebrow">
        Festive learning sale · Every item just ₹1 · Free delivery across India
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-4 sm:px-6 sm:py-5">
        <Link to="/" className="whitespace-nowrap font-display text-2xl tracking-wide">
          Maison Ardent
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 whitespace-nowrap eyebrow sm:gap-8">
          <Link to="/shop" activeProps={{ className: "text-accent" }}>
            Shop
          </Link>
          <Link to="/about" activeProps={{ className: "text-accent" }}>
            About
          </Link>
          {!loading &&
            (user ? (
              <button onClick={() => signOut()} title={user.email ?? undefined}>
                Log out
              </button>
            ) : (
              <>
                <Link to="/login" activeProps={{ className: "text-accent" }}>
                  Log in
                </Link>
                <Link to="/signup" activeProps={{ className: "text-accent" }}>
                  Sign up
                </Link>
              </>
            ))}
          <Link to="/cart" className="relative flex items-center gap-2" aria-label="Bag">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] text-accent-foreground">
                {count}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

// Voice assistant (built on Vapi) that answers customer calls.
export const SUPPORT_PHONE = "87895634";
export const SUPPORT_PHONE_LABEL = "87895634";

const trust = [
  { icon: ShieldCheck, t: "100% secure UPI payments" },
  { icon: Truck, t: "Free delivery across India" },
  { icon: RotateCcw, t: "Easy 7-day returns" },
  { icon: BadgeIndianRupee, t: "Pay with GPay, PhonePe, Paytm" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
        {trust.map(({ icon: I, t }) => (
          <div key={t} className="flex items-center gap-3 text-sm">
            <I className="h-6 w-6 text-accent" /> {t}
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-border px-6 py-8 md:flex-row md:justify-between">
        <div>
          <p className="font-display text-xl">Maison Ardent</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Questions about an order? Call our 24/7 assistant:{" "}
            <a
              href={`tel:${SUPPORT_PHONE}`}
              className="text-foreground underline underline-offset-4"
            >
              {SUPPORT_PHONE_LABEL}
            </a>
          </p>
        </div>
        <p className="eyebrow text-muted-foreground">
          Prices in INR, incl. of all taxes · Learning demo store
        </p>
      </div>
    </footer>
  );
}
