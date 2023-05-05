import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ProductItem = ({productName, productColor, productDescription, productPrice, productSize}) =>{
  return (

    <ProductCard>
      <h2>{productName}</h2>
      <h2>{productColor}</h2>
      <h2>{productDescription}</h2>
      <h2>{productPrice}</h2>
      <h2>{productSize}</h2>
    </ProductCard>
  )
}

export default ProductItem





