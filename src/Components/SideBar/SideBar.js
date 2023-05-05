import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faListUl} from '@fortawesome/free-solid-svg-icons'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

function SideBar() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Menú</span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house"></i>{" "}
                  <FontAwesomeIcon icon={faHouse} style={{color: "#ffffff",}} />
                  <span className="ms-1 d-none d-sm-inline">Inicio</span>
                </a>
              </li>
              <li>
                <a
                  href="#submenu1"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2"></i>{" "}
                  <FontAwesomeIcon icon={faListUl} style={{color: "#ffffff",}} />
                  <span className="ms-1 d-none d-sm-inline">Categorías</span>{" "}
                  
                </a>
                <ul
                  className="collapse show nav flex-column ms-1"
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
                <a href="#" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-table"></i>{" "}
                  <FontAwesomeIcon icon={faCircleInfo} style={{color: "#ffffff",}} />
                  <span className="ms-1 d-none d-sm-inline">Quiénes somos</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-people"></i>{" "}
                  <FontAwesomeIcon icon={faPhone} style={{color: "#fafafa",}} />
                  <span className="ms-1 d-none d-sm-inline">Cómo encontrarnos</span>{" "}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-people"></i>{" "}
                  <FontAwesomeIcon icon={faCartShopping} style={{color: "#f5f9ff",}} />
                  <span className="ms-1 d-none d-sm-inline">Carrito de compras</span>{" "}
                </a>
              </li>
            </ul>
            <hr />
            <div className="dropdown pb-4">
              <a
                href="#"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
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
  )
}

export default SideBar