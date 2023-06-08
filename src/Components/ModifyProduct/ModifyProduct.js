import React, { useState } from "react";
import { useNavigate } from "react-router";
import { updateDoc, doc } from "firebase/firestore";
import { useLocation } from "react-router";
import { db } from "../../Config/FireBase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModifyProduct = () => {
  const [newName, setNewName] = useState();
  const [newColor, setNewColor] = useState();
  const [newSize, setNewSize] = useState();
  const [newDescription, setNewDescription] = useState();
  const [newPrice, setNewPrice] = useState();
  const [newImage, setNewImage] = useState();
  const [id, setId] = useState();

  const idHandler = (e) => {
    setId(e.target.value);
  };

  const location = useLocation();

  const productList = location.state ? location.state.productList : null;

  const navigate = useNavigate();

  const goHomeHandler = () => {
    navigate("/home");
  };

  const updateProduct = async (id) => {
    const productItem = doc(db, "products", id);
    await updateDoc(productItem, {
      name: newName,
      color: newColor,
      description: newDescription,
      size: newSize,
      price: newPrice,
      image: newImage,
    });
    successMessage();
  };

  const successMessage = () =>
    toast.success("El producto se ha actualizado correctamente", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  return (
    <div className="card bg-glass">
      <h1>Modificar Producto:</h1>
      <div className="card-body px-4 py-5 px-md-5">
        <form>
          <div className="form-outline mb-5">
            <label className="form-label" htmlFor="form3Example3">
              Producto:
            </label>
            <select name="productos" id="lang" onChange={idHandler}>
              <option value="selecciona">
                Seleccione ID del producto a modificar
              </option>
              {productList
                ? productList.map((item) => (
                    <option key={item.id} value={item.id}>
                      Id: {item.id} - Nombre: {item.name}
                    </option>
                  ))
                : ""}
            </select>

            <div className="form-outline mb-5">
              <label className="form-label" htmlFor="form3Example3">
                Nombre:
              </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setNewName(e.target.value)}
              />
            </div>
            <div className="form-outline mb-5">
              <label className="form-label" htmlFor="form3Example3">
                Imagen:
              </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setNewImage(e.target.value)}
              />
            </div>
            <div className="form-outline mb-5">
              <label className="form-label" htmlFor="form3Example3">
                Color:
              </label>
              <select
                name="colores"
                id="lang"
                onChange={(e) => setNewColor(e.target.value)}
              >
                <option value="selecciona">Seleccione un color</option>
                <option value="rojo">Rojo</option>
                <option value="azul">Azul</option>
                <option value="gris">Gris</option>
                <option value="negro">Negro</option>
              </select>
            </div>
            <div className="form-outline mb-5">
              <label className="form-label" htmlFor="form3Example3">
                Talle:
              </label>
              <select
                name="talles"
                id="lang"
                onChange={(e) => setNewSize(e.target.value)}
              >
                <option value="selecciona">Seleccione un talle</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div className="form-outline mb-5">
              <label className="form-label" htmlFor="form3Example3">
                Descripción:
              </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </div>
            <div className="form-outline mb-5">
              <label className="form-label" htmlFor="form3Example3">
                Precio:
              </label>
              <input
                type="number"
                className="form-control"
                required
                onChange={(e) => setNewPrice(e.target.value)}
              />
            </div>
          </div>

          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => updateProduct(id)}
          >
            Modificar
          </button>
          <ToastContainer />
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
  );
};

export default ModifyProduct;
