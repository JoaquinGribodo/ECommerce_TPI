import React, { useState } from "react";
import { useNavigate } from "react-router";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Config/FireBase";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteProduct = () => {
  const [id, setId] = useState();

  const location = useLocation();

  const productList = location.state ? location.state.productList : null;

  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate("/home");
  };
  const deleteProduct = async (id) => {
    const productItem = doc(db, "products", id);
    console.log(productItem);
    await deleteDoc(productItem);
    successMessage();
  };
  const idHandler = (e) => {
    setId(e.target.value);
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
  return (
    <div className="card bg-glass">
      <h1>Eliminar Producto:</h1>
      <div className="card-body px-4 py-5 px-md-5">
        <form>
          <div className="form-outline mb-5">
            <label className="form-label" htmlFor="form3Example3">
              Productos:
            </label>
            <select name="productos" id="lang" onChange={idHandler}>
              <option>Seleccione ID del producto a eliminar</option>
              {productList
                ? productList.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.id}
                    </option>
                  ))
                : ""}
            </select>
          </div>

          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => deleteProduct(id)}
          >
            Eliminar
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={goHomeHandler}
          >
            Volver al Inicio
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default DeleteProduct;
