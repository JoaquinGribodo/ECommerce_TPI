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

  const stateChange = (newState) => {
    setShowSideBar(newState);
  };

  return (
    <>
      <NavBar onChangeState={stateChange} />
      <div className="row">
        <div className={showSideBar ? "col-2" : ""}>
          {showSideBar && <SideBar />}
        </div>
        <div className={showSideBar ? "col-8" : "col-10"}>
          <Products />
        </div>
        <div className="col-2">
          <ProductFilter />
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
