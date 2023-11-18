"use client";

import { useCartContext } from "@/context/cart-context";
import { ShoppingCartData } from "./shopping-cart";

export function CartPreview() {
  const { state } = useCartContext();

  return state.cart.length > 0 ? (
    <div>
      <ShoppingCartData />
    </div>
  ) : (
    <h2 className="text-3xl font-bold text-center tracking-tight py-4">
      Empty
    </h2>
  );
}
