import React from "react";
import { Navigate } from "react-router";

const ProtectedSuperAdmin = ({ userType, children }) => {
  console.log(userType);
  if (userType !== "superadmin") {
    console.log(userType);
    return <Navigate to="/home" replace />;
  } else {
    console.log(userType);
    return children;
  }
};

export default ProtectedSuperAdmin;
