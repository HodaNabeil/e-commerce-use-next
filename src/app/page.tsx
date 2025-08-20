import Image from "next/image";
import ProductList from "./features/home/components/ProductList";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;

  return (
    <div className="">
      <div className="relative  aspect-[3/1] mb-12">
        <Image src="/featured.png" fill alt="Featured prouduct"></Image>
      </div>
      <ProductList category={category} params="products" />
    </div>
  );
};

export default Homepage;
