import React from "react";
import { Navigate } from "react-router";

const Protected = ({ userType, children }) => {
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
