import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);

  const { pathname, search } = useLocation();

  localStorage.setItem("lastPath", pathname + search);

  return user.logged ? children : <Navigate to="login" />;
};

export default PrivateRoutes;
