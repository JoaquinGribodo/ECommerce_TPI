import React from "react";
import "./SizeFilter.css";

const SizeFilter = ({ filterProductsBySize }) => {
  return (
    <>
      <div
        className="row justify-content-center"
        data-mdb-items=".basic-example-item"
        data-mdb-auto-filter="true"
      >
        <div className="col-md-12 text-center mb-3" data-mdb-filter="color">
          <span className="text-center fa-lg fw-bold">Talles:</span>

          <div className="form-check mt-3">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="S"
              onClick={() => filterProductsBySize("S")}
            />
            <label className="form-check-label" for="inlineRadio1">
              S
            </label>
          </div>

          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="M"
              onClick={() => filterProductsBySize("M")}
            />
            <label className="form-check-label" for="inlineRadio2">
              M
            </label>
          </div>

          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="L"
              onClick={() => filterProductsBySize("L")}
            />
            <label className="form-check-label" for="inlineRadio3">
              L
            </label>
          </div>

          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="XL"
              onClick={() => filterProductsBySize("XL")}
            />
            <label className="form-check-label" for="inlineRadio3">
              XL
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default SizeFilter;
