"use client";

import {
  CartActions,
  CartState,
  cartReducer,
  initialState,
} from "@/lib/cart-reducer";
import { Dispatch, PropsWithChildren, useReducer } from "react";
import { createContext } from "./create-context";

const [useContext, Provider] = createContext<{
  state: CartState;
  dispatch: Dispatch<CartActions>;
}>();

export const useCartContext = useContext;

export function CartContextProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}
