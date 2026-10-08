import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { products, type Product } from "./products";

export const UPI_ID = "yourname@upi"; // replace with your real UPI ID
export const UPI_NAME = "Maison Ardent";

type Line = { name: string; qty: number };
type Ctx = {
  lines: (Line & { product: Product })[];
  count: number;
  total: number;
  add: (name: string) => void;
  setQty: (name: string, qty: number) => void;
  clear: () => void;
};

const CartCtx = createContext<Ctx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);
  useEffect(() => {
    try {
      setLines(JSON.parse(localStorage.getItem("cart") || "[]"));
    } catch {
      // corrupt or unavailable localStorage: start with an empty cart
    }
  }, []);
  const save = (l: Line[]) => {
    setLines(l);
    try {
      localStorage.setItem("cart", JSON.stringify(l));
    } catch {
      // storage full or blocked (e.g. private mode): keep the in-memory cart working
    }
  };
  const full = lines
    .map((l) => ({ ...l, product: products.find((p) => p.name === l.name)! }))
    .filter((l) => l.product);
  const value: Ctx = {
    lines: full,
    count: full.reduce((a, l) => a + l.qty, 0),
    total: full.reduce((a, l) => a + l.qty * l.product.price, 0),
    add: (name) => {
      const ex = lines.find((l) => l.name === name);
      save(
        ex
          ? lines.map((l) => (l.name === name ? { ...l, qty: l.qty + 1 } : l))
          : [...lines, { name, qty: 1 }],
      );
    },
    setQty: (name, qty) =>
      save(
        qty <= 0
          ? lines.filter((l) => l.name !== name)
          : lines.map((l) => (l.name === name ? { ...l, qty } : l)),
      ),
    clear: () => save([]),
  };
  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const c = useContext(CartCtx);
  if (!c) throw new Error("useCart outside CartProvider");
  return c;
}
