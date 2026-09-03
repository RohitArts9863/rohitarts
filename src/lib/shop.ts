export const BUSINESS = {
  name: "Rohit Art's",
  tagline: "Printing Press",
  owner: "Yash Kumar",
  phones: ["9896371546", "7404871546"],
  whatsapp: "917404871546",
  address: "392/1, Gali 2, Opp. Taneja Dairy, Mochiyon Wali Gali, Sirsa, Haryana 125055",
  mapsQuery: "Taneja Dairy, Mochiyon Wali Gali, Sirsa, Haryana 125055",
  upiId: "9518249382@upi",
  upiName: "Rohit Arts",
};

export function waLink(message: string) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Standard UPI deep link (NPCI spec) — opens GPay / PhonePe / Paytm / any UPI app. */
export function upiLink(amount: number, note: string, txnRef: string) {
  const params = new URLSearchParams({
    pa: BUSINESS.upiId,
    pn: BUSINESS.upiName,
    am: amount.toFixed(2),
    cu: "INR",
    tn: note,
    tr: txnRef,
  });
  return `upi://pay?${params.toString()}`;
}

export function makeTxnRef() {
  return `RA${Date.now().toString().slice(-9)}`;
}

export const VISITING_CARD_VARIANTS = [
  { id: "normal", label: "Normal Size", price: 450 },
  { id: "big", label: "Big Size", price: 650 },
] as const;

export type VisitingCardVariantId = (typeof VISITING_CARD_VARIANTS)[number]["id"];

export function inr(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
