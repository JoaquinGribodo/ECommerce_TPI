import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../Config/FireBase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./LogIn.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

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

  const navigate = useNavigate();
  const goToSignUpHandler = () => {
    navigate("/signup");
  };

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
                    <h2 className="fw-bold mb-2 text-uppercase">
                      Iniciar Sesión
                    </h2>
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
                      />
                      <p>{email === "" ? "Ingrese su correo" : ""}</p>
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
                      />
                      <p>{password === "" ? "Ingrese su contraseña" : ""}</p>
                    </div>

                    <p className="small mb-5 pb-lg-2">
                      <a className="text-white-50" href="#!">
                        ¿Olvidó su contraseña?
                      </a>
                    </p>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={signIn}
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
