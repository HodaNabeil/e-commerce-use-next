"use client";
import {
  ShoppingBasket,
  Shirt,
  Footprints,
  Glasses,
  Briefcase,
  Venus,
  Hand,
} from "lucide-react";
import { Category } from "@/app/types/product";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories: Category[] = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];

export default function Categories() {
  const searchPaaram = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const selectedCategory = searchPaaram.get("category");

  const handleChangeCategory = (categorySlug: string) => {
    const params = new URLSearchParams(searchPaaram.toString());

    params.set("category", categorySlug);
    router.push(`${pathName}?${params.toString()} `, {
      scroll: false,
    });
  };
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 
       gap-2 bg-gray-100 p-4 rounded-lg shadow-md mb-4 text-sm"
    >
      {categories.map((category) => (
        <div
          className={`flex items-center juctify-center gap-2 cursor-pointer px-2 py-1 rounded-md
            ${
              selectedCategory === category.slug
                ? "bg-amber-500 text-white"
                : "text-gray-500 hover:bg-gray-200"
            }`}
          key={category.slug}
          onClick={() => handleChangeCategory(category.slug)}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
}
