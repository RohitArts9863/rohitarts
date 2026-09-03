import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import mockup from "@/assets/visiting-card-mockup.jpg";
import { VISITING_CARD_VARIANTS, inr } from "@/lib/shop";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/visiting-cards")({
  head: () => ({
    meta: [
      { title: "Visiting Cards — ₹450 onwards | Rohit Art's" },
      {
        name: "description",
        content:
          "Premium 300 GSM visiting cards. Normal size ₹450, big size ₹650 per 100 cards. Matte or glossy finish, 2–3 day turnaround.",
      },
      { property: "og:title", content: "Visiting Cards — ₹450 onwards | Rohit Art's" },
      {
        property: "og:description",
        content:
          "Premium 300 GSM visiting cards in matte or glossy finish, printed and delivered in 2–3 days.",
      },
    ],
  }),
  component: VisitingCards,
});

const finishes = ["Glossy", "Matte"];

function VisitingCards() {
  const { addItem } = useCart();
  const [variantId, setVariantId] = useState<string>(VISITING_CARD_VARIANTS[0].id);
  const [finish, setFinish] = useState(finishes[0]);
  const [qty, setQty] = useState(1);
  const [designNote, setDesignNote] = useState("");
  const [added, setAdded] = useState(false);

  const variant =
    VISITING_CARD_VARIANTS.find((v) => v.id === variantId) ?? VISITING_CARD_VARIANTS[0];
  const total = variant.price * qty;

  function handleAdd() {
    addItem({
      name: "Visiting Cards",
      variantLabel: variant.label,
      finish,
      unitPrice: variant.price,
      qty,
      designNote: designNote.trim() || "Will share design later",
    });
    setAdded(true);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 pt-6">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
        Fixed price product
      </p>
      <h1 className="mt-1 text-[24px] font-bold text-brand-deep">Visiting Cards</h1>

      <div className="mt-4 rounded-2xl bg-card p-4 shadow-panel ring-1 ring-primary/10">
        <img
          src={mockup}
          alt="Premium visiting card mockup"
          width={1024}
          height={640}
          className="aspect-[16/9] w-full rounded-xl object-cover"
        />

        <div className="mt-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Size · 100 cards per pack
          </p>
          <div className="mt-2 flex gap-2">
            {VISITING_CARD_VARIANTS.map((v) => {
              const active = v.id === variantId;
              return (
                <label
                  key={v.id}
                  className={
                    active
                      ? "flex flex-1 cursor-pointer items-center justify-center gap-1 rounded-xl bg-primary px-3 py-2.5 text-[13px] font-semibold text-primary-foreground shadow-cta"
                      : "flex flex-1 cursor-pointer items-center justify-center gap-1 rounded-xl bg-card px-3 py-2.5 text-[13px] font-semibold text-brand-deep ring-1 ring-primary/20"
                  }
                >
                  <input
                    type="radio"
                    name="size"
                    value={v.id}
                    checked={active}
                    onChange={() => {
                      setVariantId(v.id);
                      setAdded(false);
                    }}
                    className="sr-only"
                  />
                  {v.label.replace(" Size", "")}
                  <span className="ml-1 font-bold text-accent">{inr(v.price)}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Quantity (packs)
            </p>
            <div className="mt-2 flex items-center rounded-xl bg-card ring-1 ring-primary/20">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="grid h-10 w-10 place-items-center text-lg font-bold text-brand-deep"
              >
                −
              </button>
              <span className="flex-1 text-center text-[14px] font-bold text-brand-deep">
                {qty}
              </span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty((q) => q + 1)}
                className="grid h-10 w-10 place-items-center text-lg font-bold text-brand-deep"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Finish
            </p>
            <select
              value={finish}
              onChange={(e) => setFinish(e.target.value)}
              className="mt-2 h-10 w-full rounded-xl bg-card px-3 text-[13px] font-semibold text-brand-deep ring-1 ring-primary/20"
            >
              {finishes.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Your design
          </p>
          <textarea
            value={designNote}
            onChange={(e) => setDesignNote(e.target.value)}
            rows={2}
            placeholder="Upload your own design later on WhatsApp, or describe the custom design you'd like."
            className="mt-2 w-full rounded-xl bg-card px-3 py-2 text-[13px] text-foreground ring-1 ring-primary/20 placeholder:text-muted-foreground"
          />
        </div>

        <div className="mt-4 rounded-xl bg-secondary px-3 py-2.5 text-[11px] leading-snug text-muted-foreground ring-1 ring-accent/30">
          <span className="font-semibold text-brand-deep">Premium 300 GSM paper.</span>{" "}
          Matte / glossy finish. 2–3 day turnaround. Upload your own design or request a
          custom one.
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="mt-4 h-12 w-full rounded-xl bg-primary text-[14px] font-bold text-primary-foreground shadow-cta"
        >
          Add to Cart · {inr(total)}
        </button>

        {added && (
          <Link
            to="/cart"
            className="mt-2 block rounded-xl bg-accent py-3 text-center text-[13px] font-bold text-accent-foreground"
          >
            Added — view cart →
          </Link>
        )}
      </div>
    </div>
  );
}
