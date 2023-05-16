import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ onChangeState }) => {
  const showHandler = () => {
    const newState = (prevShowSidebar) => !prevShowSidebar;
    onChangeState(newState);
  };
  return (
    <>
      <nav
        className="navbar navbar-light justify-content-between"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="p-4" style={{ backgroundColor: "#e3f2fd" }}>
              <h4 className="text-white">Collapsed content</h4>
              <span className="text-muted">
                Toggleable via the navbar brand.
              </span>
            </div>
          </div>
          <nav
            className="navbar navbar-light justify-content-between"
            style={{ backgroundColor: "#e3f2fd" }}
          >
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
              <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
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
    </>
  );
};
export default NavBar;
