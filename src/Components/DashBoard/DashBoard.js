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
  const [userList, setUserList] = useState([]);
  const [productFiltered, setProductFiltered] = useState([]);
  const [filters, setFilters] = useState({
    color: null,
    size: null,
    description: null,
    price: null,
  });

  const sideBarOn = (newState) => {
    setShowSideBar(newState);
  };

  const getProductsHandler = (products) => {
    setProductList(products);
    setProductFiltered(products);
  };

  const getUsersHandler = (users) => {
    setUserList(users);
  };

  const filterProducts = ({ size, color, price }) => {
    const newProductsFilter = productList.filter((product) => {
      if (size && product.size !== size) return false;
      if (color && product.color !== color) return false;
      if (price && product.price > price) return false;
      return true;
    });
    setProductFiltered([...newProductsFilter]);
    setFilters({ size, color, price });
  };

  const filterProductsByName = (name) => {
    const newProductsFilter = productList.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
    setProductFiltered(newProductsFilter);
  };

  const clearProductsFilters = () => {
    setProductFiltered(productList);
    setFilters({
      color: null,
      size: null,
      description: null,
      price: null,
    });
  };

  const filterProductsByCategory = (description) => {
    const newProductsFilter = productList.filter(
      (product) => product.description === description
    );
    setProductFiltered(newProductsFilter);
  };
  return (
    <>
      <NavBar
        onChangeState={sideBarOn}
        filterProductsByName={filterProductsByName}
      />
      <div className="row">
        <div className={showSideBar ? "col-2" : ""}>
          {showSideBar && (
            <SideBar filterProductsByCategory={filterProductsByCategory} />
          )}
        </div>
        <div className={showSideBar ? "col-8" : "col-10"}>
          <Products
            productList={productFiltered}
            userList={userList}
            getProductsHandler={getProductsHandler}
            getUsersHandler={getUsersHandler}
          />
        </div>
        <div className="col-2">
          <ProductFilter
            filters={filters}
            filterProducts={filterProducts}
            clearProductsFilters={clearProductsFilters}
            productList={productList}
            userList={userList}
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
