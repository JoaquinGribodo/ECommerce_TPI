import React from "react";
import "./ColorFilter.css";

const ColorFilter = ({ filterProducts }) => {
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
              onClick={() => filterProducts({ color: "Rojo" })}
            />
            <label
              className="btn bg-danger btn-rounded p-3 border border-red"
              htmlFor="colorRadio1"
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
              onClick={() => filterProducts({ color: "Azul" })}
            />
            <label
              className="btn bg-primary btn-rounded p-3 border border-red"
              htmlFor="colorRadio2"
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
              onClick={() => filterProducts({ color: "Gris" })}
            />
            <label
              className="btn btn-rounded p-3 border border-red"
              htmlFor="colorRadio3"
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
              onClick={() => filterProducts({ color: "Negro" })}
            />
            <label
              className="btn bg-dark text-white btn-rounded p-3 border border-red"
              htmlFor="colorRadio4"
            ></label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorFilter;
