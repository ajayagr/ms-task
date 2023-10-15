import { useContext, useEffect, useRef } from "react";
import Product from "../Product/Product";
import ProductGridHeader from "./ProductGridHeader/ProductGridHeader";
import { TProduct, TProductFilters } from "../../types/Products";
import useProductGrid from "../../hooks/useProductGrid";
import Carousel, { CarouselRef } from "../Carousel/Carousel";

// import products from "../../assets/products.json";
import "./ProductGrid.scss";
import { ViewportContext } from "../../context";
import { RECOMMEND_SIMILAR_THRESHOLD_COUNT } from "../../constants/product";

interface IProductGridProps {
  products: TProduct[];
  getMoreProduct: () => void;
}

function ProductGrid({ products, getMoreProduct }: IProductGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<CarouselRef>(null);
  const { isSmallScreen, isMobileScreen } = useContext(ViewportContext);
  const { filteredProducts, filters, updateFilters, resetFilters } =
    useProductGrid(products);

  useEffect(() => {
    resetGridScroll();
    updateGridActions();
  }, [products]);

  const updateGridActions = () => {
    setTimeout(() => carouselRef.current?.triggerGridUpdate(), 1000);
  };

  const resetGridScroll = () => {
    carouselRef.current?.resetScroll();
  };

  const handleFilterUpdate = (newFilters: Partial<TProductFilters>) => {
    updateFilters(newFilters);
    resetGridScroll();
    updateGridActions();
  };

  const handleSearchFor = (forCategory: string) => {
    handleFilterUpdate({ forCategory });
  };

  const handleFilterReset = () => {
    resetFilters();
    resetGridScroll();
    updateGridActions();
  };

  return (
    <div className="product-grid">
      <ProductGridHeader
        products={products}
        filters={filters}
        handleFilterUpdate={handleFilterUpdate}
      />
      <Carousel
        carouselContentRef={gridRef}
        hideActions={filteredProducts.length === 0}
        slideOffset={140}
        swipeable={true}
        ref={carouselRef}
      >
        <div className="grid-container">
          <div className="item-container">
            <p className="product-count">
              showing {filteredProducts.length} of {products.length} products
            </p>
            {filteredProducts.length > 0 ? (
              <>
                <div
                  ref={gridRef}
                  className={`items ${
                    filteredProducts.length < RECOMMEND_SIMILAR_THRESHOLD_COUNT
                      ? "single-row"
                      : ""
                  }`}
                >
                  {filteredProducts.map((product) => (
                    <Product
                      key={product.id}
                      product={product}
                      showDetail={!isSmallScreen}
                      singleRow={
                        isMobileScreen ||
                        filteredProducts.length <
                          RECOMMEND_SIMILAR_THRESHOLD_COUNT
                      }
                      handleSearchFor={handleSearchFor}
                    />
                  ))}
                </div>
                {filteredProducts.length < RECOMMEND_SIMILAR_THRESHOLD_COUNT ? (
                  <div className="mt-1">
                    <p>
                      <button
                        className="no-style text-underline"
                        onClick={handleFilterReset}
                      >
                        Reset
                      </button>{" "}
                      filters or{" "}
                      <button
                        className="no-style text-underline"
                        onClick={getMoreProduct}
                      >
                        click here
                      </button>{" "}
                      to explore similar products.
                    </p>
                  </div>
                ) : (
                  <></>
                )}
              </>
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
