import React, { useContext, useEffect } from "react";
import "./Products.css";
import ProductItem from "../ProductItem/ProductItem";
import { db } from "../../Config/FireBase";
import { collection, getDocs } from "firebase/firestore";
import { APIContext } from "../Services/API/Api.Context";

const Products = ({ productList, getProductsHandler }) => {
  //Subir el estado a dashboard de productList y en el componente Products, en setProductsList recibir por props getProducts (función en dashboard que se encarga de setear el estado)

  const productsCollection = collection(db, "products");
  const { toggleLoading } = useContext(APIContext);

  useEffect(() => {
    toggleLoading(true);
    const getProductList = async () => {
      try {
        const data = await getDocs(productsCollection);
        const filteredData = data.docs.map((doc) => ({ ...doc.data() }));
        getProductsHandler(filteredData);
        toggleLoading(false);
      } catch (error) {
        toggleLoading(false);
        console.error(error);
      }
    };

    getProductList();
  }, []);

  const mappedProducts = productList.map((product) => (
    <div key={product.id}>
      <ProductItem
        productImage={product.image}
        productName={product.name}
        productPrice={product.price}
        productColor={product.color}
        productDescription={product.description}
        productSize={product.size}
        productList={productList}
        productId={product.id}
      />
    </div>
  ));

  return <div className="products">{mappedProducts}</div>;
};

export default Products;
export const productsCollection = collection(db, "products");
