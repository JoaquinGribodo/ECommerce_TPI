import React from "react";
import "./ProductFilter.css";
import ColorFilter from "./ColorFilter/ColorFilter";
import SizeFilter from "./SizeFilter/SizeFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import ButtonFilter from "./ButtonFilter/ButtonFilter";
import { useNavigate } from "react-router";

const ProductFilter = ({
  filterProductsBySize,
  filterProductsByColor,
  filterProductsByPrice,
  clearProductsFilters,
  filters,
  productList,
}) => {
  const navigate = useNavigate();
  const goToAddProduct = () => {
    navigate("/addProduct");
  };
  const goToModifyProduct = () => {
    navigate("/modifyProduct", { state: { productList } });
  };
  const goToDeleteProduct = () => {
    navigate("/deleteProduct", { state: { productList } });
  };

  return (
    <div className="divFilters">
      <ColorFilter
        colorFilter={filters.color}
        filterProductsByColor={filterProductsByColor}
      />
      <SizeFilter
        sizeFilter={filters.size}
        filterProductsBySize={filterProductsBySize}
      />
      <PriceFilter
        priceFilter={filters.price}
        filterProductsByPrice={filterProductsByPrice}
      />
      <ButtonFilter clearProductsFilters={clearProductsFilters} />
      <button
        className="bg-green-500 hover:bg-green-400 text-white font-bold m-3 py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
        type="button"
        onClick={goToAddProduct}
      >
        Agregar Producto
      </button>
      <button
        className="bg-green-500 hover:bg-green-400 text-white font-bold m-3 py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
        type="button"
        onClick={goToModifyProduct}
      >
        Modificar Producto
      </button>
      <button
        className="bg-green-500 hover:bg-green-400 text-white font-bold m-3 py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
        type="button"
        onClick={goToDeleteProduct}
      >
        Eliminar Producto
      </button>
    </div>
  );
};

export default ProductFilter;
