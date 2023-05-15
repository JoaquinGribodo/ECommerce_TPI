import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./Components/DashBoard/DashBoard";
import LogIn from "./Components/LogIn/LogIn";
import SignUp from "./Components/SignUp/SignUp";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import ContactUs from "./Components/ContactUs/ContactUs";
import "./App.css";

const App = () => {
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
  ]);

  return <RouterProvider router={router} />;
};

export default App;
