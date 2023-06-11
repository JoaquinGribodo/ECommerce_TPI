import { createContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const existsMessage = () => {
    toast.success("El producto ya se encuentra en el carrito", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };

  const addToCart = (name, price, id) => {
    try {
      const existingProductIndex = cartItems.findIndex(
        (item) => item.id === id
      );
      if (existingProductIndex !== -1) {
        existsMessage();
      } else {
        setCartItems([...cartItems, { name, price, id }]);
        toast.success("El producto se añadió al carrito", {
          position: "top-left",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
