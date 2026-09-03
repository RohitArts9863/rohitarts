import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { BUSINESS, inr, waLink } from "@/lib/shop";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout | Rohit Art's" },
      {
        name: "description",
        content: "Enter your delivery details and place your visiting card order.",
      },
      { property: "og:title", content: "Checkout | Rohit Art's" },
      { property: "og:description", content: "Place your visiting card order." },
    ],
  }),
  component: Checkout;
});

function Checkout() {
  return null;
}
