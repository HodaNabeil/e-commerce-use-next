import { CartItems, CartItemsList } from "@/app/types/Cart";
import PaymentForm from "./PaymentForm";
import ProductCard from "./ProductCard";
import ShoppingForm from "./ShoppingForm";
import { useState } from "react";

export default function Steps({
  cartItems,
  activeStep,
}: {
  cartItems: CartItemsList;
  activeStep: number;
}) {
  const [shippingForm, setShippingForm] = useState(false);
  return (
    <div className="w-full lg:w-7/12 shadow-lg border-1 border-amber-100 p-8 rounded-lg flexflex-col gap-8">
      {activeStep === 1 ? (
        cartItems.map((item: CartItems) => {
          return <ProductCard key={item.id} item={item} />;
        })
      ) : activeStep === 2 ? (
        <ShoppingForm setShippingForm={() => setShippingForm(true)} />
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
