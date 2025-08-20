import { Product } from "./product";

export type CartItems = Product & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsList = CartItems[];

export type CartState = {
  cart: CartItems[];
};

export type CartActions = CartState & {
  addToCart: (item: CartItems) => void;
  removeFromCart: (id: CartItems) => void;
  clearCart: () => void;
};
