import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { BUSINESS, inr, waLink } from "@/lib/shop";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout | Rohit Art's" },
      {
        name: "description",
        content: "Enter your delivery details and place your visiting card order.",
      },
      { property: "og:title", content: "Checkout | Rohit Art's" },
      { property: "og:description", content: "Place your visiting card order." },
    ],
  }),
  component: Checkout,
});

function Checkout() {
  const { items, subtotal, clear } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [payment, setPayment] = useState("cod");
  const [placed, setPlaced] = useState(false);

  const valid = form.name.trim() && form.phone.trim() && form.address.trim();

  function placeOrder() {
    if (!valid || items.length === 0) return;
    const summary = items
      .map(
        (i) =>
          `• ${i.name} — ${i.variantLabel}, ${i.finish} × ${i.qty} = ${inr(
            i.unitPrice * i.qty,
          )} (${i.designNote})`,
      )
      .join("\n");
    const msg = `New order from ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}\nPayment: ${
      payment === "cod" ? "Cash on Delivery" : "Online payment"
    }\n\n${summary}\n\nTotal: ${inr(subtotal)}`;
    window.open(waLink(msg), "_blank");
    clear();
    setPlaced(true);
  }

  if (placed) {
    return (
      <div className="mx-auto max-w-3xl px-4 pt-10 text-center">
        <h1 className="text-[24px] font-bold text-brand-deep">Order placed</h1>
        <p className="mt-2 text-[13px] text-muted-foreground">
          Thank you! We've received your order details. {BUSINESS.owner} will confirm on
          WhatsApp shortly.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex h-11 items-center rounded-xl bg-primary px-5 text-[13px] font-bold text-primary-foreground shadow-cta"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 pt-6">
      <h1 className="text-[24px] font-bold text-brand-deep">Checkout</h1>

      {items.length === 0 ? (
        <div className="mt-6 rounded-2xl bg-card p-6 text-center shadow-card ring-1 ring-primary/10">
          <p className="text-[14px] font-semibold text-brand-deep">Nothing to check out</p>
          <Link
            to="/visiting-cards"
            className="mt-4 inline-flex h-11 items-center rounded-xl bg-primary px-5 text-[13px] font-bold text-primary-foreground shadow-cta"
          >
            Browse Visiting Cards
          </Link>
        </div>
      ) : (
        <div className="mt-4 space-y-4">
          <div className="rounded-2xl bg-card p-4 shadow-card ring-1 ring-primary/10">
            <h2 className="text-[15px] font-bold text-brand-deep">Your details</h2>
            <div className="mt-3 space-y-3">
              <Field
                label="Full name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Your name"
              />
              <Field
                label="Phone number"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                placeholder="10-digit mobile number"
                type="tel"
              />
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Delivery address
                </label>
                <textarea
                  rows={3}
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="House / shop, street, city, PIN"
                  className="mt-1 w-full rounded-xl bg-card px-3 py-2 text-[13px] ring-1 ring-primary/20 placeholder:text-muted-foreground"
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-4 shadow-card ring-1 ring-primary/10">
            <h2 className="text-[15px] font-bold text-brand-deep">Order summary</h2>
            <ul className="mt-3 space-y-2">
              {items.map((i) => (
                <li key={i.id} className="flex justify-between text-[12px]">
                  <span className="text-muted-foreground">
                    {i.name} — {i.variantLabel} ({i.finish}) × {i.qty}
                  </span>
                  <span className="font-semibold text-brand-deep">
                    {inr(i.unitPrice * i.qty)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex justify-between border-t border-border pt-3">
              <span className="text-[13px] font-semibold text-muted-foreground">Total</span>
              <span className="text-[18px] font-bold text-brand-deep">{inr(subtotal)}</span>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-4 shadow-card ring-1 ring-primary/10">
            <h2 className="text-[15px] font-bold text-brand-deep">Payment</h2>
            <div className="mt-3 space-y-2">
              {[
                { id: "cod", label: "Cash on Delivery", note: "Pay when you collect" },
                {
                  id: "online",
                  label: "Online payment",
                  note: "UPI / card link sent on WhatsApp",
                },
              ].map((p) => (
                <label
                  key={p.id}
                  className={
                    payment === p.id
                      ? "flex cursor-pointer items-center justify-between rounded-xl bg-secondary px-3 py-3 ring-1 ring-accent"
                      : "flex cursor-pointer items-center justify-between rounded-xl px-3 py-3 ring-1 ring-primary/15"
                  }
                >
                  <span className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      checked={payment === p.id}
                      onChange={() => setPayment(p.id)}
                      className="accent-accent"
                    />
                    <span className="text-[13px] font-semibold text-brand-deep">
                      {p.label}
                    </span>
                  </span>
                  <span className="text-[11px] text-muted-foreground">{p.note}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="button"
            disabled={!valid}
            onClick={placeOrder}
            className="h-12 w-full rounded-xl bg-primary text-[14px] font-bold text-primary-foreground shadow-cta disabled:opacity-50"
          >
            Place Order · {inr(subtotal)}
          </button>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1 h-11 w-full rounded-xl bg-card px-3 text-[13px] ring-1 ring-primary/20 placeholder:text-muted-foreground"
      />
    </div>
  );
}
