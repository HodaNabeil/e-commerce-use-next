"use client";

import { Product } from "@/app/types/product";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

const ProductCard = ({ product }: { product: Product }) => {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  // Function to handle size change
  const handleProductTypeChange = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductTypes((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      {/* IMAGE */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[2/3]">
          <Image
            src={product.images[productTypes.color]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               300px"
            className="object-cover hover:scale-105 transition-all duration-500"
          />
        </div>
      </Link>
      {/* PRODUCT DETAIL */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-xs text-gray-500">{product.shortDescription}</p>
        {/*  Product types and sizes */}

        <div className="flex items-center gap-4 text-xs">
          <div className="flex flex-col items-center text-xs gap-2">
            <span className="text-gray-500">Size</span>
            <select
              name="size"
              id="size"
              className={`ring !ring-gray-300 !rounded-md px-2 py-1 ${
                productTypes.size === product.sizes[0] ? "bg-gray-100" : ""
              } `}
              value={productTypes.size}
              onChange={(e) =>
                handleProductTypeChange({ type: "size", value: e.target.value })
              }
            >
              {product.sizes.map((size) => (
                <option value={size} key={size} className="text-gray-700">
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* Product colors */}
          <div className=" flex flex-col gap-1">
            <span className="text-gray-500 text-xs">Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div
                  key={color}
                  onClick={() =>
                    handleProductTypeChange({ type: "color", value: color })
                  }
                  className={`w-6 h-6 border-2 cursor-pointer rounded-full flex items-center justify-center ${
                    productTypes.color === color
                      ? "border-gray-400"
                      : "border-gray-200"
                  }`}
                >
                  <div
                    className="w-[14px] h-[14px] rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between  items-center gap-2 ">
          <p className="font-medium text-sm">${product.price.toFixed(2)}</p>
          <button className="ring ring-gray-300 flex items-center  cursor-pointer px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
            <ShoppingCart className="inline mr-2 w-4 h-4" />
            <p className=" hidden md:block text-sm"> Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
