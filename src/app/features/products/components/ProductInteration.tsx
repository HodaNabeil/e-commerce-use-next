"use client";

import useCartStore from "@/app/store/cart";
import { Product } from "@/app/types/product";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

interface ProductInteractionProps {
  selectedSize: string;
  selectedColor: string;
  product: Product;
}

export default function ProductInteration({
  selectedSize,
  selectedColor,
  product,
}: ProductInteractionProps) {
  const router = useRouter();
  const pathname = usePathname();
  const serachParams = useSearchParams();
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCartStore();

  const handleTypeChange = (type: string, value: string) => {
    const params = new URLSearchParams(serachParams.toString());
    params.set(type, value);

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleChangeQuantity = (type: "decrease" | "increase") => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      selectedSize,
      selectedColor,
    });
    toast.success("Product added to cart");
  };
  return (
    <>
      <div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700  m-2">
            Size
          </label>
          <div className="flex gap-3 mb-3">
            {product.sizes.map((size) => (
              <div
                key={size}
                onClick={() => handleTypeChange("size", size)}
                className={`px-4 py-2  text-xs cursor-pointer w-[35px] h-[35px]  border rounded-md  flex justify-center items-center  !transition-all !duration-300  ${
                  selectedSize === size
                    ? "bg-gray-900 text-white border-gray-900  "
                    : "bg-white text-gray-900 border-gray-300 hover:border-gray-900"
                }`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">
            Color
          </label>
          <div className="flex gap-3 ">
            {product.colors.map((color) => (
              <div
                key={color}
                onClick={() => handleTypeChange("color", color)}
                className={`w-[35px] h-[35px]  border rounded-md   cursor-pointer transition-all duration-300 ${
                  selectedColor === color
                    ? "border-gray-400 "
                    : "border-gray-200 "
                }`}
                style={{
                  backgroundColor: color,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <div className="flex items-center border border-gray-300 rounded-md w-fit">
          <button
            onClick={() => handleChangeQuantity("decrease")}
            className="px-3 py-2  cursor-pointer text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Minus size={16} />
          </button>
          <span className="px-4 py-2 text-gray-900 font-medium min-w-[3rem] text-center">
            {quantity}
          </span>
          <button
            onClick={() => handleChangeQuantity("increase")}
            className="px-3 py-2 cursor-pointer text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className=" my-4 flex flex-col gap-4 ">
        <button
          onClick={handleAddToCart}
          className="w-full cursor-pointer bg-gray-900 text-white py-4 px-6 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
        >
          <Plus size={20} />
          Add to Cart
        </button>

        <button
          // onClick={handleBuyNow}
          className="w-full bg-white cursor-pointer text-gray-900 py-4 px-6 rounded-md font-medium border border-gray-300 flex items-center justify-center gap-2 hover:border-gray-900 transition-colors"
        >
          <ShoppingCart size={20} />
          Buy this Item
        </button>
      </div>
    </>
  );
}
