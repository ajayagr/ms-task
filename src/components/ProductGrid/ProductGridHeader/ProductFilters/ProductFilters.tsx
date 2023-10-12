import { ChangeEvent, useEffect, useState } from "react";
import { TProductFilters } from "../../../../types/Products";
import "./ProductFilters.scss";
import { PRICE_SLIDER_STEPS } from "../../../../constants/product";
import All from "../../../../assets/icons/All";

interface IProductFiltersProps {
  minPrice: number;
  maxPrice: number;
  categories: string[];
  forCategories: string[];
  filters: TProductFilters;
  handleFilterUpdate: (newFilter: Partial<TProductFilters>) => void;
}

function ProductFilters({
  minPrice,
  maxPrice,
  categories,
  forCategories,
  filters,
  handleFilterUpdate,
}: IProductFiltersProps) {
  const [selectedCategoryOption, setSelectedCategoryOption] = useState("");
  const [selectedForOption, setSelectedForOption] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);

  useEffect(() => {
    setSelectedForOption(filters?.forCategory ?? "");
  }, [filters]);

  const handleForSelection = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    setSelectedForOption(e.target.value);
    handleFilterUpdate({ forCategory: selectedValue });
  };

  const handleCategorySelection = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedCategoryOption(e.target.value);
    handleFilterUpdate({ category: selectedValue });
  };

  const handlePriceSelection = (e: ChangeEvent<HTMLInputElement>) => {
    let selectedValue = Number(e.target.value);
    if (Number.isNaN(selectedValue)) {
      selectedValue = 0;
    }
    setSelectedPrice(selectedValue);
    handleFilterUpdate({ price: selectedValue });
  };

  const handleFormReset = () => {
    setSelectedForOption("");
    setSelectedCategoryOption("");
    setSelectedPrice(0);
    handleFilterUpdate({ category: "", forCategory: "", price: 0 });
  };

  const priceStep = (maxPrice - minPrice) / (PRICE_SLIDER_STEPS - 1);

  const markers = [];
  for (let i = 0; i < PRICE_SLIDER_STEPS; i++) {
    markers.push(minPrice + priceStep * i);
  }

  return (
    <form
      className="d-flex flex-wrap product-filters text-sm"
      onReset={handleFormReset}
    >
      <div className="d-flex flex-col">
        <label
          className="text-uppercase text-grey mb-1"
          htmlFor="trending-selection"
        >
          Select Category
        </label>
        <select
          id="trending-selection"
          value={selectedCategoryOption}
          onChange={handleCategorySelection}
        >
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p className="text-uppercase text-grey">Gift for</p>
        <div role="radiogroup" className="d-flex">
          <div className={selectedForOption === "" ? "checked" : ""}>
            <input
              hidden
              checked={selectedForOption === ""}
              name="productFor"
              type="radio"
              value=""
              id="productFor-all"
              onChange={handleForSelection}
            />
            <label className="d-flex flex-col" htmlFor={"productFor-all"}>
              <All
                width={32}
                height={32}
                fill={selectedForOption === "" ? "orangered" : "black"}
              />
              <span>All</span>
            </label>
          </div>
          {forCategories.map((category) => {
            const categoryId = `productFor-${category}`;
            const isSelected = selectedForOption === category;
            return (
              <div
                key={categoryId}
                className={
                  isSelected ? "d-flex flex-col checked" : "d-flex flex-col"
                }
              >
                <input
                  hidden
                  checked={isSelected}
                  name="productFor"
                  type="radio"
                  value={category}
                  id={categoryId}
                  onChange={handleForSelection}
                />
                <label className="d-flex flex-col" htmlFor={categoryId}>
                  <All
                    width={32}
                    height={32}
                    fill={isSelected ? "orangered" : "black"}
                  />
                  <span>{category}</span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <label className="text-uppercase text-grey" htmlFor="priceSelection">
          Set Price
        </label>
        <br />
        <input
          type="range"
          id="priceSelection"
          name="priceSelection"
          list="markers"
          min={minPrice}
          max={maxPrice}
          value={selectedPrice}
          step={priceStep}
          onChange={handlePriceSelection}
        />
        <datalist id="markers">
          {markers.map((marker, i) => (
            <option
              key={i}
              value={marker}
              label={`$${Math.round(marker).toString()}`}
            ></option>
          ))}
        </datalist>
      </div>
      <div className="d-flex align-center">
        <button type="reset" className="ml-1">
          Reset
        </button>
      </div>
    </form>
  );
}

export default ProductFilters;
