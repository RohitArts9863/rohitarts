import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import letterpad from "@/assets/cat-letterpad.jpg";
import { waLink } from "@/lib/shop";

export const Route = createFileRoute("/letter-pads")({
  head: () => ({
    meta: [
      { title: "Letter Pads — A4 & A5 Printing | Rohit Art's" },
      {
        name: "description",
        content:
          "Custom letter pads in A4 and A5, plain or ruled, printed with your letterhead. Get a price on WhatsApp.",
      },
      { property: "og:title", content: "Letter Pads — A4 & A5 Printing | Rohit Art's" },
      {
        property: "og:description",
        content:
          "Letterhead pads for offices and clinics — A4 or A5, plain or ruled, bulk friendly.",
      },
    ],
  }),
  component: LetterPads,
});

const sizes = ["A4", "A5"];
const papers = ["Plain", "Ruled"];

function LetterPads() {
  const [size, setSize] = useState(sizes[0]);
  const [paper, setPaper] = useState(papers[0]);
  const [qty, setQty] = useState(10);

  const link = waLink(
    `Hi, I'd like a price for Letter Pads. Size: ${size}, Paper: ${paper}, Quantity: ${qty} pads.`,
  );

  return (
    <div className="mx-auto max-w-3xl px-4 pt-6">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
        Made to order
      </p>
      <h1 className="mt-1 text-[24px] font-bold text-brand-deep">Letter Pads</h1>

      <div className="mt-4 rounded-2xl bg-card p-4 shadow-panel ring-1 ring-primary/10">
        <img
          src={letterpad}
          alt="Ruled letter pad with printed letterhead"
          width={1024}
          height={640}
          className="aspect-[16/9] w-full rounded-xl object-cover"
        />

        <p className="mt-3 text-[12px] leading-snug text-muted-foreground">
          Letterhead pads for offices, clinics and shops. 50 or 100 sheets per pad, printed
          in one or two colours. Pricing depends on size, paper and quantity.
        </p>

        <Option
          label="Size"
          options={sizes}
          value={size}
          onChange={setSize}
        />
        <Option
          label="Paper type"
          options={papers}
          value={paper}
          onChange={setPaper}
        />

        <div className="mt-4 flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Pads needed
          </p>
          <div className="flex items-center gap-1 rounded-full bg-secondary p-1 ring-1 ring-primary/10">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQty((q) => Math.max(5, q - 5))}
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
              onClick={() => setQty((q) => q + 5)}
              className="grid h-7 w-7 place-items-center rounded-full text-brand-deep"
            >
              +
            </button>
          </div>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex h-12 items-center justify-center rounded-xl bg-whatsapp text-[14px] font-bold text-whatsapp-foreground shadow-cta"
        >
          Get Price on WhatsApp
        </a>
      </div>
    </div>
  );
}

function Option({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="mt-4">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <div className="mt-2 flex gap-2">
        {options.map((o) => (
          <label
            key={o}
            className={
              o === value
                ? "flex flex-1 cursor-pointer items-center justify-center rounded-xl bg-primary px-3 py-2.5 text-[13px] font-semibold text-primary-foreground shadow-cta"
                : "flex flex-1 cursor-pointer items-center justify-center rounded-xl bg-card px-3 py-2.5 text-[13px] font-semibold text-brand-deep ring-1 ring-primary/20"
            }
          >
            <input
              type="radio"
              name={label}
              value={o}
              checked={o === value}
              onChange={() => onChange(o)}
              className="sr-only"
            />
            {o}
          </label>
        ))}
      </div>
    </div>
  );
}
