import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className=" flex flex-col mt-16 gap-8 md:gap-0  items-center   md:items-start  justify-between md:justify-start
     bg-gray-800   p-8 w-full  md:flex-row rounded-lg"
    >
      <div className="flex flex-col   items-center  md:items-start  gap-5 w-full ">
        <Link href="/" className="   flex items-center  text-sm ">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={36}
            height={36}
            className=" w-6 h-6 md:w-9 md:h-9"
          />
          <span className=" md:block  font-medium  text-white   tracking-wide">
            E-Commerce
          </span>
        </Link>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} -Commerce. All rights reserved.
        </p>
        <p className="text-sm text-gray-400">Built with ❤️ by Your Name</p>
      </div>
      <div
        className="flex  flex-col gap-4 text-sm  p-4 w-full justify-center  items-center  text-gray-400 md:items-start  
    "
      >
        <p className="text-sm text-amber-50 ">Links</p>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms of Service</Link>
      </div>
      <div className="flex  flex-col gap-4 text-sm  p-4 w-full   justify-center  items-center text-gray-400 md:items-start ">
        <p className="text-sm text-amber-50 ">Customer Service</p>
        <Link href="/">Help Center</Link>
        <Link href="/">Shipping Info</Link>
        <Link href="/">Returns</Link>
        <Link href="/">Track Order</Link>
        <Link href="/">Contact Us</Link>
      </div>
      <div className="flex  flex-col gap-4 text-sm  p-4 w-full  justify-center  items-center  text-gray-400 md:items-start ">
        <p className="text-sm text-amber-50 ">Company Info</p>
        <Link href="/">About Us</Link>
        <Link href="/">Careers</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Terms of Service</Link>
      </div>{" "}
    </footer>
  );
}
