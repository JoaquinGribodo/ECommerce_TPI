import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import "./ModifyUser.css";
import { ToastContainer, toast } from "react-toastify";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../Config/FireBase";
import "react-toastify/dist/ReactToastify.css";

const ModifyUser = () => {
  const location = useLocation();
  const userEmailList = location.state ? location.state.userList : null;
  const [users, setUsers] = useState(userEmailList);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user_type, setUserType] = useState("");
  const [newEmail, setNewEmail] = useState();
  const [newPassword, setNewPassword] = useState();
  const [newType, setNewType] = useState();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSelectChange = (event) => {
    const firstOption = event.target.querySelector(
      'option[value="selectUser"]'
    );
    firstOption.disabled = true;
    const selectedUserEmail = event.target.value;
    const selectedUser = users.find((user) => user.email === selectedUserEmail);
    if (selectedUser) {
      setEmail(selectedUser.email);
      setPassword(selectedUser.password);
      setUserType(selectedUser.user_type);
    }
  };

  const emailHandler = (e) => {
    emailRef.current.style.borderColor = "";
    emailRef.current.style.outline = "";
    setNewEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    passwordRef.current.style.borderColor = "";
    passwordRef.current.style.outline = "";
    setNewPassword(e.target.value);
  };

  const typeHandler = (e) => {
    const firstOption = e.target.querySelector('option[value="selectType"]');
    firstOption.disabled = true;
    setNewType(e.target.value);
  };

  const navigate = useNavigate();

  const goHomeHandler = () => {
    navigate("/home");
  };

  const updateUser = async (email) => {
    if (
      email === "" ||
      !email.includes("@") ||
      !email.includes(".") ||
      password === "" ||
      user_type === ""
    ) {
      warningMessage();
      return;
    }
    if (
      passwordRef.current.value.length < 5 ||
      passwordRef.current.value.length > 10
    ) {
      passwordErrorMessage();
    }

    try {
      const userItem = doc(db, "users", email);
      await updateDoc(userItem, {
        email: newEmail,
        password: newPassword,
        user_type: newType,
      });
      successMessage();
      setInterval(() => {
        goHomeHandler();
      }, 2000);
    } catch {
      warningMessage();
    }
  };

  const successMessage = () =>
    toast.success("El usuario se ha actualizado correctamente", {
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
    toast.warning(
      "El usuario no se ha actualizado. Sugerencias: el correo debe contener @ y . Completar todos los campos",
      {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );

  const passwordErrorMessage = () =>
    toast.warning("La contraseña debe tener entre 6 y 10 caracteres", {
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
    <div className="containerModify">
      <div className="containerUser">
        <div className="modifyUserDiv">
          <div className="card5 bg-glass">
            <h1>Modificar Usuario:</h1>
            <div className="card-body px-4 py-5 px-md-5">
              <form>
                <div className="form-outline mb-5">
                  <h1>Usuario:</h1>
                  <div className="form-outline mb-5">
                    <label className="form-label">Id Usuario:</label>
                    <select
                      name="usersId"
                      id="lang"
                      onChange={handleSelectChange}
                    >
                      <option value="selectUser">Seleccione un usuario</option>
                      {users
                        ? users.map((user) => (
                            <option key={user.email} value={user.email}>
                              Email: {user.email}
                            </option>
                          ))
                        : ""}
                    </select>
                  </div>

                  <div className="form-outline mb-5">
                    <label className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control w-50"
                      required
                      defaultValue={email}
                      ref={emailRef}
                      onChange={emailHandler}
                    />
                  </div>
                  <div className="form-outline mb-5">
                    <label className="form-label">Contraseña:</label>
                    <input
                      type="password"
                      className="form-control w-50"
                      required
                      min={6}
                      max={10}
                      ref={passwordRef}
                      defaultValue={password}
                      onChange={passwordHandler}
                    />
                  </div>
                  <div className="form-outline mb-5">
                    <label className="form-label">Tipo:</label>
                    <select
                      name="types"
                      id="lang1"
                      defaultValue={user_type}
                      required
                      onChange={typeHandler}
                    >
                      <option value="selectType">Seleccione un tipo</option>
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                      <option value="superAdmin">SuperAdmin</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    onClick={() => updateUser(email)}
                  >
                    Modificar
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifyUser;
