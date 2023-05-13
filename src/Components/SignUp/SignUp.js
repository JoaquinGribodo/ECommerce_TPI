import React from "react";
import "./SignUp.css";

const SignUp = () => {
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
                Descripción de la tienda
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
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label" for="form3Example1">
                            Nombre:
                          </label>
                          <input
                            type="text"
                            id="form3Example1"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label" for="form3Example2">
                            Apellido:
                          </label>
                          <input
                            type="text"
                            id="form3Example2"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example3">
                        Correo electrónico:
                      </label>
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example4">
                        Contraseña:
                      </label>
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                      />
                    </div>

                    <button
                      type="button"
                      class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Registrarse
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
