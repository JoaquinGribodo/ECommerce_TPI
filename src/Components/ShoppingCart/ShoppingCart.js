import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../Services/Cart/Cart.Context";

const ShoppingCart = () => {
  const [amount, setAmount] = useState(1);

  const { cartItems } = useContext(CartContext);

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const navigate = useNavigate();
  const backToHomePageHandler = () => {
    navigate("/home");
  };

  const buyMessage = () => {
    toast.success("¡Su compra se ha realizado correctamente!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
    console.log(cartItems);
  };
  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Carrito</h1>
            <h1 className="font-semibold text-2xl">
              Acá iría la cantidad de productos
            </h1>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Detalles del Producto
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Cantidad
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Precio
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>
          <div>
            {cartItems
              ? cartItems.map((item) => (
                  <div>
                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                      <div className="flex w-2/5">
                        <div className="w-20">
                          <img className="h-24" src={item.image} alt="" />
                        </div>
                        <div className="flex flex-col justify-between ml-4 flex-grow">
                          <span className="font-bold text-sm">{item.name}</span>
                          <a
                            href="#"
                            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                          >
                            Eliminar
                          </a>
                        </div>
                      </div>
                      <div className="flex justify-center w-1/5">
                        <input
                          className="mx-2 border text-center w-8"
                          type="number"
                          onChange={amountHandler}
                        />
                      </div>
                      <span className="text-center w-1/5 font-semibold text-sm">
                        {item.price}
                      </span>
                      <span className="text-center w-1/5 font-semibold text-sm">
                        {item.price * amount}
                      </span>
                    </div>
                  </div>
                ))
              : ""}
          </div>
          <button
            className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-25"
            onClick={backToHomePageHandler}
          >
            Volver al Inicio
          </button>
        </div>

        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Resumen del pedido
          </h1>
          <div className=" justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Productos</span>
            <span className="font-semibold text-sm">
              {cartItems
                ? cartItems.map((item) => (
                    <>
                      <div className="d-flex justify-content-between m-3 p-2">
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                      </div>
                    </>
                  ))
                : ""}
            </span>
          </div>

          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total:</span>
              <span>$600</span>
            </div>
            <button
              onClick={buyMessage}
              className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
            >
              Comprar
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ShoppingCart;
