import React from "react";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div>
      <section className="vh-100 gradient-custom">
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
                        id="typeEmailX"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <label className="form-label" for="typePasswordX">
                      Contraseña:
                    </label>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <p className="small mb-5 pb-lg-2">
                      <a className="text-white-50" href="#!">
                        ¿Olvidó su contraseña?
                      </a>
                    </p>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Ingresar
                    </button>
                  </div>

                  <div>
                    <p className="mb-0">
                      ¿No tiene una cuenta?{" "}
                      <a href="#!" className="text-white-50 fw-bold">
                        Registrarse
                      </a>
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
