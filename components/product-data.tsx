import { Product } from "@/utils/helper";
import { Card } from "./card";

export async function ProductData() {
  // const products = await prisma.stock.product.findMany({
  //   take: 10,
  // });

  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "no-cache",
  });

  if (!response.ok) {
    console.error("Error on fetching data from server");
  }

  const products: Product[] = await response.json();

  return products.map((product) => <Card key={product.id} product={product} />);
}
