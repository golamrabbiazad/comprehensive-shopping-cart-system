"use client";

import { useCartContext } from "@/context/cart-context";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
}

interface CardProps {
  product: Product;
}

export function Card({ product }: CardProps) {
  const { image, title, price, category } = product;
  const { dispatch } = useCartContext();

  const addToCart = (product: Product) => {
    dispatch({
      type: "ADD_ITEM",
      payload: { product },
    });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </figure>
      <div className="card-body flex gap-4">
        <h2 className="card-title text-sm text-gray-700">{title}</h2>
        <h2 className="card-title text-sm text-gray-600">{category}</h2>
        <p className="text-sm font-medium text-gray-500">${price}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => addToCart({ ...product, quantity: 1 })}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
