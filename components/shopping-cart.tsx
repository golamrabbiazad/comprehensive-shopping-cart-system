import { useCartContext } from "@/context/cart-context";
import { CartData } from "./cart-data";
import { createOrder } from "@/server/create-order";
import { calculateTotalPrice } from "@/utils/helper";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export function ShoppingCartData() {
  const { state, dispatch } = useCartContext();
  const router = useRouter();
  const user = useUser();

  const handleOrder = async () => {
    const order = await createOrder(state.cart);

    if (order.id) {
      router.push("/order");
    }

    dispatch({ type: "CLEAR_CART", payload: { cart: [] } });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <CartData />
      </table>
      <div className="flex flex-col gap-8">
        <span className="text-info text-right">
          Subtotal: ${calculateTotalPrice(state.cart).toFixed(2)}
        </span>

        {user.isSignedIn ? (
          <div className="card-actions">
            <button className="btn btn-primary btn-block" onClick={handleOrder}>
              Order
            </button>
          </div>
        ) : (
          <div className="card-actions">
            <button className="btn btn-secondary btn-block">
              <Link href={"/sign-in"}>Sign to Order</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
