import { Suspense } from "react";

import Loading from "@/app/loading";
import { ProductData } from "./product-data";

export function Products() {
  return (
    <div className="mx-auto py-12">
      <h2 className="text-3xl font-bold tracking-tight py-4">Products</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <Suspense fallback={<Loading />}>
          <ProductData />
        </Suspense>
      </div>
    </div>
  );
}
