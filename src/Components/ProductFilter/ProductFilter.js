import React from "react";
import "./ProductFilter.css";
import ColorFilter from "./ColorFilter/ColorFilter";
import SizeFilter from "./SizeFilter/SizeFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import ButtonFilter from "./ButtonFilter/ButtonFilter";

const ProductFilter = ({
  filterProductsBySize,
  filterProductsByColor,
  filterProductsByPrice,
  clearProductsFilters,
  filters
}) => {
  return (
    <div className="divFilters">
      <ColorFilter colorFilter={filters.color} filterProductsByColor={filterProductsByColor} />
      <SizeFilter sizeFilter={filters.size}filterProductsBySize={filterProductsBySize} />
      <PriceFilter priceFilter={filters.price}filterProductsByPrice={filterProductsByPrice} />
      <ButtonFilter clearProductsFilters={clearProductsFilters} />
    </div>
  );
};

export default ProductFilter;
