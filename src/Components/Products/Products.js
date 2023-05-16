import React, { useEffect, useState } from "react";
import "./Products.css";
import ProductItem from "../ProductItem/ProductItem";
import { db } from "../../Config/FireBase";
import { collection, getDocs } from "firebase/firestore";

const Products = () => {
  const [productList, setProductList] = useState([]);

  const productsCollection = collection(db, "products");

  useEffect(() => {
    const getProductList = async () => {
      try {
        const data = await getDocs(productsCollection);
        const filteredData = data.docs.map((doc) => ({ ...doc.data() }));
        setProductList(filteredData);
      } catch (error) {
        console.error(error);
      }
    };

    getProductList();
  }, []);

  const mappedProducts = productList.map((product) => (
    <div>
      <ProductItem
        key={product.id}
        productImage={product.image}
        productName={product.name}
        productPrice={product.price}
        productColor={product.color}
        productDescription={product.description}
        productSize={product.size}
      />
    </div>
  ));

  return <div className="products">{mappedProducts}</div>;
};

export default Products;
