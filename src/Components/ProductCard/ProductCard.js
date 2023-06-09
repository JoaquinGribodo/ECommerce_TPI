import { useContext } from "react";
import "./ProductCard.css";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../Services/Cart/Cart.Context";

const ProductCard = ({ children, productName, productPrice }) => {
  const { addToCart } = useContext(CartContext);

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
