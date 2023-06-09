import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { auth, db } from "../../Config/FireBase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, setDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const usersCollection = collection(db, "users");

  const emailChangeHandler = (e) => {
    emailRef.current.style.borderColor = "";
    emailRef.current.style.outline = "";
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    passwordRef.current.style.borderColor = "";
    passwordRef.current.style.outline = "";
    setPassword(e.target.value);
  };

  const logInClicked = () => {
    if (emailRef.current.value.length === 0) {
      emailRef.current.focus();
      emailRef.current.style.border = "solid red";
      emailRef.current.style.outline = "none";
      return;
    }
    if (passwordRef.current.value.length === 0) {
      passwordRef.current.focus();
      passwordRef.current.style.border = "solid red";
      passwordRef.current.style.outline = "none";
      return;
    }
  };

  const signUp = async () => {
    try {
      logInClicked();
      await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(usersCollection, email), {
        email: email,
        password: password,
        user_type: email.includes("@mulberry.com")
          ? "admin"
          : email === "belen.linera@gmail.com" ||
            email === "moracapdevila457@gmail.com" ||
            email === "joacogribodo@gmail.com" ||
            email === "tobifernandez1@gmail.com"
          ? "superadmin"
          : "user",
      });
      successMessage();
      setInterval(() => {
        goHomeHandler();
      }, 2000);
    } catch (error) {
      console.error(error);
      errorMessage();
    }
  };

  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate("/home");
  };
  const successMessage = () =>
    toast.success("¡Registrado correctamente!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const errorMessage = () =>
    toast.error("El usuario no se ha registrado", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <div>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: "#E8EFFD" }}
              >
                El mejor negocio de ropa
                <br />
                <span style={{ color: "#8CB1F3" }}>siempre</span>
              </h1>
              <p className="mb-4 opacity-70" style={{ color: "#BAD0F8" }}>
                Somos una tienda que prioriza la comodidad sin dejar de estar a
                la moda, para toda la familia
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form>
                    <div className="form-outline mb-5">
                      <label className="form-label" htmlFor="form3Example3">
                        Correo electrónico:
                      </label>
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        onChange={emailChangeHandler}
                        ref={emailRef}
                        required
                      />
                      <span>
                        {email === ""
                          ? "Ingrese su correo"
                          : !email.includes("@") || !email.includes(".")
                          ? "Su correo debe contener @ y ."
                          : ""}
                      </span>
                    </div>
                    <div className="form-outline mb-5">
                      <label className="form-label" htmlFor="form3Example4">
                        Contraseña:
                      </label>
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        onChange={passwordChangeHandler}
                        ref={passwordRef}
                        required
                        min={6}
                        max={10}
                      />
                      <span>
                        {password === ""
                          ? "Ingrese su contraseña"
                          : password.length < 6 || password.length > 10
                          ? "La contraseña debe tener entre 6 y 10 caracteres"
                          : ""}
                      </span>
                    </div>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      onClick={signUp}
                    >
                      Registrarse
                    </button>
                  </form>
                </div>
              </div>
              <ToastContainer />
            </div>
          </div>
          <div>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={goHomeHandler}
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
