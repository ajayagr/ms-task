import { useRef } from "react";
import Product from "../Product/Product";
import ProductGridHeader from "./ProductGridHeader/ProductGridHeader";
import { TProductFilters } from "../../types/Products";
import useProductGrid from "../../hooks/useProductGrid";
import Carousel, { CarouselRef } from "../Carousel/Carousel";

import products from "../../assets/products.json";
import "./ProductGrid.scss";

function ProductGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<CarouselRef>(null);
  const { filteredProducts, filters, updateFilters } = useProductGrid(products);

  const handleFilterUpdate = (newFilters: Partial<TProductFilters>) => {
    updateFilters(newFilters);
    setTimeout(() => carouselRef.current?.triggerGridUpdate(), 1000);
  };

  const handleSearchFor = (forCategory: string) => {
    handleFilterUpdate({ forCategory });
  };

  return (
    <div className="product-grid">
      <Carousel carouselContentRef={gridRef} ref={carouselRef}>
        <div className="grid-container">
          <ProductGridHeader
            products={products}
            filters={filters}
            handleFilterUpdate={handleFilterUpdate}
          />
          <div className="item-container">
            {filteredProducts.length > 0 ? (
              <div ref={gridRef} className="items">
                {filteredProducts.map((product) => (
                  <Product
                    product={product}
                    key={product.id}
                    handleSearchFor={handleSearchFor}
                  />
                ))}
              </div>
            ) : (
              <h3>
                No products match your filter criteria. Please update or reset
                the criteria to see more products!!
              </h3>
            )}
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default ProductGrid;
