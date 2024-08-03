import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth-service";

export const PrivateRoutes = () => {
    const {isAuthenticated} = useContext(AuthContext)

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
