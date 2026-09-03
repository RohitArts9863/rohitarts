import { Link } from "@tanstack/react-router";
import { BUSINESS, waLink } from "@/lib/shop";

export function SiteFooter() {
  return (
    <footer className="mt-10 bg-brand-deep px-4 pb-28 pt-8 text-cream-soft">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-lg font-bold text-cream">{BUSINESS.name}</h2>
        <p className="mt-1 text-[12px] text-cream-soft/70">
          {BUSINESS.tagline} · Proprietor {BUSINESS.owner}
        </p>

        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
              Contact
            </p>
            <ul className="mt-2 space-y-1 text-[13px]">
              {BUSINESS.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:${p}`}>{p}</a>
                </li>
              ))}
              <li>
                <a href={waLink("Hi, I'd like to enquire about printing.")}>
                  WhatsApp {BUSINESS.phones[1]}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
              Shop
            </p>
            <ul className="mt-2 space-y-1 text-[13px]">
              <li>
                <Link to="/shadi-cards">Shadi Cards</Link>
              </li>
              <li>
                <Link to="/visiting-cards">Visiting Cards</Link>
              </li>
              <li>
                <Link to="/letter-pads">Letter Pads</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
              Visit
            </p>
            <p className="mt-2 text-[13px] leading-snug text-cream-soft/80">
              {BUSINESS.address}
              <br />
              Mon – Sat, 9:30 AM – 8 PM
            </p>
          </div>
        </div>

        <p className="mt-6 border-t border-cream-soft/15 pt-4 text-[11px] text-cream-soft/50">
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
