import prisma from "@/prisma/client";

export default async function AdminDashboard() {
  const orders = await prisma.order.findMany({
    include: {
      items: true,
    },
  });

  if (!orders) {
    return <div>Orders not created yet.</div>;
  }

  return (
    <div className="mx-auto flex flex-col py-12 justify-start items-center min-h-screen overflow-x-auto">
      {orders.map((order) => (
        <ul key={order.id}>
          <li>Order Status</li>
          <li>
            {order.status} {order.items.length} items
          </li>
        </ul>
      ))}
    </div>
  );
}
