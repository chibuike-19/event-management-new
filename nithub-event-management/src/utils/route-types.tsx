import { getDataInCookie } from "../data-helpers/auth-session-helper";
import { Navigate } from "react-router-dom";

//add logic to wait here before loading page

//route accessible by all visitors
const PrivateRoute = (Component: JSX.Element) => {
  const token = getDataInCookie("user_token");

  return token ? Component : <Navigate to="/welcome" replace />;
};

//route accessible by all visitors
const PublicRoute = (Component: JSX.Element) => {
  //user is less concerned with token here
  //   const token = localStorage.getItem("token");

  //   return token ? <Navigate to="/dashboard" replace /> : Component;
  return Component;
};

export { PrivateRoute, PublicRoute };
