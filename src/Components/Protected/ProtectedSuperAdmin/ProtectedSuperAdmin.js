import React from "react";
import { Navigate } from "react-router";

const ProtectedSuperAdmin = ({ userType, children }) => {
  if (userType !== "superadmin") {
    return <Navigate to="/home" replace />;
  } else {
    return children;
  }
};

export default ProtectedSuperAdmin;
