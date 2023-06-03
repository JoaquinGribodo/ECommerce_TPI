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
      <span className="font-serif">{productName}</span>
      <span className="font-serif">{productColor}</span>
      <span className="font-serif">{productDescription}</span>
      <span className="font-serif">{productPrice}</span>
      <span className="font-serif">{productSize}</span>
    </ProductCard>
  );
};

export default ProductItem;
