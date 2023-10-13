import { useRef, useState } from "react";
import Product from "../Product/Product";
import ProductGridHeader from "./ProductGridHeader/ProductGridHeader";

import products from "../../assets/products.json";
import "./ProductGrid.scss";
import { TProduct, TProductFilters } from "../../types/Products";
import useProductGrid from "../../hooks/useProductGrid";

function ProductGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [previousActionDisabled, setPreviousActionDisabled] = useState(true);
  const [nextActionDisabled, setNextActionDisbabled] = useState(false);
  const { filteredProducts, filters, updateFilters } = useProductGrid(products);
  // const [filteredProducts, setFilteredProducts] =
  //   useState<TProduct[]>(products);
  // const [filters, setFilters] = useState<TProductFilters>({
  //   category: "",
  //   forCategory: "",
  //   price: 0,
  // });

  // const handleFilterUpdate = (newFilters: Partial<TProductFilters>) => {
  //   const updatedFilters = { ...filters, ...newFilters };
  //   setFilters(updatedFilters);
  //   setFilteredProducts(filterProducts(products, updatedFilters));
  //   setTimeout(() => updateGridAction(), 1000);
  // };
  const handleFilterUpdate = (newFilters: Partial<TProductFilters>) => {
    updateFilters(newFilters);
    setTimeout(() => updateGridAction(), 1000);
  };

  const handleCarouselAction = (action: 1 | -1) => {
    if (action === 1) {
      if (gridRef.current) {
        gridRef.current.scrollLeft += gridRef.current.clientWidth - 50;
      }
    } else {
      if (gridRef.current) {
        gridRef.current.scrollLeft =
          gridRef.current.scrollLeft - (gridRef.current.clientWidth - 50) < 0
            ? 0
            : gridRef.current.scrollLeft - (gridRef.current.clientWidth - 50);
      }
    }
    setTimeout(() => updateGridAction(), 500);
  };

  const updateGridAction = () => {
    if (gridRef.current) {
      const previousActionDisabled = gridRef.current.scrollLeft === 0;
      const nextActionDisabled =
        gridRef.current.scrollLeft + gridRef.current.clientWidth >=
        gridRef.current.scrollWidth;
      setPreviousActionDisabled(previousActionDisabled);
      setNextActionDisbabled(nextActionDisabled);
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
            disabled={previousActionDisabled}
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

        <div className="action">
          <button
            disabled={nextActionDisabled}
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
