import { useContext } from "react";
import { useNavigate } from "react-router";
import "./ProductCard.css";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../Services/Cart/Cart.Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Config/FireBase";
import { UsersContext } from "../Services/Users/Users.Context";

const ProductCard = ({
  children,
  productName,
  productPrice,
  productColor,
  productSize,
  productImage,
  productDescription,
  productId,
  productList,
}) => {
  const { addToCart } = useContext(CartContext);
  const { userType } = useContext(UsersContext);
  const navigate = useNavigate();

  const goToModifyProduct = () => {
    navigate("/modifyProduct", {
      state: {
        productList,
        productName,
        productColor,
        productDescription,
        productImage,
        productSize,
        productPrice,
        productId,
      },
    });
  };

  const removeProductFromDb = async (id) => {
    if (window.confirm("¿Confirma la eliminación de este producto?")) {
      const productItem = doc(db, "products", id);
      await deleteDoc(productItem);
      successMessage();
      window.location.reload();
    } else {
      warningMessage();
    }
  };

  const successMessage = () =>
    toast.success("El producto se ha eliminado correctamente", {
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
    toast.warning("El producto no se ha eliminado.", {
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
    <>
      <div className="w-80 h-200 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5" id="cardDiv">
          {(userType === "superadmin" || userType === "admin") && (
            <div className="d-flex justify-content-between">
              <button
                className="bg-white-500 hover:bg-white-400 text-green font-bold mb-4 py-2 px-2"
                type="button"
                onClick={goToModifyProduct}
              >
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  size="lg"
                  style={{ color: "#0054e6" }}
                />
              </button>
              <button
                className="bg-white-500 hover:bg-white-400 text-green font-bold mb-4 py-2 px-2"
                type="submit"
                onClick={() => removeProductFromDb(productId.toString())}
              >
                <FontAwesomeIcon
                  icon={faTrashCan}
                  size="lg"
                  style={{ color: "#f60404" }}
                />
              </button>
            </div>
          )}
          <p className="mb-3 font-normal text-zinc-900">{children}</p>
          {(userType === "superadmin" ||
            userType === "admin" ||
            userType === "user") && (
            <button
              onClick={() =>
                addToCart(productName, productPrice, productId, productImage)
              }
              className="flex flex-row-reverse float-end items-right py-2 text-sm font-medium text-right text-black bg-white"
            >
              <FontAwesomeIcon
                icon={faCartPlus}
                size="2xl"
                style={{ color: "#05f641" }}
              />
            </button>
          )}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default ProductCard;
