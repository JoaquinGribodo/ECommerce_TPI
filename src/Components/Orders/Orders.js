import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { UsersContext } from "../Services/Users/Users.Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ordersCollection } from "../Products/Products";
import {
  faFolderPlus,
  faFolderMinus,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";
const Orders = () => {
  const location = useLocation();
  const orderList = location.state ? location.state.orderList : null;
  const [orders, setOrders] = useState(orderList);
  console.log(orders);
  const { userType } = useContext(UsersContext);
  const navigate = useNavigate();
  console.log(ordersCollection);
  const goToAddOrder = () => {
    navigate("/addOrder");
  };
  const goToDeleteOrder = () => {
    navigate("/deleteOrder");
  };
  const goToModifyOrder = () => {
    navigate("/modifyOrder");
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
        <button
          className="bg-white-150 hover:bg-white-400 text-green font-bold m-1 pr-8"
          type="button"
          onClick={goToDeleteOrder}
        >
          <FontAwesomeIcon
            icon={faFolderMinus}
            size="2xl"
            style={{ color: "#ff0505" }}
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
                <p className="text-xl font-bold dark:text-green">Pedido:</p>

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
    </div>
  );
};

export default Orders;
