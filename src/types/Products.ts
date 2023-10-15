import { PreviewType } from "../constants/product";

export type TProduct = {
  id: number;
  name: string;
  MRP: number;
  discount: number;
  categories: string[];
  for: string[];
  image: {
    preview: string;
    regular: string;
  };
  primaryFor: string;
  currency: string;
  currencySymbol: string;
  previewType: PreviewType;
  src: string;
  brand: string;
  portal: string;
};

export type TProductFilters = {
  category: string;
  forCategory: string;
  price: number;
};
