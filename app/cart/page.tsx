import { CartPreview } from "@/components/cart-preview";

export default function CartPage() {
  return (
    <div className="mx-auto flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-3xl font-bold tracking-tight py-4">Shopping Cart</h2>
      <div className="divider w-96 mx-auto" />
      <CartPreview />
    </div>
  );
}
