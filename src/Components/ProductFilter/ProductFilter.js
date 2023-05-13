import React from "react";
import "./ProductFilter.css";
import ColorFilter from "../ColorFilter/ColorFilter";
import SizeFilter from "../SizeFilter/SizeFilter";
import PriceFilter from "../PriceFilter/PriceFilter";
import ButtonFilter from "../ButtonFilter/ButtonFilter";

const ProductFilter = () => {
  return (
    <div className="divFilters">
      <ColorFilter />
      <SizeFilter />
      <PriceFilter />
      <ButtonFilter />
    </div>
  );
};

export default ProductFilter;
