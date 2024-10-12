import { ReactNode, createContext, useContext, useState } from "react";
import { ValueProp } from "./types/auth-service-types";

export const AuthContext = createContext({} as ValueProp);

const AuthService = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<{ role: "admin" | "client" } | null>(
  {role: "client"}
  );
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const Logout = () => {
    setIsAuthenticated(false);
    setUserData(null);
  };

  const Login = (data: any) => {
    setIsAuthenticated(true);
    setUserData(data);
  };

  return (
    <AuthContext.Provider value={{ userData, Logout, Login, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthService;


