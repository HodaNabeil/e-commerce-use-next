import ProductInteration from "@/app/features/products/components/ProductInteration";
import { Product } from "@/app/types/product";
import Image from "next/image";

const product: Product = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  price: 59.9,
  sizes: ["xs", "s", "m", "l", "xl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  // TODO:get the product from db
  // TEMPORARY
  return {
    title: product.name,
    description: product.description,
  };
};
const ProductDetails = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  const { size, color } = await searchParams;
  const selectedSize = size || product.sizes[0];
  const selectedColor = color || product.colors[0];

  const handleBuyNow = () => {};

  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* Left Side - Product Image */}
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>

      {/* Right Side - Product Details */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-gray-900  ">{product.name}</h1>
        <p className="text-gray-600 text-sm leading-relaxed m-2">
          {product.description}
        </p>
        <div className="text-3xl font-bold text-gray-900  m-2">
          ${product.price.toFixed(2)}
        </div>

        <ProductInteration
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/klarna.png"
            alt="klarna"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/cards.png"
            alt="cards"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/stripe.png"
            alt="stripe"
            width={50}
            height={25}
            className="rounded-md"
          />
        </div>

        <div className="text-xs text-gray-500 leading-relaxed my-2">
          By clicking Pay Now, you agree to our{" "}
          <a href="#" className="underline hover:text-gray-700">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-gray-700">
            Privacy Policy
          </a>
          . You authorize us to charge your selected payment method for the
          total amount shown. All sales are subject to our{" "}
          <a href="#" className="underline hover:text-gray-700">
            return and Refund Policies
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
