import { useRef, useState } from "react";
import Product from "../Product/Product";
import ProductGridHeader from "./ProductGridHeader/ProductGridHeader";

import products from "../../assets/products.json";
import "./ProductGrid.scss";
import { TProduct, TProductFilters } from "../../types/Products";

const filterProducts = (
  products: TProduct[],
  filters: TProductFilters
): TProduct[] => {
  const filteredProducts = [...products];
  return filteredProducts.filter((product) => {
    let meetsFilterCriteria = true;
    meetsFilterCriteria &&= filters.category
      ? product.categories.includes(filters.category)
      : true;
    meetsFilterCriteria &&= filters.forCategory
      ? product.for.includes(filters.forCategory)
      : true;
    meetsFilterCriteria &&= filters.price
      ? product.MRP - product.discount <= filters.price
      : true;
    return meetsFilterCriteria;
  });
};

function ProductGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [filteredProducts, setFilteredProducts] =
    useState<TProduct[]>(products);
  const [filters, setFilters] = useState<TProductFilters>({
    category: "",
    forCategory: "",
    price: 0,
  });

  const handleFilterUpdate = (newFilters: Partial<TProductFilters>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    setFilteredProducts(filterProducts(products, updatedFilters));
  };

  const handleCarouselAction = (action: 1 | -1) => {
    if (action === 1) {
      if (gridRef?.current) {
        gridRef.current.scrollLeft += 200;
      }
    } else {
      if (gridRef?.current) {
        gridRef.current.scrollLeft =
          gridRef.current.scrollLeft - 200 < 0
            ? 0
            : gridRef.current.scrollLeft - 200;
      }
    }
  };

  const handleSearchFor = (forCategory: string) => {
    handleFilterUpdate({ forCategory });
  };

  return (
    <div className="product-grid">
      <div className="carousel-container">
        <div className="action">
          <button
            aria-description="Previous products"
            onClick={() => handleCarouselAction(-1)}
          >
            &lt;
          </button>
        </div>
        <div className="grid-container">
          <ProductGridHeader
            products={products}
            filters={filters}
            handleFilterUpdate={handleFilterUpdate}
          />
          <div ref={gridRef} className="items">
            {filteredProducts.map((product) => (
              <Product
                product={product}
                key={product.id}
                handleSearchFor={handleSearchFor}
              />
            ))}
          </div>
        </div>
        <div className="action">
          <button
            aria-description="Next products"
            onClick={() => handleCarouselAction(1)}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
