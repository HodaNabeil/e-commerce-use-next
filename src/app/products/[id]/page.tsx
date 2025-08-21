import ProductInteration from "@/app/features/products/components/ProductInteration";
import { Product } from "@/app/types/product";
import Image from "next/image";

const product: Product = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription: "راحة وأناقة بأحدث تكنولوجيا الجري.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  price: 59.9,
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/7g.png",
    purple: "/products/7p.png",
    green: "/products/7g.png", // Using same image for demo
  },
};

export const generateMatadate = async ({
  params,
}: {
  params: { id: string };
}) => {
  // TODO:get the Product from db
  // TEMPORARy
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

  const handleBuyNow = () => {
    // handleAddToCart();
    // Redirect to checkout or cart page
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12">
      {/* Left Side - Product Image */}
      <div className="relative h-96">
        <Image
          src="/products/7g.png"
          alt="Product"
          fill
          className="  object-contain"
        />
      </div>

      {/* Right Side - Product Details */}
      <div className="w-full">
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

        <div className="flex items-center gap-4">
          <div>
            <Image
              src="/klarna.png"
              alt="Klarna"
              className="h-8 w-8  object-contain"
              width={32}
              height={32}
            />
          </div>
          <div className="flex items-center gap-1">
            <div className="w-8 h-5 bg-orange-500 rounded-l-full"></div>
            <div className="w-8 h-5 bg-red-500 rounded-r-full"></div>
            <span className="ml-2 text-sm font-medium">Mastercard</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-8 h-5 bg-blue-600 rounded"></div>
            <span className="ml-2 text-sm font-medium">VISA</span>
          </div>
          <div>
            <Image
              src="/stripe.png"
              alt="Stripe"
              className="h-8 w-8  object-contain"
              width={32}
              height={32}
            />
          </div>
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
