import { useState } from "react";
import "./ProductCard.css";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ children, productName, productPrice }) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (name, price) => {
    try {
      setCartItem([...cartItem, { name, price }]);
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
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-80 h-200 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5" id="cardDiv">
        <p className="mb-3 font-normal text-zinc-900">{children}</p>
        <button
          onClick={() => addToCart(productName, productPrice)}
          className="flex flex-row-reverse float-end items-right py-2 text-sm font-medium text-right text-black bg-white"
        >
          <FontAwesomeIcon
            icon={faCartPlus}
            size="2xl"
            style={{ color: "#075ced" }}
          />
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductCard;
