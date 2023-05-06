import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <nav classNameName="navbar navbar-dark bg-dark justify-content-between">
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">Collapsed content</h4>
            <span className="text-muted">Toggleable via the navbar brand.</span>
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
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
      <form classNameName="form-inline">
        <div classNameName="searchDiv">
          <div classNameName="glassDiv">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="xl"
              style={{ color: "#f9fafb" }}
            />
          </div>
          <input
            classNameName="form-control mr-sm-2"
            type="search"
            placeholder="¿Qué producto buscas?"
            aria-label="Search"
          />
        </div>
      </form>
    </nav>
  );
}

export default NavBar;
