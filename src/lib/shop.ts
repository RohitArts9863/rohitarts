export const BUSINESS = {
  name: "Rohit Art's",
  tagline: "Printing Press",
  owner: "Yash Kumar",
  phones: ["9896371546", "7404871546"],
  whatsapp: "917404871546",
  address: "392/1, Gali 2, Opp. Taneja Dairy, Mochiyon Wali Gali, Sirsa, Haryana 125055",
  mapsQuery: "Taneja Dairy, Mochiyon Wali Gali, Sirsa, Haryana 125055",
};

export function waLink(message: string) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const VISITING_CARD_VARIANTS = [
  { id: "normal", label: "Normal Size", price: 450 },
  { id: "big", label: "Big Size", price: 650 },
] as const;

export type VisitingCardVariantId = (typeof VISITING_CARD_VARIANTS)[number]["id"];

export function inr(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
