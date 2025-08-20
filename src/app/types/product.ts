import { ReactNode } from "react";
export interface Product {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>; // key = اللون , value = رابط الصورة
}

export type Products = Product[];

export interface Category {
  name: string;
  icon: ReactNode;
  slug: string;
}
