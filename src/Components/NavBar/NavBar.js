import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";

//cuando lo cerramos que no se corra todo para la izquierda

const NavBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const showHandler = () => {
    setShowSideBar((prevShowSidebar) => !prevShowSidebar);
  };
  return (
    <>
      <nav className="navbar navbar-dark bg-dark justify-content-between">
        <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
              <h4 className="text-white">Collapsed content</h4>
              <span className="text-muted">
                Toggleable via the navbar brand.
              </span>
            </div>
          </div>
          <nav className="navbar navbar-dark bg-dark justify-content-between ">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={showHandler}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
        <form className="form-inline">
          <div className="searchDiv">
            <div className="glassDiv">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="xl"
                style={{ color: "#f9fafb" }}
              />
            </div>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="¿Qué producto buscas?"
              aria-label="Search"
            />
          </div>
        </form>
      </nav>
      <div className="mainDiv">{showSideBar && <SideBar />}</div>
    </>
  );
};
export default NavBar;
