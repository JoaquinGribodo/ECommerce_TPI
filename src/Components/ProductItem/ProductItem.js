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
  productId,
  productList,
}) => {
  return (
    <ProductCard
      productList={productList}
      productName={productName}
      productPrice={productPrice}
      productColor={productColor}
      productSize={productSize}
      productImage={productImage}
      productDescription={productDescription}
      productId={productId}
    >
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
