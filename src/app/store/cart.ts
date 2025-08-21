import { create } from "zustand";
import { CartActions, CartItems, CartState } from "../types/cart";

import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create<CartState & CartActions>()(
  persist(
    (set) => ({
      cart: [] as CartItems[],
      hasHydrated: false,
      addToCart: (product: CartItems) =>
        set((state) => {
          const existingIndex = state.cart.findIndex(
            (item) =>
              item.id === product.id &&
              item.selectedSize === product.selectedSize &&
              item.selectedColor === product.selectedColor
          );

          if (existingIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingIndex].quantity += product.quantity || 1;
            return { cart: updatedCart };
          }

          return {
            cart: [
              ...state.cart,
              {
                ...product,
                quantity: product.quantity || 1,
                // هيتم الحصول عليهم من المنتج
                selectedColor: product.selectedColor,
                selectedSize: product.selectedSize,
              },
            ],
          };
        }),
      removeFromCart: (product: CartItems) =>
        set((state) => ({
          cart: state.cart.filter(
            (item: CartItems) =>
              !(
                item.id === product.id &&
                item.selectedColor === product.selectedColor &&
                item.selectedSize === product.selectedSize
              )
          ),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true;
        }
      },
    }
  )
);

export default useCartStore;
