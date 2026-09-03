import { waLink } from "@/lib/shop";

export function WhatsAppFab() {
  return (
    <a
      href={waLink("Hi, I'd like to place a printing order.")}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-40 flex h-12 items-center gap-2 rounded-full bg-whatsapp px-4 text-[13px] font-bold text-whatsapp-foreground shadow-cta ring-2 ring-background/70"
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-whatsapp-foreground/20">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.2 1.1-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.7-4.4-3.9-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.8-2.1.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.7 1.7c.1.2.1.4 0 .5l-.3.5-.3.3c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l1.6.8c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z" />
        </svg>
      </span>
      Chat to Order
    </a>
  );
}
