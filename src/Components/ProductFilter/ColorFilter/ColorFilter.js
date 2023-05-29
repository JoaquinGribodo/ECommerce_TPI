import React from "react";
import "./ColorFilter.css";

const ColorFilter = ({ filterProductsByColor, colorFilter }) => {
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
            value={colorFilter}
            style={{ paddingLeft: 3, paddingTop: 25 }}
          >
            <input
              className="btn-check"
              type="radio"
              name="colorRadio"
              id="colorRadio1"
              checked={colorFilter === "Rojo"}
              onClick={() => filterProductsByColor("Rojo")}
            />
            <label
              className="btn bg-danger btn-rounded p-3 border border-red"
              for="colorRadio1"
            ></label>
          </div>

          <div
            className="form-check form-check-inline"
            style={{ paddingLeft: 3 }}
          >
            <input
              className="btn-check "
              type="radio"
              name="colorRadio"
              id="colorRadio2"
              checked={colorFilter === "Azul"}
              onClick={() => filterProductsByColor("Azul")}
            />
            <label
              className="btn bg-primary btn-rounded p-3 border border-red"
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
              checked={colorFilter === "Gris"}
              onClick={() => filterProductsByColor("Gris")}
            />
            <label
              className="btn btn-rounded p-3 border border-red"
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
              checked={colorFilter === "Negro"}
              onClick={() => filterProductsByColor("Negro")}
            />
            <label
              className="btn bg-dark text-white btn-rounded p-3 border border-red"
              for="colorRadio4"
            ></label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorFilter;
