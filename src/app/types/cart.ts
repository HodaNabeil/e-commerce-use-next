import { Product } from "./product";

export type CartItems = Product & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsList = CartItems[];

export type CartState = {
  cart: CartItems[];
  hasHydrated: boolean;
};

export type CartActions = CartState & {
  addToCart: (item: CartItems) => void;
  removeFromCart: (item: CartItems) => void;
  clearCart: () => void;
};
