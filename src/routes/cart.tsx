import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";
import { inr } from "@/lib/shop";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart | Rohit Art's" },
      {
        name: "description",
        content: "Review your visiting card order before checkout.",
      },
      { property: "og:title", content: "Your Cart | Rohit Art's" },
      { property: "og:description", content: "Review your visiting card order." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, setQty, removeItem, subtotal } = useCart();

  return (
    <div className="mx-auto max-w-3xl px-4 pt-6">
      <h1 className="text-[24px] font-bold text-brand-deep">Your Cart</h1>
      <p className="mt-1 text-[12px] text-muted-foreground">
        Visiting cards have fixed pricing and check out here. Shadi cards and letter pads
        are quoted on WhatsApp.
      </p>

      {items.length === 0 ? (
        <div className="mt-6 rounded-2xl bg-card p-6 text-center shadow-card ring-1 ring-primary/10">
          <p className="text-[14px] font-semibold text-brand-deep">Your cart is empty</p>
          <Link
            to="/visiting-cards"
            className="mt-4 inline-flex h-11 items-center rounded-xl bg-primary px-5 text-[13px] font-bold text-primary-foreground shadow-cta"
          >
            Browse Visiting Cards
          </Link>
        </div>
      ) : (
        <>
          <ul className="mt-4 space-y-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="rounded-2xl bg-card p-4 shadow-card ring-1 ring-primary/10"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-[15px] font-bold text-brand-deep">{item.name}</h2>
                    <p className="text-[11px] text-muted-foreground">
                      {item.variantLabel} · {item.finish} · {inr(item.unitPrice)} per 100
                      cards
                    </p>
                    <p className="mt-1 text-[11px] italic text-muted-foreground">
                      {item.designNote}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-[11px] font-semibold uppercase tracking-wider text-destructive"
                  >
                    Remove
                  </button>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center rounded-xl ring-1 ring-primary/20">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => setQty(item.id, item.qty - 1)}
                      className="grid h-9 w-9 place-items-center text-lg font-bold text-brand-deep"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-[14px] font-bold text-brand-deep">
                      {item.qty}
                    </span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => setQty(item.id, item.qty + 1)}
                      className="grid h-9 w-9 place-items-center text-lg font-bold text-brand-deep"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-[15px] font-bold text-brand-deep">
                    {inr(item.unitPrice * item.qty)}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 rounded-2xl bg-card p-4 shadow-panel ring-1 ring-primary/10">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-semibold text-muted-foreground">
                Subtotal
              </span>
              <span className="text-[20px] font-bold text-brand-deep">{inr(subtotal)}</span>
            </div>
            <Link
              to="/checkout"
              className="mt-3 flex h-12 items-center justify-center rounded-xl bg-primary text-[14px] font-bold text-primary-foreground shadow-cta"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
