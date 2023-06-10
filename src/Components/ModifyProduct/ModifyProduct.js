import React, { useState } from "react";
import { useNavigate } from "react-router";
import { updateDoc, doc } from "firebase/firestore";
import { useLocation } from "react-router";
import { db } from "../../Config/FireBase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModifyProduct = () => {
  const location = useLocation();

  const productId = location.state ? location.state.productId : null;
  const productName = location.state ? location.state.productName : null;
  const productColor = location.state ? location.state.productColor : null;
  const productSize = location.state ? location.state.productSize : null;
  const productDescription = location.state
    ? location.state.productDescription
    : null;
  const productPrice = location.state ? location.state.productPrice : null;
  const productImage = location.state ? location.state.productImage : null;
  const [newName, setNewName] = useState(productName);
  const [newColor, setNewColor] = useState(productColor);
  const [newSize, setNewSize] = useState(productSize);
  const [newDescription, setNewDescription] = useState(productDescription);
  const [newPrice, setNewPrice] = useState(productPrice);
  const [newImage, setNewImage] = useState(productImage);

  const navigate = useNavigate();

  const goHomeHandler = () => {
    navigate("/home");
  };

  const updateProduct = async (id) => {
    console.log(id);

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
            <h1>Producto:</h1>

            <div className="form-outline mb-5">
              <label className="form-label" htmlFor="form3Example3">
                Nombre:
              </label>
              <input
                type="text"
                className="form-control"
                required
                defaultValue={productName}
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
                defaultValue={productImage}
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
                defaultValue={productColor}
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
                defaultValue={productSize}
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
                defaultValue={productDescription}
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
                defaultValue={productPrice}
                onChange={(e) => setNewPrice(e.target.value)}
              />
            </div>
          </div>

          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => updateProduct(productId)}
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
