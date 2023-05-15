import React from "react";
import NavBar from "../NavBar/NavBar";
import Products from "../Products/Products";
import ProductFilter from "../ProductFilter/ProductFilter";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import ContactUs from "../ContactUs/ContactUs";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Remera",
    price: "2000",
    color: "Rojo",
    description: "Remera básica",
    size: "S",
    image:
      "https://i.pinimg.com/736x/9c/d2/81/9cd281cbde0afdfce4ad9e4a1d568690.jpg",
  },
  {
    id: 2,
    name: "Pantalón",
    price: "2000",
    color: "Azul",
    description: "Pantalón básico",
    size: "M",
    image:
      "https://thumbs.dreamstime.com/b/men-s-trousers-isolated-white-background-45679168.jpg",
  },
  {
    id: 3,
    name: "Sweater",
    price: "2350",
    color: "Gris",
    description: "Sweater básico",
    size: "L",
    image:
      "https://cdni.llbean.net/is/image/wim/505183_1155_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbprod/A0211793_2",
  },
  {
    id: 4,
    name: "Musculosa",
    price: "2000",
    color: "Negro",
    description: "Musculosa básica",
    size: "XL",
    image:
      "https://c8.alamy.com/comp/DR1552/white-tank-top-on-white-background-DR1552.jpg",
  },
];

const DashBoard = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const stateChange = (newState) => {
    setShowSideBar(newState);
  };

  return (
    <>
      <NavBar onChangeState={stateChange} />
      <div className="row">
        <div className="col-2">{showSideBar && <SideBar />}</div>
        <div className="col-8">
          <Products products={products} />
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
