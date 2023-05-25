import React from "react";
import NavBar from "../NavBar/NavBar";
import Products from "../Products/Products";
import ProductFilter from "../ProductFilter/ProductFilter";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import ContactUs from "../ContactUs/ContactUs";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";

const DashBoard = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [productList, setProductList] = useState([]);
  const [productFiltered, setProductFiltered] = useState([]);

  const sideBarOn = (newState) => {
    setShowSideBar(newState);
  };

  const getProductsHandler = (products) => {
    setProductList(products);
    setProductFiltered(products);
  };

  const filterProductsBySize = (size) => {
    const newProductsFilter = productList.filter(
      (product) => product.size === size
    );
    setProductFiltered(newProductsFilter);
  };

  const filterProductsByColor = (color) => {
    const newProductsFilter = productList.filter(
      (product) => product.color === color
    );
    setProductFiltered(newProductsFilter);
  };

  const filterProductsByPrice = (price) => {
    const newProductsFilter = productList.filter(
      (product) => product.price <= price
    );
    setProductFiltered(newProductsFilter);
  };

  const filterProductsByName = (name) => {
    const newProductsFilter = productList.filter(
      (product) => product.name.toLowerCase() === name.toLowerCase()
    );
    setProductFiltered(newProductsFilter);
  };

  const clearProductsFilters = () => {
    setProductFiltered(productList);
  };

  return (
    <>
      <NavBar
        onChangeState={sideBarOn}
        filterProductsByName={filterProductsByName}
      />
      <div className="row">
        <div className={showSideBar ? "col-2" : ""}>
          {showSideBar && <SideBar />}
        </div>
        <div className={showSideBar ? "col-8" : "col-10"}>
          <Products
            productList={productFiltered}
            getProductsHandler={getProductsHandler}
          />
        </div>
        <div className="col-2">
          <ProductFilter
            filterProductsBySize={filterProductsBySize}
            filterProductsByColor={filterProductsByColor}
            filterProductsByPrice={filterProductsByPrice}
            clearProductsFilters={clearProductsFilters}
          />
        </div>
      </div>
      <div id="whoWeAre">
        <WhoWeAre />
      </div>
      <div id="contactUs">
        <ContactUs />
      </div>
    </>
  );
};

export default DashBoard;
