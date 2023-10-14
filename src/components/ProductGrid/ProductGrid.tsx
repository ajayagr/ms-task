import { useContext, useRef } from "react";
import Product from "../Product/Product";
import ProductGridHeader from "./ProductGridHeader/ProductGridHeader";
import { TProduct, TProductFilters } from "../../types/Products";
import useProductGrid from "../../hooks/useProductGrid";
import Carousel, { CarouselRef } from "../Carousel/Carousel";

// import products from "../../assets/products.json";
import "./ProductGrid.scss";
import { DEFAULT_FILTERS } from "../../hooks/useProductGrid";
import { ViewportContext } from "../../context";

interface IProductGridProps {
  products: TProduct[];
}

function ProductGrid({ products }: IProductGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<CarouselRef>(null);
  const isSmallScreen = useContext(ViewportContext).isSmallScreen;
  const { filteredProducts, filters, updateFilters } = useProductGrid(products);

  const handleFilterUpdate = (newFilters: Partial<TProductFilters>) => {
    updateFilters(newFilters);
    setTimeout(() => carouselRef.current?.triggerGridUpdate(), 1000);
  };

  const handleSearchFor = (forCategory: string) => {
    handleFilterUpdate({ forCategory });
  };

  const resetFilters = () => {
    handleFilterUpdate({ ...DEFAULT_FILTERS });
  };

  return (
    <div className="product-grid">
      <Carousel
        carouselContentRef={gridRef}
        slideOffset={150}
        ref={carouselRef}
      >
        <div className="grid-container">
          <ProductGridHeader
            products={products}
            filters={filters}
            handleFilterUpdate={handleFilterUpdate}
          />
          <div className="item-container">
            <p className="product-count">
              showing {filteredProducts.length} of {products.length} products
            </p>
            {filteredProducts.length > 0 ? (
              <div ref={gridRef} className="items">
                {filteredProducts.map((product) => (
                  <Product
                    key={product.id}
                    product={product}
                    showDetail={!isSmallScreen}
                    handleSearchFor={handleSearchFor}
                  />
                ))}
              </div>
            ) : (
              <h3>
                No products match your filter criteria. Please update or{" "}
                <button
                  className="no-style text-underline"
                  onClick={resetFilters}
                >
                  reset
                </button>
                {""} the criteria to see more products!!
              </h3>
            )}
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default ProductGrid;
