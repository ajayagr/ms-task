import { Category, ForCategories, PreviewType } from "./constants/product";
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
const forArray = [
  ForCategories.Men,
  ForCategories.Women,
  ForCategories.Kids,
  ForCategories.Elderly,
  ForCategories.Friends,
];
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
const tallImageUrls = [
  {
    thumbnail:
      "https://images.unsplash.com/photo-1564023162242-91b863c6dcd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1564023162242-91b863c6dcd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1571063769135-f7b6b742db4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1571063769135-f7b6b742db4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1593418441830-572e338bdcd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1593418441830-572e338bdcd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1620917669809-1af0497965de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1620917669809-1af0497965de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1556228720-195a672e8a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1578570217134-c86133afdbf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1578570217134-c86133afdbf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1616957677033-0e1e2e812272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1616957677033-0e1e2e812272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1519668963014-2308b08e5e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1519668963014-2308b08e5e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1641390321648-79df9fd22e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1641390321648-79df9fd22e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1560343090-f0409e92791a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1542038335240-86aea625b913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1542038335240-86aea625b913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1587467063174-79c3979f396f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1587467063174-79c3979f396f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1602574237777-fef4326708cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1602574237777-fef4326708cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1600084788785-1b84363c5ec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1600084788785-1b84363c5ec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1554948419-1939083b12cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1554948419-1939083b12cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1491933382434-500287f9b54b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1597354984706-fac992d9306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1597354984706-fac992d9306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1617004890831-c99c16006144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1617004890831-c99c16006144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1586098998386-b1d545715217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1586098998386-b1d545715217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjd8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1615281612781-4b972bd4e3fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjh8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1615281612781-4b972bd4e3fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjh8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1568386453619-84c3ff4b43c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjh8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1568386453619-84c3ff4b43c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjh8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1556227834-09f1de7a7d14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjh8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1556227834-09f1de7a7d14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjh8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1511556820780-d912e42b4980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjh8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjh8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1620917669788-be691b2db72a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjh8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1620917669788-be691b2db72a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjh8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1612188842101-f976582906fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjh8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1612188842101-f976582906fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjh8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1616957676934-729874fcb759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjh8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1616957676934-729874fcb759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyNjh8&ixlib=rb-4.0.3&q=80&w=400",
  },
];
const wideImageUrls = [
  {
    thumbnail:
      "https://images.unsplash.com/photo-1616449457848-aadd830fc3a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1616449457848-aadd830fc3a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1559056199-96c307526265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1559056199-96c307526265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1623934619584-5ba1e3801028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1623934619584-5ba1e3801028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1588186939549-c087e0796efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1588186939549-c087e0796efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1577734723294-85de4f1a2c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1577734723294-85de4f1a2c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1621962728420-a7328f6ea8ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1621962728420-a7328f6ea8ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1566814534947-46a09bcbb88c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1566814534947-46a09bcbb88c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1634906435560-f1aa50d33fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1634906435560-f1aa50d33fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1617220377936-6423b02875d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1617220377936-6423b02875d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1627384113944-4822313913c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1627384113944-4822313913c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1627384113917-bc078ba7c385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1627384113917-bc078ba7c385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1614267861476-0d129972a0f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1614267861476-0d129972a0f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1627384113890-8f8893f2411a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1627384113890-8f8893f2411a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1508771400123-e194ad75c0e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1508771400123-e194ad75c0e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1619708662321-71b89443c3ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1619708662321-71b89443c3ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1548100721-15f0e76035c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1548100721-15f0e76035c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1556217256-dcd735bb8711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1556217256-dcd735bb8711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1592914637125-28479601c75a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1592914637125-28479601c75a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1591375275624-c2f9fdcc1dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1591375275624-c2f9fdcc1dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1518112390430-f4ab02e9c2c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1518112390430-f4ab02e9c2c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1616781677825-3c8cfc2f79a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1616781677825-3c8cfc2f79a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1592842125302-53494d164c90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1592842125302-53494d164c90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1520256862855-398228c41684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=400",
    main: "https://images.unsplash.com/photo-1520256862855-398228c41684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUzMDB8&ixlib=rb-4.0.3&q=80&w=1080",
  },
];
const normalImageUrls = [
  {
    thumbnail:
      "https://images.unsplash.com/photo-1643902534396-96dd62c03e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1643902534396-96dd62c03e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1694127803463-7b264de6e842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1694127803463-7b264de6e842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1614159102350-fc3c9eedead5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1614159102350-fc3c9eedead5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1569770218135-bea267ed7e84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1569770218135-bea267ed7e84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1654648662327-5d4d32cf67bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1654648662327-5d4d32cf67bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1652837345706-6a0f9c0148c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1652837345706-6a0f9c0148c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1648688135643-2716ec8f4b24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1648688135643-2716ec8f4b24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1670201202961-dce15b9e6939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1670201202961-dce15b9e6939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1650934759380-46ae135476cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1650934759380-46ae135476cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1636297461709-0812290a9dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1636297461709-0812290a9dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1608142172575-b7c5bb9bb98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1608142172575-b7c5bb9bb98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1508296695146-257a814070b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1588959571205-4f53699d31d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1588959571205-4f53699d31d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1645075960701-573cbc669de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1645075960701-573cbc669de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1589820933732-5594c9d89076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1589820933732-5594c9d89076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1691480162735-9b91238080f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1691480162735-9b91238080f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1636614597280-3dde89cbd6cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1636614597280-3dde89cbd6cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1580437082423-4f0e58a2d413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1580437082423-4f0e58a2d413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1658126392415-811bf97e5d40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1658126392415-811bf97e5d40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1604364184152-f3bd80470c45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1604364184152-f3bd80470c45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1632205357771-cd24d88e2f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1632205357771-cd24d88e2f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1688789645479-955d294b419f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1688789645479-955d294b419f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1652749141477-9988a08f43b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1652749141477-9988a08f43b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1629198735660-e39ea93f5c18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1629198735660-e39ea93f5c18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1499096382193-ebb232527fee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1499096382193-ebb232527fee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1653620199505-85e2e1f20b7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1653620199505-85e2e1f20b7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1629198745421-a7b409ca6d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1629198745421-a7b409ca6d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1613187592744-f2c2a911581d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1613187592744-f2c2a911581d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjQ1MDR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1636614178501-e03f25a87516?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1636614178501-e03f25a87516?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1677167643883-b4c703a5da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1677167643883-b4c703a5da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1613187592744-f2c2a911581d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1613187592744-f2c2a911581d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1613187433272-9d21d5c9b8e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1613187433272-9d21d5c9b8e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1652407819581-4ccc39aab997?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1652407819581-4ccc39aab997?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1653620199505-85e2e1f20b7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1653620199505-85e2e1f20b7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1588959570943-b686e76e5c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1588959570943-b686e76e5c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1629198735660-e39ea93f5c18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1629198735660-e39ea93f5c18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1609357912333-27872db33d5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1609357912333-27872db33d5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1641302063626-add5862ed2fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1641302063626-add5862ed2fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1608142172575-b7c5bb9bb98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1608142172575-b7c5bb9bb98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1606322296555-9b058f9c9fda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1606322296555-9b058f9c9fda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1612590838546-42efc879aa49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1612590838546-42efc879aa49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1634055769490-dc0a9f22826a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1634055769490-dc0a9f22826a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1652749141477-9988a08f43b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1652749141477-9988a08f43b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1694127803463-7b264de6e842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1694127803463-7b264de6e842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1686715017969-eda1e207029a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1686715017969-eda1e207029a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1651194753493-bebd8d241e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1651194753493-bebd8d241e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1646072609959-0893c1a841d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1646072609959-0893c1a841d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1651540589735-12cffa044899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1651540589735-12cffa044899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1636614597280-3dde89cbd6cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1636614597280-3dde89cbd6cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1653881143772-192556864811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1653881143772-192556864811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1649984563008-94fa9963370e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1649984563008-94fa9963370e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1566958769312-82cef41d19ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=200",
    main: "https://images.unsplash.com/photo-1566958769312-82cef41d19ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDY5OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTczNjUyMTR8&ixlib=rb-4.0.3&q=80&w=400",
  },
];

export const generateRandomObjects = (): TProduct[] => {
  const obj: TProduct[] = [];
  let normalCount = 0;
  let tallCount = 0;
  let wideCount = 0;
  for (let i = 0; i < 90; i++) {
    const MRP = Math.round(Math.random() * 895) + 5;
    const discount = Math.round(MRP * Math.random() * 0.5);
    const categoryCount = Math.trunc(Math.random() * 3) + 1;
    const forCount = Math.trunc(Math.random() * 2) + 1;

    const categories: Category[] = [];
    const tempForArray: ForCategories[] = [];
    let image: TProduct["image"] = {
      preview: "",
      regular: "",
    };

    for (let j = 0; j < categoryCount; j++) {
      categories.push(categoriesArray[Math.round(Math.random() * 4)]);
    }
    for (let k = 0; k < forCount; k++) {
      tempForArray.push(forArray[Math.round(Math.random() * 4)]);
    }
    const previewType =
      imageType[Math.round(Math.random() * (imageType.length - 1))];
    switch (previewType) {
      case 1:
        tallCount++;
        image = {
          preview: tallImageUrls[tallCount % wideImageUrls.length].thumbnail,
          regular: tallImageUrls[tallCount % wideImageUrls.length].main,
        };
        break;
      case 2:
        wideCount++;
        image = {
          preview: wideImageUrls[wideCount % wideImageUrls.length].thumbnail,
          regular: wideImageUrls[wideCount % wideImageUrls.length].main,
        };
        break;
      default:
        normalCount++;
        image = {
          preview:
            normalImageUrls[normalCount % normalImageUrls.length].thumbnail,
          regular: normalImageUrls[normalCount % normalImageUrls.length].main,
        };
        break;
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
      image: image,
      previewType: previewType,
      primaryFor:
        tempForArray[Math.round(Math.random() * (tempForArray.length - 1))],
      src: "https://www.amazon.com",
      brand: brandArray[Math.round(Math.random() * (brandArray.length - 1))],
      portal: portalArray[Math.round(Math.random() * (portalArray.length - 1))],
    });
  }
  return obj;
};
