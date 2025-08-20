import { Product } from "./product";

export type CartItems = Product & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsList = CartItems[];
