"use client";

import { CartItems } from "@/app/types/cart";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
type Props = {
  cartItems: CartItems[];
  activeStep: number;
};
export default function OrderSummary({ Props }: { Props: Props }) {
  const { cartItems, activeStep } = Props;
  const router = useRouter();
  return (
    <div
      className="w-full lg:w-7/12 shadow-lg border-1 border-amber-100 p-8 rounded-lg flex  h-max
          
          flex-col gap-8"
    >
      <h2 className="text-2xl font-medium">Order Summary</h2>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center text-sm">
          <p className="text-gray-500 ">subtotal</p>
          <span className="  font-medium ">
            {cartItems
              .reduce(
                (acc: number, item: { price: number; quantity: number }) =>
                  acc + item.price * item.quantity,
                0
              )
              .toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <p className="text-gray-500 ">shipping</p>
          <span className="  font-medium ">0</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <p className="text-gray-500 ">discount</p>
          <span className="  font-medium ">8%</span>
        </div>
        <hr className="border-1 border-gray-200" />
        <div className="flex justify-between items-center text-sm">
          <p className="text-gray-800 capitalize text-md  font-medium">total</p>
          <span className="  font-medium ">
            {cartItems
              .reduce(
                (acc: number, item: { price: number; quantity: number }) =>
                  acc + item.price * item.quantity,
                0
              )
              .toFixed(2)}
          </span>
        </div>
      </div>
      {activeStep === 1 && (
        <button
          onClick={() => router.push("/cart?step=2", { scroll: false })}
          className="bg-gray-700 hover:bg-gray-900 tarnsitin-all duration-300
           rounded-lg !cursor-pointer flex items-center justify-center  text-white p-2 px-4 w-full "
        >
          containue
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      )}
    </div>
  );
}
