import { useEffect, useState } from "react";
import { TProduct, TProductFilters } from "../types/Products";

export const DEFAULT_FILTERS = {
  category: "",
  forCategory: "",
  price: 0,
};

function useProductGrid(products: TProduct[]) {
  const [filteredProducts, setFilteredProducts] =
    useState<TProduct[]>(products);
  const [filters, setFilters] = useState<TProductFilters>({
    ...DEFAULT_FILTERS,
  });

  useEffect(() => {
    resetFilters();
    setFilteredProducts(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

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

  const updateFilters = (newFilters: Partial<TProductFilters>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    setFilteredProducts(filterProducts(products, updatedFilters));
  };

  const resetFilters = () => {
    updateFilters(DEFAULT_FILTERS);
  };

  return { filteredProducts, filters, updateFilters, resetFilters };
}

export default useProductGrid;
