import { createFileRoute, Link } from "@tanstack/react-router";
import catShadi from "@/assets/cat-shadi.jpg";
import catVisiting from "@/assets/cat-visiting.jpg";
import catLetterpad from "@/assets/cat-letterpad.jpg";
import { BUSINESS, waLink } from "@/lib/shop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rohit Art's — Your Trusted Printing Partner" },
      {
        name: "description",
        content:
          "Shadi cards, visiting cards and letter pads printed on premium paper. Fast delivery, bulk orders welcome, custom design available.",
      },
      { property: "og:title", content: "Rohit Art's — Your Trusted Printing Partner" },
      {
        property: "og:description",
        content:
          "Wedding invitations, visiting cards and letter pads from a trusted local printing press.",
      },
    ],
  }),
  component: Index,
});

const badges = ["Fast Delivery", "Bulk Orders Welcome", "Custom Design"];

function Index() {
  return (
    <div className="mx-auto max-w-5xl pb-4">
      <section className="relative mx-3 mt-4 overflow-hidden rounded-2xl ring-1 ring-primary/10 shadow-panel">
        <div className="absolute inset-0 hero-wash" />
        <div className="absolute inset-0 hero-scrim" />
        <div className="relative p-5 pt-24">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-soft">
            Trusted since 2009
          </p>
          <h1 className="mt-2 text-[27px] font-bold leading-[1.08] text-cream sm:text-4xl">
            Your Trusted
            <br />
            Printing Partner
          </h1>
          <p className="mt-2 max-w-[280px] text-[13px] leading-snug text-cream-soft/90">
            Wedding, visiting &amp; letter-pad printing with premium paper and a quick
            turnaround.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full bg-brand-deep/40 px-2.5 py-1 text-[10px] font-medium text-cream-soft ring-1 ring-cream-soft/25"
              >
                {b}
              </span>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <Link
              to="/visiting-cards"
              className="flex h-11 flex-1 items-center justify-center rounded-xl bg-accent text-[13px] font-bold text-accent-foreground shadow-gold"
            >
              Browse Products
            </Link>
            <Link
              to="/about"
              className="flex h-11 items-center rounded-xl bg-brand-deep/30 px-3 text-[12px] font-semibold text-cream-soft ring-1 ring-cream-soft/30"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-7 px-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
              Shop
            </p>
            <h2 className="mt-1 text-[20px] font-bold text-brand-deep">
              Product Categories
            </h2>
          </div>
          <span className="text-[11px] font-medium text-muted-foreground">
            3 categories
          </span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <Link
            to="/shadi-cards"
            className="overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-primary/10"
          >
            <div className="relative">
              <img
                src={catShadi}
                alt="Traditional shadi wedding invitation card with gold foil"
                loading="lazy"
                width={1024}
                height={768}
                className="aspect-[4/3] w-full object-cover"
              />
              <span className="absolute left-2 top-2 rounded-md bg-primary/90 px-2 py-0.5 text-[9px] font-semibold text-cream-soft">
                Custom
              </span>
            </div>
            <div className="p-3">
              <h3 className="text-[14px] font-bold text-brand-deep">Shadi Cards</h3>
              <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                Traditional to minimal wedding invites
              </p>
              <p className="mt-2 text-[11px] font-semibold text-accent">
                Get price on WhatsApp →
              </p>
            </div>
          </Link>

          <Link
            to="/visiting-cards"
            className="overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-primary/10"
          >
            <div className="relative">
              <img
                src={catVisiting}
                alt="Stack of premium printed visiting cards"
                loading="lazy"
                width={1024}
                height={768}
                className="aspect-[4/3] w-full object-cover"
              />
              <span className="absolute left-2 top-2 rounded-md bg-accent px-2 py-0.5 text-[9px] font-semibold text-accent-foreground">
                Fixed price
              </span>
            </div>
            <div className="p-3">
              <h3 className="text-[14px] font-bold text-brand-deep">Visiting Cards</h3>
              <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                Matte or glossy, 100 premium cards
              </p>
              <p className="mt-2 text-[13px] font-bold text-brand-deep">From ₹450</p>
            </div>
          </Link>

          <Link
            to="/letter-pads"
            className="col-span-2 flex overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-primary/10"
          >
            <img
              src={catLetterpad}
              alt="Ruled letter pad with printed letterhead"
              loading="lazy"
              width={1024}
              height={640}
              className="aspect-[4/3] w-2/5 shrink-0 object-cover"
            />
            <div className="flex w-3/5 flex-col p-3.5">
              <h3 className="text-[15px] font-bold text-brand-deep">Letter Pads</h3>
              <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                A4 / A5 · plain or ruled. Perfect for offices &amp; clinics.
              </p>
              <p className="mt-auto pt-2 text-[11px] font-semibold text-accent">
                Get price on WhatsApp →
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="mt-8 px-4">
        <div className="flex items-center gap-3 rounded-2xl bg-brand-deep p-4 text-cream-soft shadow-panel">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent text-[15px] font-bold text-accent-foreground">
            15
          </div>
          <div className="flex-1">
            <h3 className="font-display text-[14px] font-bold text-cream">
              15+ years of quality printing
            </h3>
            <p className="text-[11px] text-cream-soft/70">
              {BUSINESS.owner} · {BUSINESS.phones[0]} · {BUSINESS.phones[1]}
            </p>
          </div>
          <a
            href={waLink("Hi, I'd like to enquire about printing.")}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 items-center rounded-lg bg-accent px-3 text-[12px] font-bold text-accent-foreground"
          >
            Chat
          </a>
        </div>
      </section>
    </div>
  );
}
