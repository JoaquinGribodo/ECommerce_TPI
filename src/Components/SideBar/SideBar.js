import React from "react";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListUl,
  faHouse,
  faCircleInfo,
  faPhone,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

/* Armado de sidebar con estilo, formato y cada item */
const SideBar = () => {
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
                      <span className="d-none d-sm-inline">Mujer</span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Hombre</span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Niño</span>{" "}
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
                  href="http://localhost:3000/shoppingcart"
                  className="nav-link px-0 align-middle"
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
            <div className="dropdown pb-4">
              <a
                href="#"
                className="d-flex align-items-center text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="hugenerd"
                  width="30"
                  height="30"
                  className="rounded-circle"
                />
                <span className="d-none d-sm-inline mx-1">Usuario</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li>
                  <a className="dropdown-item" href="#">
                    Configuración
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Perfil
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cerrar sesión
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
