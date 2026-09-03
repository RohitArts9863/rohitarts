import { createFileRoute } from "@tanstack/react-router";
import { BUSINESS, waLink } from "@/lib/shop";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Bulk Orders | Rohit Art's" },
      {
        name: "description",
        content:
          "Call 9896371546 or 7404871546, or message us on WhatsApp for bulk printing orders and custom design work.",
      },
      { property: "og:title", content: "Contact & Bulk Orders | Rohit Art's" },
      {
        property: "og:description",
        content: "Phone, WhatsApp and shop address for Rohit Art's printing press.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-6">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
        Contact &amp; bulk orders
      </p>
      <h1 className="mt-1 text-[24px] font-bold text-brand-deep">Get in touch</h1>
      <p className="mt-2 text-[13px] leading-snug text-muted-foreground">
        Call us, drop by the shop, or send your requirement on WhatsApp — we reply with a
        price the same day.
      </p>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {BUSINESS.phones.map((p, i) => (
          <a
            key={p}
            href={`tel:${p}`}
            className="rounded-2xl bg-card p-4 shadow-card ring-1 ring-primary/10"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              {i === 0 ? "Shop line" : "Bulk orders"}
            </p>
            <p className="mt-1 text-[16px] font-bold text-brand-deep">{p}</p>
          </a>
        ))}
      </div>

      <a
        href={waLink("Hi, I'd like to discuss a bulk printing order.")}
        target="_blank"
        rel="noreferrer"
        className="mt-3 flex h-12 items-center justify-center rounded-xl bg-whatsapp text-[14px] font-bold text-whatsapp-foreground shadow-cta"
      >
        WhatsApp {BUSINESS.phones[1]}
      </a>

      <div className="mt-4 rounded-2xl bg-card p-4 shadow-card ring-1 ring-primary/10">
        <h2 className="text-[15px] font-bold text-brand-deep">Visit the press</h2>
        <p className="mt-1 text-[13px] leading-snug text-muted-foreground">
          {BUSINESS.address}
          <br />
          Open Monday to Saturday, 9:30 AM – 8:00 PM
        </p>
        <div className="mt-3 grid aspect-[16/9] w-full place-items-center rounded-xl bg-secondary text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
          Map coming soon
        </div>
      </div>
    </div>
  );
}
