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
}) => {
  return (
    <div className="divFilters">
      <ColorFilter filterProductsByColor={filterProductsByColor} />
      <SizeFilter filterProductsBySize={filterProductsBySize} />
      <PriceFilter filterProductsByPrice={filterProductsByPrice} />
      <ButtonFilter clearProductsFilters={clearProductsFilters} />
    </div>
  );
};

export default ProductFilter;
