import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faRaspberryPi } from "@fortawesome/free-brands-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import ToggleTheme from "../UI/ToggleTheme/ToggleTheme";
import { ThemeContext } from "../Services/Theme/Theme.Context";
import { UsersContext } from "../Services/Users/Users.Context";

const NavBar = ({ onChangeState, filterProductsByName }) => {
  const [productName, setProductName] = useState("");
  const { user_type } = useContext(UsersContext);
  const productNameHandler = (e) => {
    setProductName(e.target.value);
    filterProductsByName(e.target.value);
    console.log(productName);
  };

  const showHandler = () => {
    const newState = (prevShowSidebar) => !prevShowSidebar;
    onChangeState(newState);
  };

  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const goToAddProduct = () => {
    navigate("/addProduct");
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

        <div className="logo">
          <FontAwesomeIcon icon={faRaspberryPi} size="xl" /> MULBERRY
        </div>

        <form className="d-flex form-inline">
          {(user_type === "superadmin" || user_type === "admin") && <button
            className="bg-white-500 hover:bg-white-400 text-green font-bold m-1"
            type="button"
            onClick={goToAddProduct}
          >
            <FontAwesomeIcon
              icon={faSquarePlus}
              size="2xl"
              style={{ color: "#05f901" }}
            />
          </button>}
          <div className="searchDiv">
            <div className="pr-5 pt-1">
              <ToggleTheme />
            </div>
            <div className="glassDiv">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
            </div>
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="¿Qué producto buscas?"
              aria-label="Search"
              onChange={productNameHandler}
            />
          </div>
        </form>
      </nav>
    </>
  );
};
export default NavBar;
