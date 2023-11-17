import { CartData } from "./cart-data";

export function ShoppingCartData() {
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
    </div>
  );
}
