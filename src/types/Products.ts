import { PreviewType } from "../constants/product";

export type TProduct = {
  id: number;
  name: string;
  MRP: number;
  discount: number;
  categories: string[];
  for: string[];
  imageSrc: string;
  primaryFor: string;
  currency: string;
  previewType: PreviewType;
  src: string;
};
