import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user.logged ? children : <Navigate to="login" />;
};

export default PrivateRoutes;
