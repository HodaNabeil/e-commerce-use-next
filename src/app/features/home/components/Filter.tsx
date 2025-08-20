"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchPaaram = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const handleFilterChange = (value: string) => {
    const params = new URLSearchParams(searchPaaram.toString());

    params.set("sort", value);
    router.push(`${pathName}?${params.toString()} `, {
      scroll: false,
    });
  };
  return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-6 p-2">
      <span>Sort by: </span>
      <select
        name="sort"
        id="sort"
        className=" ring-1 ring-gray-200 shadow-md p-1 rounded-sm cursor-pointer"
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        <option value={"newest"}>Newest </option>
        <option value={"oldest"}>Oldest</option>
        <option value={"priceLowToHigh"}>Price Low to High</option>
        <option value={"priceHighToLow"}>Price High to Low</option>
      </select>
    </div>
  );
}
