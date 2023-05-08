import React from 'react'
import './Products.css'
import ProductItem from '../ProductItem/ProductItem';

const Products = ({products}) =>{

  //desestructuramos las propiedades que obtenemos de el arreglo de objetos de app para después hacer un map que muestra cada propiedad.
    
    const mappedProducts = products.map((product) => (
        <div>
        <ProductItem
          key={product.id}
          productName={product.name}
          productPrice={product.price}
          productColor={product.color}
          productDescription={product.description}
          productSize={product.size}
        />
        </div>
    ));

    return (
        
    <div className='products'>{mappedProducts}</div>
  )
}

export default Products;
