import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import traditional from "@/assets/shadi-traditional.jpg";
import modern from "@/assets/shadi-modern.jpg";
import floral from "@/assets/shadi-floral.jpg";
import minimal from "@/assets/shadi-minimal.jpg";
import { waLink } from "@/lib/shop";

export const Route = createFileRoute("/shadi-cards")({
  head: () => ({
    meta: [
      { title: "Shadi Cards — Wedding Invitations | Rohit Art's" },
      {
        name: "description",
        content:
          "Traditional, modern, floral and minimal wedding invitation cards. Share your design and quantity on WhatsApp for a quick price.",
      },
      { property: "og:title", content: "Shadi Cards — Wedding Invitations | Rohit Art's" },
      {
        property: "og:description",
        content:
          "Browse wedding card designs and get a price on WhatsApp within minutes.",
      },
    ],
  }),
  component: ShadiCards,
});

const styles = ["All", "Traditional", "Modern", "Floral", "Minimal"] as const;

const designs = [
  { name: "Rajput Gold", style: "Traditional", img: traditional },
  { name: "Quiet Line", style: "Modern", img: modern },
  { name: "Gulmohar Bloom", style: "Floral", img: floral },
  { name: "Ivory Simple", style: "Minimal", img: minimal },
];

function ShadiCards() {
  const [filter, setFilter] = useState<(typeof styles)[number]>("All");
  const [qty, setQty] = useState(200);
  const [names, setNames] = useState("");

  const visible = designs.filter((d) => filter === "All" || d.style === filter);

  function inquiry(designName: string) {
    return waLink(
      `Hi, I'm interested in this Shadi Card design: ${designName}. Quantity needed: ${qty} cards.${
        names.trim() ? ` Names for personalization: ${names.trim()}.` : ""
      }`,
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 pt-6">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
        Made to order
      </p>
      <h1 className="mt-1 text-[24px] font-bold text-brand-deep">Shadi Cards</h1>
      <p className="mt-1 text-[13px] leading-snug text-muted-foreground">
        Pricing depends on paper, finish and quantity. Pick a design and we'll send you a
        price on WhatsApp.
      </p>

      <div className="-mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1">
        {styles.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setFilter(s)}
            className={
              filter === s
                ? "shrink-0 rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold text-primary-foreground"
                : "shrink-0 rounded-full bg-card px-3 py-1.5 text-[11px] font-medium text-muted-foreground ring-1 ring-primary/15"
            }
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-2xl bg-card p-3.5 shadow-card ring-1 ring-primary/10">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Cards needed
          </p>
          <div className="flex items-center gap-1 rounded-full bg-secondary p-1 ring-1 ring-primary/10">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQty((q) => Math.max(50, q - 50))}
              className="grid h-7 w-7 place-items-center rounded-full text-brand-deep"
            >
              −
            </button>
            <span className="w-10 text-center text-[14px] font-bold text-brand-deep">
              {qty}
            </span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQty((q) => q + 50)}
              className="grid h-7 w-7 place-items-center rounded-full text-brand-deep"
            >
              +
            </button>
          </div>
        </div>
        <input
          type="text"
          value={names}
          onChange={(e) => setNames(e.target.value)}
          placeholder="Names / text for personalization"
          className="mt-3 w-full rounded-xl bg-card px-3 py-2.5 text-[13px] ring-1 ring-primary/20 placeholder:text-muted-foreground"
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {visible.map((d) => (
          <div
            key={d.name}
            className="overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-primary/10"
          >
            <img
              src={d.img}
              alt={`${d.style} wedding card design — ${d.name}`}
              loading="lazy"
              width={768}
              height={768}
              className="aspect-square w-full object-cover"
            />
            <div className="p-3">
              <h3 className="text-[13px] font-bold text-brand-deep">{d.name}</h3>
              <p className="text-[11px] text-muted-foreground">{d.style}</p>
              <a
                href={inquiry(d.name)}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center rounded-lg bg-whatsapp py-2 text-[11px] font-bold text-whatsapp-foreground"
              >
                Get Price on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
