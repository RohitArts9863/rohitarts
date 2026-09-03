import { createFileRoute, Link } from "@tanstack/react-router";
import { BUSINESS } from "@/lib/shop";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rohit Art's — 15+ Years of Printing" },
      {
        name: "description",
        content:
          "Rohit Art's is a family-run printing press offering wedding cards, visiting cards, letter pads and bulk stationery printing.",
      },
      { property: "og:title", content: "About Rohit Art's — 15+ Years of Printing" },
      {
        property: "og:description",
        content: "A family-run printing press known for quality paper and quick delivery.",
      },
    ],
  }),
  component: About,
});

const capabilities = [
  "Wedding & invitation cards",
  "Visiting cards & ID cards",
  "Letter pads & letterheads",
  "Bill books & receipt books",
  "Posters, banners & flex",
  "Bulk office stationery",
];

function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-6">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
        About us
      </p>
      <h1 className="mt-1 text-[24px] font-bold text-brand-deep">
        Printing done properly, since 2009
      </h1>
      <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
        {BUSINESS.name} is run by {BUSINESS.owner} and has been serving families, shops and
        offices for over fifteen years. Every job is checked by hand before it leaves the
        press — paper weight, colour, alignment and cut.
      </p>
      <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
        We keep premium 300 GSM stock for visiting cards, imported textured sheets for
        wedding invitations, and a standing arrangement with binders so bulk letter pad
        orders go out on time. Most orders are ready in 2–3 working days.
      </p>

      <div className="mt-6 rounded-2xl bg-card p-4 shadow-card ring-1 ring-primary/10">
        <h2 className="text-[15px] font-bold text-brand-deep">What we print</h2>
        <ul className="mt-3 grid grid-cols-2 gap-2">
          {capabilities.map((c) => (
            <li
              key={c}
              className="rounded-xl bg-secondary px-3 py-2 text-[12px] font-medium text-brand-deep"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          ["15+", "Years running"],
          ["2–3", "Day turnaround"],
          ["100%", "Proof before print"],
        ].map(([big, small]) => (
          <div
            key={small}
            className="rounded-2xl bg-brand-deep p-3 text-center text-cream-soft"
          >
            <p className="font-display text-[18px] font-bold text-cream">{big}</p>
            <p className="mt-0.5 text-[10px] uppercase tracking-wider text-cream-soft/70">
              {small}
            </p>
          </div>
        ))}
      </div>

      <Link
        to="/contact"
        className="mt-6 flex h-12 items-center justify-center rounded-xl bg-primary text-[14px] font-bold text-primary-foreground shadow-cta"
      >
        Talk to us about your order
      </Link>
    </div>
  );
}
