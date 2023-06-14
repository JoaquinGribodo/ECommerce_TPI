import React from "react";
import { Navigate } from "react-router";

const Protected = ({ userType, children }) => {
  if (userType !== "superadmin" && userType !== "admin") {
    return <Navigate to="/home" replace />;
  } else {
    return children;
  }
};

export default Protected;
