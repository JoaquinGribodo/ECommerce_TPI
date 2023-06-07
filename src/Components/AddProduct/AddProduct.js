import React from "react";
import { useNavigate } from "react-router";
import "./AddProduct.css";
import { addDoc } from "firebase/firestore";

const AddProduct = () => {
  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate("/home");
  };
  // const addProduct = async () => {
  //   try{
  //     await addDoc(productsCollection, {
  //       name:,
  //       color:,
  //       size:,
  //       description:,
  //       price:
  //     });
  //   }
  //   catch(error){
  //     console.error(error)
  //   }

  // };

  return (
    <div className="addProductDiv">
      <div className="card bg-glass">
        <h1>Agregar un nuevo Producto:</h1>
        <div className="card-body px-4 py-5 px-md-5">
          <form>
            <div className="form-outline mb-5">
              <label className="form-label" for="form3Example3">
                Nombre:
              </label>
              <input type="text" className="form-control" required />
            </div>
            <div className="form-outline mb-5">
              <label className="form-label" for="form3Example3">
                Imagen:
              </label>
              <input type="text" className="form-control" required />
            </div>
            <div className="form-outline mb-5">
              <label className="form-label" for="form3Example3">
                Color:
              </label>
              <select name="colores" id="lang">
                <option value="selecciona">Seleccione un color</option>
                <option value="rojo">Rojo</option>
                <option value="azul">Azul</option>
                <option value="gris">Gris</option>
                <option value="negro">Negro</option>
              </select>
            </div>
            <div className="form-outline mb-5">
              <label className="form-label" for="form3Example3">
                Talle:
              </label>
              <select name="talles" id="lang">
                <option value="selecciona">Seleccione un talle</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div className="form-outline mb-5">
              <label className="form-label" for="form3Example3">
                Descripción:
              </label>
              <input type="text" className="form-control" required />
            </div>
            <div className="form-outline mb-5">
              <label className="form-label" for="form3Example3">
                Precio:
              </label>
              <input type="number" className="form-control" required />
            </div>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Agregar
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={goHomeHandler}
            >
              Volver al Inicio
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
