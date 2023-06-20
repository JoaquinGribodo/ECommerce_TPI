import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Config/FireBase";
import "./DeleteUser.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteUser = () => {
  const location = useLocation();
  const userList = location.state ? location.state.userList : null;
  const [users, setUsers] = useState(userList);
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate("/home");
  };
  const removeUserFromDb = async (email) => {
    if (email) {
      const userItem = doc(db, "users", email);
      await deleteDoc(userItem);
      successMessage();
    } else {
      warningMessage();
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const successMessage = () =>
    toast.success("El usuario se ha eliminado correctamente", {
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
    toast.warning("El usuario no se ha eliminado.", {
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
    <div className="card">
      <div className="card4 bg-glass">
        <h1>Eliminar Usuario:</h1>
        <div className="card-body px-4 py-5 px-md-5">
          <form>
            <div className="form-outline mb-5">
              <label className="form-label">Usuario:</label>
              <select name="users" id="lang" onChange={emailHandler}>
                <option value="selecciona" disabled>
                  Seleccione un usuario
                </option>
                {users
                  ? users.map((user) => (
                      <option key={user.email} value={user.email}>
                        Email: {user.email}
                      </option>
                    ))
                  : ""}
              </select>
              <div className="d-flex justify-content-center">
                <div classname="button-container">
                <button
                  id="delete-button"
                  type="button"
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  onClick={() =>
                    removeUserFromDb(email ? email.toString() : undefined)
                  }
                >
                  Eliminar
                </button>
                <ToastContainer />
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  onClick={goHomeHandler}
                >
                  Volver al Inicio
                </button>
              </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
