import { Products } from "@/app/types/product";
import React from "react";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Filter from "./Filter";
const products: Products = [
  {
    id: 1,
    name: "Nike Ultraboost Pulse",
    shortDescription: "راحة وأناقة بأحدث تكنولوجيا الجري.",
    description:
      "حذاء Nike Ultraboost Pulse مصمم بأحدث تقنيات الراحة والدعم. خامات عالية الجودة مع تهوية مثالية لجعل خطواتك أكثر خفة.",
    price: 69.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "pink"],
    images: {
      gray: "/products/7g.png",
      pink: "/products/7p.png",
    },
  },
  {
    id: 2,
    name: "Levi's Classic Denim",
    shortDescription: "بنطلون جينز كلاسيكي يناسب كل الأوقات.",
    description:
      "جينز Levi's Classic Denim مصنوع من خامة متينة وجودة عالية، مناسب للخروج الكاجوال أو العمل مع تصميم أنيق ومريح.",
    price: 59.9,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: {
      blue: "/products/2g.png",
      green: "/products/2gr.png",
    },
  },
  {
    id: 3,
    name: "Adidas Running Tee",
    shortDescription: "تيشيرت رياضي خفيف ومريح.",
    description:
      "تيشيرت Adidas مصنوع من قماش مرن وخفيف، يساعدك على الجري أو التمرين براحة تامة مع تهوية ممتازة.",
    price: 29.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["black", "white"],
    images: {
      black: "/products/3b.png",
      white: "/products/3bl.png",
    },
  },
  {
    id: 4,
    name: "Puma Sport Jacket",
    shortDescription: "جاكيت رياضي أنيق للشتاء.",
    description:
      "جاكيت Puma Sport Jacket مقاوم للبرد والرياح، تصميم عصري وخفيف الوزن مع بطانة داخلية للحفاظ على دفئك.",
    price: 89.9,
    sizes: ["m", "l", "xl"],
    colors: ["navy", "red"],
    images: {
      navy: "/products/4p.png",
      red: "/products/4w.png",
    },
  },
  {
    id: 5,
    name: "Converse All Star",
    shortDescription: "حذاء كاجوال أيقوني من Converse.",
    description:
      "Converse All Star الحذاء الكلاسيكي الأشهر، مناسب لكل الأوقات والكاجوال ستايل. متوفر بألوان متعددة.",
    price: 49.9,
    sizes: ["39", "40", "41", "42"],
    colors: ["white", "black"],
    images: {
      white: "/products/5bl.png",
      black: "/products/5o.png",
    },
  },
];

export default function ProductList({
  category,
  params,
}: {
  category: string;
  params: "homepage" | "products";
}) {
  return (
    <div>
      <Categories />
      {params === "products" && <Filter />}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
   gap-12"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Link
        className="flex justify-end items-center  underline mt-4  text-gray-400 hover:text-gray-600"
        href={category ? `/products?category=${category}` : "/products"}
      >
        view all Products
      </Link>
    </div>
  );
}
