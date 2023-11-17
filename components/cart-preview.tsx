"use client";

import { useCartContext } from "@/context/cart-context";
import { ShoppingCartData } from "./shopping-cart";
import Link from "next/link";

export function CartPreview() {
  const { state, dispatch } = useCartContext();

  const createOrder = async () => {
    dispatch({ type: "CLEAR_CART", payload: { cart: [] } });
  };

  const calculateTotalPrice = () => {
    return state.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  return state.cart.length > 0 ? (
    <div>
      <ShoppingCartData />
      <div className="flex flex-col gap-8">
        <span className="text-info text-right">
          Subtotal: ${calculateTotalPrice().toFixed(2)}
        </span>
        <div className="card-actions">
          <button className="btn btn-primary btn-block">
            <Link href="/order" onClick={createOrder}>
              order
            </Link>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <h2 className="text-3xl font-bold text-center tracking-tight py-4">
      Empty
    </h2>
  );
}
