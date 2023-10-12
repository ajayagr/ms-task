import { Category, ForCategories } from "../../../constants/product";
import { TProduct, TProductFilters } from "../../../types/Products";
import ProductFilters from "./ProductFilters/ProductFilters";

import "./ProductGridHeader.scss";

interface IProductGridHeaderProps {
  products: TProduct[];
  filters: TProductFilters;
  handleFilterUpdate: (newFilter: Partial<TProductFilters>) => void;
}

function ProductGridHeader({
  products,
  filters,
  handleFilterUpdate,
}: IProductGridHeaderProps) {
  const priceArray = products.map((product) => product.MRP - product.discount);
  const minPrice = Math.min(...priceArray);
  const maxPrice = Math.max(...priceArray);

  return (
    <div className="d-flex flex-wrap product-grid-header">
      <h2>Christmas Gifts</h2>
      <ProductFilters
        minPrice={minPrice}
        maxPrice={maxPrice}
        categories={Object.values(Category)}
        forCategories={Object.values(ForCategories)}
        filters={filters}
        handleFilterUpdate={handleFilterUpdate}
      />
    </div>
  );
}

export default ProductGridHeader;
