"use server";

import prisma from "@/prisma/client";
import { Product } from "@/utils/helper";

export async function createOrder(data: Product[]) {
  // if successfully order created, return

  const order = await prisma.order.create({
    data: {
      items: {
        create: data.map((item) => ({
          id: item.id,
          title: item.title,
          image: item.image,
          description: item.description,
          price: item.price,
          category: item.category,
          quantity: item.quantity,
        })),
      },
      status: "PENDING",
    },
  });

  return order;
}
