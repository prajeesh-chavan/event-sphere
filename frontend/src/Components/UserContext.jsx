import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create the context
export const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");

  const signOut = () => {
    localStorage.removeItem("token");
    useNavigate("/");
    window.location.reload();
  };

  const signIn = (token) => {
    localStorage = token;
    useNavigate("/");
    window.location.reload();
  };

  return (
    <UserContext.Provider value={{ isAuthenticated, signOut, signIn}}>
      {children}
    </UserContext.Provider>
  );
};
