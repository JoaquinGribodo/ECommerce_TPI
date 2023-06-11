import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../Config/FireBase";
import { usersCollection } from "../Products/Products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddUser.css";

const AddUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function getDocument(id) {
    const docRef = doc(db, "users", id);
    console.log(docRef);
    console.log("docID:", docRef.id);
    await updateDoc(docRef, { id: docRef.id });
  }

  const emailHandler = (e) => {
    emailRef.current.style.borderColor = "";
    emailRef.current.style.outline = "";
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    passwordRef.current.style.borderColor = "";
    passwordRef.current.style.outline = "";
    setPassword(e.target.value);
  };
  const userTypeHandler = (e) => {
    const firstOption = e.target.querySelector('option[value="selecciona"]');
    firstOption.disabled = true;
    setUserType(e.target.value);
  };

  const addUser = async () => {
    if (emailRef.current.value.length === 0) {
      emailRef.current.focus();
      emailRef.current.style.border = "solid red";
      emailRef.current.style.outline = "none";
      return warningMessage();
    }
    if (passwordRef.current.value.length === 0) {
      passwordRef.current.focus();
      passwordRef.current.style.border = "solid red";
      passwordRef.current.style.outline = "none";
      return warningMessage();
    }
    if (email === "" || !email.includes("@") || !email.includes(".")) {
      emailRef.current.focus();
      emailRef.current.style.border = "solid red";
      return warningMessage();
    }

    try {
      const docRef = await addDoc(usersCollection, {
        id: email,
        email: email,
        password: password,
        user_type: userType,
      });
      successMessage();
      getDocument(docRef.id.toString());
    } catch (error) {
      console.error(error);
      warningMessage();
    }
  };

  const successMessage = () =>
    toast.success("El usuario se ha creado correctamente", {
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
      "El usuario no se ha creado. El correo debe incluir @ y . Verifique que todos campos estén completos",
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

  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate("/home");
  };

  return (
    <div>
      <div className="card3 bg-glass">
        <h1>Agregar un nuevo Usuario:</h1>
        <div className="card-body px-4 py-5 px-md-5">
          <form>
            <div className="form-outline mb-5">
              <label className="form-label" htmlFor="form3Example3">
                Email:
              </label>
              <input
                type="email"
                className="form-control w-50"
                required
                onChange={emailHandler}
                ref={emailRef}
              />
            </div>
            <div className="form-outline mb-5">
              <label className="form-label" htmlFor="form3Example3">
                Contraseña:
              </label>
              <input
                type="password"
                className="form-control w-50"
                required
                onChange={passwordHandler}
                ref={passwordRef}
              />
            </div>
            <div className="form-outline mb-5">
              <label className="form-label" htmlFor="form3Example3">
                Tipo de Usuario:
              </label>
              <select name="colores" id="lang" onChange={userTypeHandler}>
                <option value="selecciona">
                  Seleccione un tipo de usuario:
                </option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="superAdmin">SuperAdmin</option>
              </select>
            </div>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={addUser}
            >
              Agregar
            </button>
            <ToastContainer />
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
    </div>
  );
};

export default AddUser;
