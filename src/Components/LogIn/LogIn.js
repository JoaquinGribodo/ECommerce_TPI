import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./LogIn.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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
    successMessage();
  };

  const navigate = useNavigate();
  const goToSignUpHandler = () => {
    navigate("/signup");
  };

  const successMessage = () =>
    toast.success("Ha iniciado sesión correctamente", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <div className="logInDiv">
      <section className="vh-150 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <p className="fw-bold mb-2 text-uppercase">
                      Iniciar Sesión
                    </p>
                    <p className="text-white-50 mb-5">
                      Ingrese su correo electrónico y su contraseña
                    </p>

                    <label className="form-label" for="typeEmailX">
                      Correo electrónico:
                    </label>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        ref={emailRef}
                        onChange={emailChangeHandler}
                        required
                      />
                    </div>

                    <label className="form-label" for="typePasswordX">
                      Contraseña:
                    </label>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        ref={passwordRef}
                        onChange={passwordChangeHandler}
                        required
                      />
                    </div>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={logInClicked}
                    >
                      Ingresar
                    </button>
                  </div>

                  <div>
                    <p className="mb-0">
                      ¿No tiene una cuenta?{" "}
                      <button
                        className="text-white-50 fw-bold"
                        onClick={goToSignUpHandler}
                      >
                        Registrarse
                      </button>
                    </p>
                  </div>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
