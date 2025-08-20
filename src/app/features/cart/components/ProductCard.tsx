import { CartItems } from "@/app/types/cart";
import { Trash2 } from "lucide-react";
import Image from "next/image";

export default function ProductCard({ item }: { item: CartItems }) {
  return (
    <div className="flex items-center justify-between">
      {/* IMge and Content */}
      <div className="flex  gap-4">
        <div className="relative w-32 h-32 rounded-lg overflow-hidden">
          <Image
            src={item.images[item.selectedColor]}
            alt={item.name}
            fill
            className=" object-cover"
          />
        </div>
        {/* Content */}
        <div className="flex flex-col justify-between ">
          <div className=" flx flex-col gap-1 text-gray-500 text-sm ">
            <p>{item.name}</p>
            <p> quantity :{item.quantity}</p>
            <p>size : {item.selectedSize}</p>
            <p>color : {item.selectedColor}</p>
          </div>
          <p className="text-sm font-medium">${item.price.toFixed(2)}</p>
        </div>
      </div>
      {/* Delete Button */}
      <button
        className=" gap-2 w-8 h-8  bg-gray-100 hover:bg-gray-200 transition-all duration-300 
                     p-2 py-1 rounded-full cursor-pointer text-red-400 "
      >
        <Trash2 className="w-4 h-4 flex items-center" />
      </button>
    </div>
  );
}
