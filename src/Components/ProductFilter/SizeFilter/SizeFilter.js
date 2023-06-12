import React from "react";
import "./SizeFilter.css";

const SizeFilter = ({ filterProducts }) => {
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
              onClick={() => filterProducts({ size: "S" })}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              S
            </label>
          </div>

          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              onClick={() => filterProducts({ size: "M" })}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              M
            </label>
          </div>

          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              onClick={() => filterProducts({ size: "L" })}
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              L
            </label>
          </div>

          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              onClick={() => filterProducts({ size: "XL" })}
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              XL
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default SizeFilter;
