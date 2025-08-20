import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import ShoppingCartIcon from "@/app/components/shared/ShoppingCartIcon";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4  w-full border-b border-gray-200 pb-2">
      {/* Lift */}
      <Link href="/" className="text-lg font-bold  flex items-center ">
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={36}
          height={36}
          className=" w-6 h-6 md:w-9 md:h-9"
        />
        <span className="hidden md:block text-md font-medium   tracking-wide">
          E-Commerce
        </span>
      </Link>

      {/* Right */}
      <div className="flex items-center gap-4">
        <SearchBar />
        <Link href={"/"}>
          <Home className="text-gray-600 w-4 h-4" />
        </Link>
        <Bell className="text-gray-600 w-4 h-4" />
        <ShoppingCartIcon />
      </div>
    </nav>
  );
}
