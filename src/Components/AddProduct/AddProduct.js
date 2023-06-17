import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./AddProduct.css";
import { addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../Config/FireBase";
import { productsCollection } from "../Products/Products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [name, setName] = useState();
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState();

  async function getDocument(id) {
    const docRef = doc(db, "products", id);
    await updateDoc(docRef, { id: docRef.id });
  }

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const colorHandler = (e) => {
    const firstOption = e.target.querySelector('option[value="selectColor"]');
    firstOption.disabled = true;
    setColor(e.target.value);
  };
  const sizeHandler = (e) => {
    const firstOption = e.target.querySelector('option[value="selectSize"]');
    firstOption.disabled = true;
    setSize(e.target.value);
  };
  const descriptionHandler = (e) => {
    const firstOption = e.target.querySelector(
      'option[value="selectCategory"]'
    );
    firstOption.disabled = true;
    setDescription(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const imageHandler = (e) => {
    setImage(e.target.value);
  };

  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate("/home");
  };

  const successMessage = () =>
    toast.success("El producto se ha agregado correctamente", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const warningMessage = () =>
    toast.warning(
      "El producto no se ha agregado. Verifique que todos los campos estén completos. Aclaración: el precio no puede ser 0",
      {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );

  const addProduct = async () => {
    if (price !== "" && price && price > 0) {
      try {
        const docRef = await addDoc(productsCollection, {
          id: "a",
          name: name,
          color: color,
          size: size,
          description: description,
          price: price,
          image: image,
        });
        successMessage();
        getDocument(docRef.id.toString());
        setInterval(() => {
          goHomeHandler();
        }, 2000);
      } catch (error) {
        warningMessage();
        console.error(error);
      }
    } else {
      warningMessage();
    }
  };

  return (
    <div className="containerContainer">
      <div className="addProductDiv">
        <div className="card2 bg-glass">
          <h1>Agregar un nuevo Producto:</h1>
          <div className="card-body px-4 py-5 px-md-5">
            <form>
              <div className="form-outline mb-5">
                <label className="form-label">Nombre:</label>
                <input
                  type="text"
                  className="form-control w-50"
                  required
                  onChange={nameHandler}
                />
              </div>
              <div className="form-outline mb-5">
                <label className="form-label">Imagen:</label>
                <input
                  type="text"
                  className="form-control w-50"
                  required
                  onChange={imageHandler}
                />
              </div>
              <div className="form-outline mb-5">
                <label className="form-label">Color:</label>
                <select name="colors" id="lang" onChange={colorHandler}>
                  <option value="selectColor">Seleccione un color</option>
                  <option value="Rojo">Rojo</option>
                  <option value="Azul">Azul</option>
                  <option value="Gris">Gris</option>
                  <option value="Negro">Negro</option>
                </select>
              </div>
              <div className="form-outline mb-5">
                <label className="form-label">Talle:</label>
                <select name="talles" id="lang" onChange={sizeHandler}>
                  <option value="selectSize">Seleccione un talle</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>
              <div className="form-outline mb-5">
                <label className="form-label">Descripción:</label>
                <select
                  name="categories"
                  id="lang2"
                  onChange={descriptionHandler}
                >
                  <option value="selectCategory">
                    Seleccione una categoría:
                  </option>
                  <option value="Mujer">Mujer</option>
                  <option value="Hombre">Hombre</option>
                  <option value="Niño">Niño</option>
                </select>
              </div>
              <div className="form-outline mb-5">
                <label className="form-label">Precio:</label>
                <input
                  type="number"
                  className="form-control w-50 "
                  required
                  onChange={priceHandler}
                />
              </div>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={addProduct}
              >
                Agregar
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
      </div>
    </div>
  );
};

export default AddProduct;
