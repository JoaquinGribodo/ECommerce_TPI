import React, { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./Components/DashBoard/DashBoard";
import LogIn from "./Components/LogIn/LogIn";
import SignUp from "./Components/SignUp/SignUp";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import ContactUs from "./Components/ContactUs/ContactUs";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import AddProduct from "./Components/AddProduct/AddProduct";
import ModifyProduct from "./Components/ModifyProduct/ModifyProduct";
import DeleteProduct from "./Components/DeleteProduct/DeleteProduct";
import { ThemeContext } from "./Components/Services/Theme/Theme.Context";
import { APIContext } from "./Components/Services/API/Api.Context";
import Spinner from "./Components/UI/Spinner/Spinner.js";

const App = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   const currentMode = localStorage.getItem("darkMode");
  //   if (currentMode === "true") {
  //     setIsDarkMode(true);
  //   }
  // }, []);

  // const toggleDarkMode = () => {
  //   const newMode = !isDarkMode;
  //   setIsDarkMode(newMode);
  //   localStorage.setItem("darkMode", newMode.toString());
  // };

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.body.classList.add("dark-mode");
  //   } else {
  //     document.body.classList.remove("dark-mode");
  //   }
  // }, [isDarkMode]);

  const { theme } = useContext(ThemeContext);
  const { isLoading } = useContext(APIContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard />,
    },
    {
      path: "/home",
      element: <DashBoard />,
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
    {
      path: "/shoppingcart",
      element: <ShoppingCart />,
    },
    {
      path: "/home/contact",
      element: <ContactUs />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/whoweare",
      element: <WhoWeAre />,
    },
    {
      path: "/addProduct",
      element: <AddProduct />,
    },
    {
      path: "/modifyProduct",
      element: <ModifyProduct />,
    },
    {
      path: "/deleteProduct",
      element: <DeleteProduct />,
    },
  ]);

  return (
    <>
      <div
        className={`${theme === "dark" && "dark-theme"} ${
          isLoading && "opacity-80"
        }`}
      >
        {isLoading && <Spinner />}
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;

/* <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
        <nav>
          <div className="switch-container">
            <label className="switch">
              <input
                type="checkbox"
                defaultChecked={isDarkMode}
                onChange={toggleDarkMode}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </nav>
      </div> */
