import { Link } from "@tanstack/react-router";
import { BUSINESS } from "@/lib/shop";
import { useCart } from "@/lib/cart";

export function SiteHeader() {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-30 border-b border-primary/10 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-[15px] font-bold tracking-tight text-primary">
            {BUSINESS.name}
          </span>
          <span className="text-primary/20">·</span>
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {BUSINESS.tagline}
          </span>
        </Link>
        <nav className="flex items-center gap-3">
          <Link
            to="/about"
            className="hidden text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:inline"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hidden text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:inline"
          >
            Contact
          </Link>
          <Link
            to="/cart"
            className="text-[11px] font-semibold uppercase tracking-wider text-primary"
          >
            Cart · {count}
          </Link>
        </nav>
      </div>
    </header>
  );
}
