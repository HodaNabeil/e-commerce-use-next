import { CartItems } from "@/app/types/cart";
import PaymentForm from "./PaymentForm";
import ProductCard from "./ProductCard";
import ShoppingForm from "./ShoppingForm";
import { useState } from "react";
import useCartStore from "@/app/store/cart";
import { ShippingFormValues } from "@/app/validations/cart";

export default function Steps({ activeStep }: { activeStep: number }) {
  const [shippingForm, setShippingForm] = useState<ShippingFormValues>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });
  const { cart } = useCartStore();
  const cartItems = cart;
  return (
    <div className="w-full lg:w-7/12 shadow-lg border-1 border-amber-100 p-8 rounded-lg flexflex-col gap-8">
      {activeStep === 1 ? (
        cartItems.map((item: CartItems) => {
          return (
            <ProductCard
              key={item.id + item.selectedSize + item.selectedColor}
              item={item}
            />
          );
        })
      ) : activeStep === 2 ? (
        <ShoppingForm setShippingForm={setShippingForm} />
      ) : activeStep === 3 && shippingForm ? (
        <PaymentForm />
      ) : (
        <p className="text-sm text-gray-400">
          Please fill the shipping form first
        </p>
      )}
    </div>
  );
}
