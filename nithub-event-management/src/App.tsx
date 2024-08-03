import { Suspense, useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import { getDataInCookie } from "./data-helpers/auth-session-helper";
import AuthService, { AuthContext } from "./context/auth-service";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { PrivateRoutes } from "./utils/protectedRoute";
import { Login } from "./pages/auth/login";

AOS.init();

function App() {
  const [count, setCount] = useState(0);

  const isLoggedIn = getDataInCookie("user_token") ? true : false;
  const { userData, isAuthenticated } = useContext(AuthContext);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   !isAuthenticated && navigate("/login");
  // }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <AuthService>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            // Redirect the root URL to the desired landing page
            <Route
              element={
               <PrivateRoutes/>
              }
            >
              {routes.map((route, idx) => (
                <Route path={route.path} element={route.element} key={idx} />
              ))}
            </Route>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </Suspense>
      </AuthService>
    </BrowserRouter>
  );
}

export default App;
