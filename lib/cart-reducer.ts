interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
}

export type CartState = {
  cart: Product[];
};

export const initialState: CartState = {
  cart: [],
};

type AddItem = {
  type: "ADD_ITEM";
  payload: {
    product: Product;
  };
};

type RemoveItem = {
  type: "REMOVE_ITEM";
  payload: {
    productId: number;
  };
};

type UpdateItem = {
  type: "UPDATE_ITEM";
  payload: {
    productId: number;
    quantity: number;
  };
};

type ClearCart = {
  type: "CLEAR_CART";
  payload: {
    cart: [];
  };
};

export type CartActions = AddItem | RemoveItem | UpdateItem | ClearCart;

export const cartReducer = (
  state: CartState = initialState,
  action: CartActions
) => {
  if (action.type === "ADD_ITEM") {
    const { product } = action.payload;

    const existingItem = state.cart.find((item) => item.id === product.id);

    if (existingItem) {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: product.quantity + 1 }
            : item
        ),
      };
    }

    return {
      ...state,
      cart: [...state.cart, product],
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const { productId } = action.payload;

    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== productId),
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const { productId, quantity } = action.payload;

    return {
      ...state,
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      cart: [],
    };
  }

  return state;
};
