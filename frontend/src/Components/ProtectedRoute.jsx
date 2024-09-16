import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole }) => {
  const userRole = localStorage.getItem("userRole");

  // Check if the user is logged in
  const isAuthenticated = Boolean(userRole);

  // If the user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If the user's role does not match the required role, redirect to unauthorized
  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  // If everything is fine, render the children
  return children;
};

export default ProtectedRoute;
