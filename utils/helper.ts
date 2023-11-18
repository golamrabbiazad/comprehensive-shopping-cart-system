export interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
}

export const calculateTotalPrice = (cart: Product[]) => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};
