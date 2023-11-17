"use client";

import { useCartContext } from "@/context/cart-context";
import Image from "next/image";

export function CartData() {
  const { state, dispatch } = useCartContext();

  const calculateItemPrice = (price: number, quantity: number) =>
    price * quantity;

  const removeFromCart = (productId: number) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { productId },
    });
  };

  const updateCart = (productId: number, quantity: number) => {
    dispatch({
      type: "UPDATE_ITEM",
      payload: { productId, quantity },
    });
  };

  return state.cart.length > 0
    ? state.cart.map((product) => (
        <tbody key={product.id}>
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask rounded-md w-28 h-28">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={500}
                      height={500}
                    />
                  </div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="badge badge-md indicator-item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <div className="font-bold">{product.title}</div>
                  <div className="text-sm opacity-50">{product.category}</div>
                </div>
              </div>
            </td>
            <td>
              <button
                className="btn btn-ghost btn-xs"
                onClick={() => updateCart(product.id, product.quantity - 1)}
                disabled={product.quantity <= 1}
              >
                -
              </button>
              <span className="p-2">{product.quantity}</span>
              <button
                className="btn btn-ghost btn-xs"
                onClick={() => updateCart(product.id, product.quantity + 1)}
              >
                +
              </button>
            </td>
            <td>{product.price}</td>
            <th>
              {calculateItemPrice(product.price, product.quantity).toFixed(2)}
            </th>
          </tr>
        </tbody>
      ))
    : null;
}
