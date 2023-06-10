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
    console.log(docRef);
    console.log("docID:", docRef.id);
    await updateDoc(docRef, { id: docRef.id });
  }

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const colorHandler = (e) => {
    setColor(e.target.value);
  };
  const sizeHandler = (e) => {
    setSize(e.target.value);
  };
  const descriptionHandler = (e) => {
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

  const addProduct = async () => {
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
    <div className="addProductDiv">
      <div className="card bg-glass">
        <h1>Agregar un nuevo Producto:</h1>
        <div className="card-body px-4 py-5 px-md-5">
          <form>
            <div className="form-outline mb-5">
              <label className="form-label" htmlFor="form3Example3">
                Nombre:
              </label>
              <input
                type="text"
                className="form-control w-50"
                required
                onChange={nameHandler}
              />
            </div>
            <div className="form-outline mb-5">
              <label className="form-label" htmlFor="form3Example3">
                Imagen:
              </label>
              <input
                type="text"
                className="form-control w-50"
                required
                onChange={imageHandler}
              />
            </div>
            <div className="form-outline mb-5">
              <label className="form-label" htmlFor="form3Example3">
                Color:
              </label>
              <select name="colores" id="lang" onChange={colorHandler}>
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
              <select name="talles" id="lang" onChange={sizeHandler}>
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
                className="form-control w-50"
                required
                onChange={descriptionHandler}
              />
            </div>
            <div className="form-outline mb-5">
              <label className="form-label" htmlFor="form3Example3">
                Precio:
              </label>
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
