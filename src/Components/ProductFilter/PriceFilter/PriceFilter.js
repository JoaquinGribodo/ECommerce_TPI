import React from "react";
import { useState } from "react";
import "./PriceFilter.css";

const PriceFilter = ({ filterProductsByPrice, priceFilter }) => {
  const [price, setPrice] = useState(0);

  const priceHandler = (e) => {
    setPrice(e.target.value);
    console.log(price);
    filterProductsByPrice(e.target.value)
  };

  return (
    <>
      <div className="col-md-12 mt-3 text-center mb-3" data-mdb-filter="color">
        <span
          className="fa-lg m-3 p-2 text-center fw-bold"
          style={{ display: "block" }}
        >
          Precio:
        </span>

        <input
          type="range"
          className="form-range"
          min={0}
          max={10000}
          step={500}
          id="customRange2"
          value={priceFilter}
          onChange={priceHandler}
        />

        <p id="max-val"> Precio máximo: {price} </p>
      </div>
    </>
  );
};

export default PriceFilter;
