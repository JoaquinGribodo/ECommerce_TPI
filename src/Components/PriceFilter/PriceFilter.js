import React from "react";
import "./PriceFilter.css";


const PriceFilter = () => {
  
  return (

    <>
        <div className="col-md-12 mt-3 text-center mb-3" data-mdb-filter="color">
          <span className="fa-lg m-3 p-2 text-center fw-bold" style={{ display: "block" }}>Precio:</span>
  
          <input type="range" className="form-range" min={0} id="customRange2" autocompleted=""/>

          <p id="max-val">Precio maximo: 80$</p>
        </div>
    </>
  );
};

export default PriceFilter;
