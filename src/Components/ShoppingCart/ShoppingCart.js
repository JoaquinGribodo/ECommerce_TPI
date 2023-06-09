import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../Services/Cart/Cart.Context";
import { UsersContext } from "../Services/Users/Users.Context";
import { ordersCollection } from "../Products/Products";
import { addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../Config/FireBase";

const ShoppingCart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { userEmail } = useContext(UsersContext);

  const [cart, setCart] = useState(
    cartItems.map((item) => ({ ...item, amount: 1 }))
  );

  const amountHandler = (e, id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, amount: e.target.value } : item
      )
    );
  };

  const deleteFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    setCartItems(updatedCart);
  };

  const navigate = useNavigate();
  const backHomePageHandler = () => {
    navigate("/home");
  };

  async function getDocument(id) {
    const docRef = doc(db, "orders", id);
    await updateDoc(docRef, { id: docRef.id });
  }
  const buyMessage = async () => {
    const items = cart.map((item) => ({
      image: item.image,
      price: item.price,
      name: item.name,
      amount: item.amount,
    }));
    if (cart.length !== 0) {
      try {
        const docRef = await addDoc(ordersCollection, {
          items,
          email: userEmail,
        });
        successMessage();
        getDocument(docRef.id.toString());
        navigate("/home");
        setCart([]);
        setCartItems([]);
      } catch (error) {
        console.error(error);
      }
    } else {
      warningMessage();
    }
  };

  const successMessage = () =>
    toast.success("La compra se ha realizado correctamente", {
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
    toast.warning("El carrito no tiene productos.", {
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
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Carrito</h1>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Detalles del Producto
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Cantidad
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Precio Unitario
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>
          <div>
            {cart
              ? cart.map((item) => (
                  <div key={item.id}>
                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                      <div className="flex w-2/5">
                        <div className="w-20">
                          <img className="h-24" src={item.image} alt="imagen" />
                        </div>
                        <div className="flex flex-col justify-between ml-4 flex-grow">
                          <span className="font-bold text-sm">{item.name}</span>
                          <button
                            type="button"
                            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                            onClick={() => deleteFromCart(item.id)}
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-center w-1/5">
                        <input
                          className="mx-2 border text-center w-8"
                          type="number"
                          onChange={(e) => amountHandler(e, item.id)}
                          min={1}
                          defaultValue={1}
                        />
                      </div>
                      <span className="text-center w-1/5 font-semibold text-sm">
                        {item.price}
                      </span>
                      <span className="text-center w-1/5 font-semibold text-sm">
                        {item.price * item.amount}
                      </span>
                    </div>
                  </div>
                ))
              : ""}
          </div>
          <button
            className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-25"
            onClick={backHomePageHandler}
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
              {cart
                ? cart.map((item) => (
                    <div key={item.name}>
                      <div className="d-flex justify-content-between m-3 p-2">
                        <p>{item.name}</p>
                        <p>${item.price * item.amount}</p>
                      </div>
                    </div>
                  ))
                : ""}
            </span>
          </div>

          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total:</span>
              <span>
                {cart.reduce(
                  (total, item) => total + item.price * item.amount,
                  0
                )}
              </span>
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
