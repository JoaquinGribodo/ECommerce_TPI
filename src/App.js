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
import ModifyOrder from "./Components/ModifyOrder/ModifyOrder";
import Protected from "./Components/Protected/Protected";
import { UsersContext } from "./Components/Services/Users/Users.Context";
import ProtectedSuperAdmin from "./Components/Protected/ProtectedSuperAdmin/ProtectedSuperAdmin";

const App = () => {
  const { theme } = useContext(ThemeContext);
  const { isLoading } = useContext(APIContext);
  const { userType, loading } = useContext(UsersContext);

  if (loading) {
    return <Spinner />;
  }

  const router = createBrowserRouter([
    { path: "/", element: <DashBoard /> },
    { path: "/home", element: <DashBoard /> },
    { path: "/login", element: <LogIn /> },
    { path: "/signup", element: <SignUp /> },
    { path: "*", element: <PageNotFound /> },
    { path: "/shoppingcart", element: <ShoppingCart /> },
    { path: "/home/contact", element: <ContactUs /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/whoweare", element: <WhoWeAre /> },
    {
      path: "/addProduct",
      element: (
        <Protected userType={userType}>
          <AddProduct />
        </Protected>
      ),
    },
    {
      path: "/modifyProduct",
      element: (
        <Protected userType={userType}>
          <ModifyProduct />
        </Protected>
      ),
    },
    {
      path: "/addUser",
      element: (
        <ProtectedSuperAdmin userType={userType}>
          <AddUser />
        </ProtectedSuperAdmin>
      ),
    },
    {
      path: "/modifyUser",
      element: (
        <ProtectedSuperAdmin userType={userType}>
          <ModifyUser />
        </ProtectedSuperAdmin>
      ),
    },
    {
      path: "/deleteUser",
      element: (
        <ProtectedSuperAdmin userType={userType}>
          <DeleteUser />
        </ProtectedSuperAdmin>
      ),
    },
    { path: "/orders", element: <Orders /> },
    {
      path: "/addOrder",
      element: (
        <Protected userType={userType}>
          <AddOrder />
        </Protected>
      ),
    },
    {
      path: "/modifyOrder",
      element: (
        <Protected userType={userType}>
          <ModifyOrder />
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
