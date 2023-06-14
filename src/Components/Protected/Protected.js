import React, { useContext } from "react";
import { Navigate } from "react-router";
import { UsersContext } from "../Services/Users/Users.Context";

const Protected = ({ children }) => {
  const { userType } = useContext(UsersContext);
  console.log(userType);
  if (userType !== "superadmin" && userType !== "admin") {
    console.log(userType);
    return <Navigate to="/home" replace />;
  } else {
    console.log(userType);
    return children;
  }
};

export default Protected;
