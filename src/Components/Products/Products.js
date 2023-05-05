import React from 'react'
import './Products.css'
import ProductItem from '../ProductItem/ProductItem';

const Products = ({products}) =>{
    
    const mappedProducts = products.map((product) => (
        <ProductItem
          key={product.id}
          productName={product.name}
          productPrice={product.price}
          productColor={product.color}
          productDescription={product.description}
          productSize={product.size}
        />
    ));

    return (
        
    <div>{mappedProducts}</div>
  )
}

export default Products
