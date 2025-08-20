"use client";

import useCartStore from "@/app/store/cart";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ShoppingCartIcon() {
  const { cart } = useCartStore();
  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="text-gray-600 w-4 h-4" />
      <span
        className="
      absolute -top-3 -right-3 w-5 h-5  
      
      text-xs text-gray-600 flex justify-center item-center bg-amber-400 !rounded-[50%] "
      >
        {cart.length}
      </span>
    </Link>
  );
}
