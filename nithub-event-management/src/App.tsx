import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { routes } from './utils/routes'
import { getDataInCookie } from './data-helpers/auth-session-helper'
import AuthService from './context/auth-service'
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  const [count, setCount] = useState(0)

    const isLoggedIn = getDataInCookie("user_token") ? true : false;

  return (
    <BrowserRouter>
      <AuthService>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            // Redirect the root URL to the desired landing page
            <Route
              path="/"
              element={
                <Navigate
                  to={isLoggedIn ? "/agency/dashboard" : "/welcome"}
                  replace
                />
              }
            />
            {routes.map((route, idx) => (
              <Route path={route.path} element={route.element} key={idx} />
            ))}
          </Routes>
        </Suspense>
      </AuthService>
    </BrowserRouter>
  );
}

export default App
