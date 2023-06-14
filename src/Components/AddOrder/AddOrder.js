import React, { useState } from "react";
import { useNavigate } from "react-router";
import { addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../Config/FireBase";
import { ordersCollection } from "../Products/Products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddOrder = () => {
  const [quantity, setQuantity] = useState(0);
  const [order, setOrder] = useState([]);

  async function getDocument(id) {
    const docRef = doc(db, "orders", id);
    await updateDoc(docRef, { id: docRef.id });
  }

  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate("/home");
  };

  const handleQuantityChange = (event) => {
    const quantity = event.target.value;
    setQuantity(quantity);

    const newOrder = [];
    for (let i = 0; i < quantity; i++) {
      newOrder.push({
        name: "",
        image: "",
        price: "",
      });
    }
    setOrder(newOrder);
  };

  const handleProductChange = (event, index) => {
    const { name, value } = event.target;
    const newOrder = [...order];
    newOrder[index][name] = value;
    setOrder(newOrder);
  };

  const addOrder = async () => {
    try {
      const docRef = await addDoc(ordersCollection, {
        id: "a",
        items: order,
      });
      successMessage();
      getDocument(docRef.id.toString());
      setInterval(() => {
        goHomeHandler();
      }, 2000);
    } catch (error) {
      errorMessage();
      console.error(error);
    }
  };

  const successMessage = () =>
    toast.success("El pedido se ha agregado correctamente.", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const errorMessage = () =>
    toast.error("El pedido no se ha agregado.", {
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
    <div className="containerContainer">
      <div className="addProductDiv">
        <div className="card2 bg-glass">
          <h1>Agregar un nuevo Pedido:</h1>
          <div className="card-body px-4 py-5 px-md-5">
            <form>
              <div className="form-outline mb-5">
                <label className="form-label" htmlFor="quantityInput">
                  Cantidad:
                </label>
                <input
                  type="number"
                  id="quantityInput"
                  className="form-control w-50"
                  onChange={handleQuantityChange}
                  required
                />
              </div>

              {order.map((order, index) => (
                <div key={index}>
                  <h2>Producto {index + 1}</h2>
                  <div className="form-outline mb-5">
                    <label className="form-label">Nombre:</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control w-50"
                      onChange={(event) => handleProductChange(event, index)}
                      required
                    />
                  </div>
                  <div className="form-outline mb-5">
                    <label className="form-label">Imagen:</label>
                    <input
                      type="text"
                      name="image"
                      className="form-control w-50"
                      onChange={(event) => handleProductChange(event, index)}
                      required
                    />
                  </div>
                  <div className="form-outline mb-5">
                    <label className="form-label">Precio:</label>
                    <input
                      type="number"
                      name="price"
                      className="form-control w-50"
                      onChange={(event) => handleProductChange(event, index)}
                      required
                      min={1}
                    />
                  </div>
                </div>
              ))}

              <button
                type="button"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={addOrder}
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

export default AddOrder;
