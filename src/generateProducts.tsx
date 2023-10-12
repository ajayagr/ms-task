import { Category, For, PreviewType } from "./constants/product";
import { TProduct } from "./types/Products";

const sampleProduct = [
  "Cozy Throw",
  "Smartphone Pro",
  "Designer Watch",
  "Kitchen Set",
  "Kids' Learning",
  "Fashion Handbag",
  "Wireless Buds",
  "Home Theater",
  "Luxury Perfume",
  "Coffee Maker",
  "Fitness Tracker",
  "Jewelry Box",
  "Smart Home Hub",
  "Cookware Set",
  "Men's Suit",
  "Women's Dress",
  "Adventure Gear",
  "Wellness Spa",
  "Arcade Game",
  "Board Game",
  "Bedding Set",
  "Record Player",
  "Sunglasses",
  "Men's Sneakers",
  "Women's Boots",
  "Leather Wallet",
  "Decorative Art",
  "Camera Kit",
  "Cooking Class",
  "Kids' Tablet",
  "Elderly Care",
  "Gourmet Basket",
  "Wine Tasting",
  "Office Essentials",
  "Streaming Sub.",
  "Photo Frame",
  "Laptop Kit",
  "Aromatherapy",
  "Power Tools",
  "Men's Cologne",
  "Women's Bag",
  "Gaming Bundle",
  "Fitness Equip.",
  "Decor Pieces",
  "Adventure Pass",
  "Spa Retreat",
  "Arcade Machine",
  "Art Supplies",
  "Men's Watch",
  "Women's Perfume",
  "Jewelry",
  "Surround Sound",
  "Cooking Class",
  "Kids' Toys",
  "Elderly Kit",
  "Home Art",
  "Photography",
  "Cooking Set",
  "Men's Suit",
  "Women's Dress",
  "Hiking Gear",
  "Wellness Day",
  "Arcade Game",
  "Puzzle Set",
  "Silk Bedding",
  "Record Player",
  "Sunglasses",
  "Outdoor Gear",
  "Athletic Shoes",
  "High Heels",
  "Leather Bag",
  "Decor Pieces",
  "Camera Kit",
  "Culinary Class",
  "Kids' Tablet",
  "Elderly Care",
  "Wine Selection",
  "Office Tools",
  "Streaming Sub.",
  "Photo Frame",
  "Laptop Kit",
  "Oil Diffuser",
  "Power Tools",
  "Fragrance Set",
  "Handbag",
  "Game Console",
  "Fitness Gear",
  "Art & Collect.",
  "Adventure Trip",
  "Spa Retreat",
];

const categoriesArray = [
  Category.Trending,
  Category.Lifestyle,
  Category.HomeDécor,
  Category.Electronics,
  Category.Appliances,
];
const forArray = [For.Men, For.Women, For.Kids, For.Elderly, For.Friends];
const imageType = [
  PreviewType.normal,
  PreviewType.normal,
  PreviewType.normal,
  PreviewType.normal,
  PreviewType.normal,
  PreviewType.normal,
  PreviewType.tall,
  PreviewType.normal,
  PreviewType.wide,
  PreviewType.normal,
];
const brandArray = ["Macy's", "H&M", "Bajaj", "GAP", "Levi's", "Dyson"];
const portalArray = ["Amazon", "Flipkart", "Tata Neu"];

export const generateRandomObjects = (): TProduct[] => {
  const obj: TProduct[] = [];
  for (let i = 0; i < 90; i++) {
    const MRP = Math.round(Math.random() * 895) + 5;
    const discount = Math.round(MRP * Math.random() * 0.5);
    const categoryCount = Math.trunc(Math.random() * 3) + 1;
    const forCount = Math.trunc(Math.random() * 2) + 1;

    const categories: Category[] = [];
    const tempForArray: For[] = [];

    for (let j = 0; j < categoryCount; j++) {
      categories.push(categoriesArray[Math.round(Math.random() * 4)]);
    }
    for (let k = 0; k < forCount; k++) {
      tempForArray.push(forArray[Math.round(Math.random() * 4)]);
    }

    obj.push({
      id: i + 1,
      name: sampleProduct[i],
      MRP,
      discount,
      categories,
      for: tempForArray,
      currency: "USD",
      currencySymbol: "$",
      imageSrc: `img${i + 1}.jpeg`,
      previewType:
        imageType[Math.round(Math.random() * (imageType.length - 1))],
      primaryFor:
        tempForArray[Math.round(Math.random() * (tempForArray.length - 1))],
      src: "https://www.amazon.com",
      brand: brandArray[Math.round(Math.random() * (brandArray.length - 1))],
      portal: portalArray[Math.round(Math.random() * (portalArray.length - 1))],
    });
  }
  return obj;
};
