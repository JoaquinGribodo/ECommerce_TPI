import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./SideBar.css";
import { auth } from "../../Config/FireBase";
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListUl,
  faHouse,
  faCircleInfo,
  faPhone,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ filterProductsByCategory }) => {
  const [userLoged, setUserLoged] = useState(auth.currentUser);

  const navigate = useNavigate();

  const handleWhoWeAreClickScroll = () => {
    const element = document.getElementById("whoWeAre");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactUsClickScroll = () => {
    const element = document.getElementById("contactUs");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToLogInHandler = async () => {
    if (userLoged) {
      await signOut(auth);
      setUserLoged((prevValue) => !prevValue);
    } else {
      navigate("/login");
    }
  };

  const goHomeHandler = () => {
    navigate("/shoppingcart");
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3"
      style={{ width: 180, fontSize: 18, backgroundColor: "#e3f2fd" }}
    >
      <div className="row flex-nowrap" id="sideBar">
        <div
          className="col-auto col-md-3 col-xl-2 px-sm-2 px-0"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Menú</span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <a
                  href="http://localhost:3000/home"
                  className="nav-link align-middle px-0"
                >
                  <i className="fs-4 bi-house"></i>{" "}
                  <FontAwesomeIcon icon={faHouse} />
                  <span className="ms-1 d-none d-sm-inline">Inicio</span>
                </a>
              </li>
              <li>
                <a
                  href="#submenu1"
                  data-bs-toggle="collapse"
                  className="d-flex nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2"></i>{" "}
                  <FontAwesomeIcon icon={faListUl} />
                  <span className="ms-1 d-none d-sm-inline">
                    Categorías
                  </span>{" "}
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenu1"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span
                        className="d-none d-sm-inline"
                        onClick={() => filterProductsByCategory("Mujer")}
                      >
                        Mujer
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span
                        className="d-none d-sm-inline"
                        onClick={() => filterProductsByCategory("Hombre")}
                      >
                        Hombre
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span
                        className="d-none d-sm-inline"
                        onClick={() => filterProductsByCategory("Niño")}
                      >
                        Niño
                      </span>{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="nav-link px-0 align-middle"
                  onClick={handleWhoWeAreClickScroll}
                  role="button"
                >
                  <i className="fs-4 bi-table"></i>{" "}
                  <FontAwesomeIcon icon={faCircleInfo} />
                  <span className="ms-1 d-none d-sm-inline">Quiénes somos</span>
                </a>
              </li>
              <li>
                <a
                  className="nav-link px-0 align-middle"
                  onClick={handleContactUsClickScroll}
                  role="button"
                >
                  <i className="fs-4 bi-people"></i>{" "}
                  <FontAwesomeIcon icon={faPhone} />
                  <span className="ms-1 d-none d-sm-inline">
                    Cómo encontrarnos
                  </span>{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link px-0 align-middle"
                  onClick={goHomeHandler}
                >
                  <i className="fs-4 bi-people"></i>{" "}
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span className="ms-1 d-none d-sm-inline">
                    Carrito de compras
                  </span>{" "}
                </a>
              </li>
            </ul>
            <hr />
            <div className=" pb-4">
              <a className="d-flex align-items-center text-decoration-none">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                  alt="hugenerd"
                  width="30"
                  height="30"
                  className="rounded-circle"
                />
                <button
                  className="d-none d-sm-inline mx-1"
                  onClick={goToLogInHandler}
                >
                  {userLoged ? "Cerrar Sesión" : "Iniciar Sesión"}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
