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
      <h2 className="font-serif">{productName}</h2>
      <h2 className="font-serif">{productColor}</h2>
      <h2 className="font-serif">{productDescription}</h2>
      <h2 className="font-serif">{productPrice}</h2>
      <h2 className="font-serif">{productSize}</h2>
    </ProductCard>
  );
};

export default ProductItem;
