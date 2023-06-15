import { useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router";
import { db } from "../../Config/FireBase";
import { updateDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModifyOrder = () => {
  const location = useLocation();
  const order = location.state ? location.state.order : null;

  const [items, setItems] = useState(order ? order.items : []);

  const handleItemChange = useCallback((event, index) => {
    const { name, value } = event.target;
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index][name] = value;
      return newItems;
    });
  }, []);

  const navigate = useNavigate();

  const goHomeHandler = () => {
    navigate("/home");
  };

  const updateOrder = async (id) => {
    console.log(id);
    if (
      items.every(
        (item) =>
          item.name !== "" &&
          item.price !== "" &&
          item.price > 0 &&
          item.image !== "" &&
          item.quantity !== ""
      )
    ) {
      try {
        const orderItem = doc(db, "orders", id);
        await updateDoc(orderItem, { items });
        successMessage();
      } catch (error) {
        console.error(error);
      }
    } else {
      warningMessage();
    }
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
  const warningMessage = () =>
    toast.warning(
      "El producto no se ha modificado. Verifique que todos campos estén completos. Aclaración: el precio no puede ser 0",
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

  return (
    <div>
      <h1>Modificar Pedido:</h1>
      <form>
        {items.map((item, index) => (
          <div
            className="d-flex justify-content-center align-items-center"
            key={index}
          >
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              className="form-control w-50"
              defaultValue={item.name}
              onChange={(event) => handleItemChange(event, index)}
              required
            />
            <br />
            <label>Precio:</label>
            <input
              type="number"
              name="price"
              className="form-control w-50"
              defaultValue={item.price}
              onChange={(event) => handleItemChange(event, index)}
              required
              min={1}
            />
            <br />
            <label>Imagen:</label>
            <input
              type="text"
              name="image"
              className="form-control w-50"
              defaultValue={item.image}
              onChange={(event) => handleItemChange(event, index)}
              required
            />
            <br />
            <label>Cantidad:</label>
            <input
              type="number"
              name="quantity"
              className="form-control w-50"
              defaultValue={item.quantity}
              onChange={(event) => handleItemChange(event, index)}
              required
              min={1}
            />
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => {
                updateOrder(order.id);
              }}
            >
              Modificar
            </button>
            <ToastContainer />
          </div>
        ))}
        <button
          type="button"
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={goHomeHandler}
        >
          Volver al Inicio
        </button>
      </form>
    </div>
  );
};

export default ModifyOrder;
