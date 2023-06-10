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
import AddProduct from "./Components/AddProduct/AddProduct";
import ModifyProduct from "./Components/ModifyProduct/ModifyProduct";
import { ThemeContext } from "./Components/Services/Theme/Theme.Context";
import { APIContext } from "./Components/Services/API/Api.Context";
import Spinner from "./Components/UI/Spinner/Spinner.js";

const App = () => {
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
