import React from "react";
import { useNavigate } from "react-router";
import { deleteDoc, doc } from "firebase/firestore";

const DeleteProduct = () => {
  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate("/home");
  };
  // const deleteProduct = async (id) => {
  //   const productItem = doc(db, "products", id);
  //   await deleteDoc();
  // };
  return (
    <div className="card bg-glass">
      <h1>Eliminar Producto:</h1>
      <div className="card-body px-4 py-5 px-md-5">
        <form>
          <div className="form-outline mb-5">
            <label className="form-label" for="form3Example3">
              Productos:
            </label>
            <select name="productos" id="lang">
              <option value="selecciona">Seleccione el producto</option>
              <option value="rojo">Rojo</option>
              <option value="azul">Azul</option>
              <option value="gris">Gris</option>
              <option value="negro">Negro</option>
            </select>
          </div>

          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            // onClick={() => deleteProduct(product.id)}
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
        </form>
      </div>
    </div>
  );
};

export default DeleteProduct;
