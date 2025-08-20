"use client";

import { useSearchParams } from "next/navigation";
import OrderSummary from "../features/cart/components/OrderSummary";
import Steps from "../features/cart/components/Steps";
import ItemsSteps from "../features/cart/components/ItemsSteps";
import { CartItemsList } from "../types/Cart";

const cartItems: CartItemsList = [
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
    quantity: 1,
    selectedSize: "s",
    selectedColor: "gray",
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
    quantity: 9,
    selectedSize: "m",
    selectedColor: " blue",
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
    quantity: 9,
    selectedSize: "xl",
    selectedColor: "black",
  },
];
export default function cartPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const searchPaaram = useSearchParams();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const activeStep = parseInt(searchPaaram.get("step") || "1");

  return (
    <div className=" flex flex-col gap-8 items-center justify-center mt-12">
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      <ItemsSteps activeStep={activeStep} />
      <div className="w-full flex flex-col lg:flex-row gap-16">
        <Steps cartItems={cartItems} activeStep={activeStep} />
        <OrderSummary Props={{ cartItems, activeStep }} />
      </div>
    </div>
  );
}
