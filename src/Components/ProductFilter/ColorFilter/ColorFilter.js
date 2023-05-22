import React from "react";
import "./ColorFilter.css";

const ColorFilter = ({ filterProductsByColor }) => {
  return (
    <>
      <div
        className="row justify-content-center"
        data-mdb-items=".color-example-item"
        data-mdb-auto-filter="true"
      >
        <div
          className="col-md-12 text-center mb-3"
          data-mdb-filter="color"
          style={{ padding: 20 }}
        >
          <span
            className="text-center fa-lg fw-bold"
            style={{ display: "block" }}
          >
            Color:
          </span>

          <div
            className="form-check form-check-inline"
            style={{ paddingLeft: 3, paddingTop: 25 }}
          >
            <input
              className="btn-check"
              type="radio"
              name="colorRadio"
              id="colorRadio1"
              onClick={() => filterProductsByColor("Rojo")}
            />
            <label
              class="btn bg-danger btn-rounded p-3"
              for="colorRadio1"
            ></label>
          </div>

          <div
            className="form-check form-check-inline"
            style={{ paddingLeft: 3 }}
          >
            <input
              className="btn-check"
              type="radio"
              name="colorRadio"
              id="colorRadio2"
              onClick={() => filterProductsByColor("Azul")}
            />
            <label
              className="btn bg-primary btn-rounded p-3"
              for="colorRadio2"
            ></label>
          </div>

          <div
            className="form-check form-check-inline"
            style={{ paddingLeft: 3 }}
          >
            <input
              className="btn-check"
              type="radio"
              name="colorRadio"
              id="colorRadio3"
              onClick={() => filterProductsByColor("Gris")}
            />
            <label
              className="btn btn-rounded p-3"
              for="colorRadio3"
              style={{ backgroundColor: "#bdbdbd" }}
            ></label>
          </div>

          <div
            className="form-check form-check-inline"
            style={{ paddingLeft: 3 }}
          >
            <input
              className="btn-check"
              type="radio"
              name="colorRadio"
              id="colorRadio4"
              onClick={() => filterProductsByColor("Negro")}
            />
            <label
              className="btn bg-dark text-white btn-rounded p-3"
              for="colorRadio4"
            ></label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorFilter;
