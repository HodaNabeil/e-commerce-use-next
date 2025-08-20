import { create } from "zustand";
import { CartActions, CartItems, CartState } from "../types/cart";

import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create<CartState & CartActions>()(
  persist(
    (set) => ({
      cart: [] as CartItems[],
      addToCart: (product: CartItems) =>
        set((state) => ({ cart: [...state.cart, product] })),
      removeFromCart: (product: CartItems) =>
        set((state) => ({
          cart: state.cart.filter((item: CartItems) => item.id !== product.id),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
