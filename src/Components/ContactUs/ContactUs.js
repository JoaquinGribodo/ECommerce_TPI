import React, { useRef, useState } from "react";
import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const emailChangeHandler = (e) => {
    emailRef.current.style.borderColor = "";
    emailRef.current.style.outline = "";
    setEmail(e.target.value);
  };

  const messageChangeHandler = (e) => {
    messageRef.current.style.borderColor = "";
    messageRef.current.style.outline = "";
    setMessage(e.target.value);
  };

  const sendClick = () => {
    if (emailRef.current.value.length === 0) {
      emailRef.current.focus();
      emailRef.current.style.border = "solid red";
      emailRef.current.style.outline = "none";
      return;
    }
    if (messageRef.current.value.length === 0) {
      messageRef.current.focus();
      messageRef.current.style.border = "solid red";
      messageRef.current.style.outline = "none";
      return;
    }
    emailMessage();
  };

  const emailMessage = () => {
    toast.success("¡Su correo se envió correctamente!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div className="container px-6 mx-auto">
      <section className="mb-32 text-gray-800">
        <div
          className=" overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              "https://mdbootstrap.com/img/new/textures/full/284.jpg",
            backgroundPosition: 50,
            height: 170,
          }}
        ></div>
        <div className="container text-gray-800 px-4 md:px-12">
          <div
            className="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6"
            style={{
              marginTop: -100,
              background: "#ffffffcc",
              backdropFilter: "blur(30)",
            }}
          >
            <div>
              <h1>CONTACTATE CON MULBERRY</h1>
              <br />
            </div>
            <div className="flex flex-wrap">
              <div className="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
                <form>
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Nombre"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <span>
                      {email === ""
                        ? "Ingrese su correo*"
                        : !email.includes("@") || !email.includes(".")
                        ? "Su correo debe contener @ y ."
                        : ""}
                    </span>
                    <input
                      type="email"
                      className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Correo electrónico"
                      required
                      ref={emailRef}
                      onChange={emailChangeHandler}
                    />
                  </div>
                  <div className="form-group mb-6">
                    <span>{message === "" ? "Ingrese un mensaje*" : ""}</span>

                    <textarea
                      className="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                      rows="3"
                      placeholder="Mensaje"
                      required
                      onChange={messageChangeHandler}
                      ref={messageRef}
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    onClick={sendClick}
                    className="
                w-full
                px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out"
                  >
                    Enviar
                  </button>
                  <ToastContainer />
                </form>
              </div>
              <div className="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                <div className="flex flex-wrap">
                  <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <FontAwesomeIcon icon={faHeadset} size="xl" flip />
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1">Soporte técnico</p>
                        <p className="text-gray-500">soporte@ejemplo.com</p>
                        <p className="text-gray-500">+123456789</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <FontAwesomeIcon icon={faShirt} flip />
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1">
                          Preguntas sobre Productos Nuevos
                        </p>
                        <p className="text-gray-500">productos@ejemplo.com</p>
                        <p className="text-gray-500">+123456789</p>
                      </div>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="text-gray-500">
                      Los campos que contienen un * son obligatorios.
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

export default ContactUs;
