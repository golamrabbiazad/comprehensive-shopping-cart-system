import { Suspense } from "react";
import { Card } from "./card";

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
}

export async function Products() {
  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Error on fetching products from server!");
  }

  const products: Product[] = await response.json();

  return (
    <div className="mx-auto py-12">
      <h2 className="text-3xl font-bold tracking-tight py-4">Products</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <Suspense fallback={<p>Loading...</p>}>
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
