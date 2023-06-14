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
import AddUser from "./Components/AddUser/AddUser";
import DeleteUser from "./Components/DeleteUser/DeleteUser";
import ModifyUser from "./Components/ModifyUser/ModifyUser";
import Orders from "./Components/Orders/Orders";
import AddOrder from "./Components/AddOrder/AddOrder";
import DeleteOrder from "./Components/DeleteOrder/DeleteOrder";
import ModifyOrder from "./Components/ModifyOrder/ModifyOrder";
import Protected from "./Components/Protected/Protected";

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
    {
      path: "/addUser",
      element: <AddUser />,
    },
    {
      path: "/modifyUser",
      element: <ModifyUser />,
    },
    {
      path: "/deleteUser",
      element: <DeleteUser />,
    },
    {
      path: "/orders",
      element: <Orders />,
    },
    {
      path: "/addOrder",
      element: (
        <Protected>
          <AddOrder />
        </Protected>
      ),
    },
    {
      path: "/modifyOrder",
      element: (
        <Protected>
          <ModifyOrder />
        </Protected>
      ),
    },
    {
      path: "/deleteOrder",
      element: (
        <Protected>
          <DeleteOrder />
        </Protected>
      ),
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
