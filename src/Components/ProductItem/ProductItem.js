import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductItem.css";

const ProductItem = ({
  productName,
  productColor,
  productDescription,
  productPrice,
  productSize,
  productImage,
}) => {
  return (
    <ProductCard>
      <img className="rounded-t-lg" src={productImage} alt="" />
      <h2 className="font-mono">{productName}</h2>
      <h2 className="font-mono">{productColor}</h2>
      <h2 className="font-mono">{productDescription}</h2>
      <h2 className="font-mono">{productPrice}</h2>
      <h2 className="font-mono">{productSize}</h2>
    </ProductCard>
  );
};

export default ProductItem;
