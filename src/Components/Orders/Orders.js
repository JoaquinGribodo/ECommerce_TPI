import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { UsersContext } from "../Services/Users/Users.Context";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Config/FireBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderPlus,
  faFolderMinus,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Orders = () => {
  const location = useLocation();
  const orderList = location.state ? location.state.orderList : null;
  const [orders, setOrders] = useState(orderList);
  const { userType } = useContext(UsersContext);
  const navigate = useNavigate();

  const removeOrderFromDb = async (id) => {
    if (window.confirm("¿Confirma la eliminación de este pedido?")) {
      const orderItem = doc(db, "orders", id);
      await deleteDoc(orderItem);
      successMessage();
      window.location.reload();
    } else {
      warningMessage();
    }
  };
  const successMessage = () =>
    toast.success("El pedido se ha eliminado correctamente", {
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
    toast.warning("El pedido no se ha eliminado.", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const goToAddOrder = () => {
    navigate("/addOrder");
  };

  const goToModifyOrder = () => {
    navigate("/modifyOrder");
  };

  const goHomeHandler = () => {
    navigate("/home");
  };
  return (
    <div>
      <div className="d-flex pr-4">
        <button
          className="bg-white-150 hover:bg-white-400 text-green font-bold m-1 pr-8"
          type="button"
          onClick={goToAddOrder}
        >
          <FontAwesomeIcon
            icon={faFolderPlus}
            size="2xl"
            style={{ color: "#00ff1e" }}
          />
        </button>
      </div>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Aquí están tus Pedidos.
        </span>
      </h1>
      <div className="d-flex">
        {orders
          ? orders.map((order) => (
              <div
                className="w-80 h-200 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                key={order.id}
              >
                {(userType === "superadmin" || userType === "admin") && (
                  <div className="d-flex justify-content-between">
                    <button
                      className="bg-white-150 hover:bg-white-400 text-green font-bold m-1 pr-8"
                      type="button"
                      onClick={() => removeOrderFromDb(order.id)}
                    >
                      <FontAwesomeIcon
                        icon={faFolderMinus}
                        size="2xl"
                        style={{ color: "#ff0505" }}
                      />
                    </button>
                    <button
                      className="bg-white-150 hover:bg-white-400 text-green font-bold m-1 pr-8"
                      type="button"
                    >
                      <FontAwesomeIcon
                        icon={faFilePen}
                        size="2xl"
                        style={{ color: "#005eff" }}
                        onClick={goToModifyOrder}
                      />
                    </button>
                  </div>
                )}
                ;<p className="text-xl font-bold dark:text-green">Pedido:</p>
                {order.items.map((item) => (
                  <div key={item.id}>
                    <img
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                    />
                    <p>Nombre: {item.name}</p>
                    <p>Cantidad: {item.amount}</p>
                    <p>Precio: {item.price}</p>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            ))
          : ""}
      </div>
      <ToastContainer />
      <button
        type="button"
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={goHomeHandler}
      >
        Volver al Inicio
      </button>
    </div>
  );
};

export default Orders;
