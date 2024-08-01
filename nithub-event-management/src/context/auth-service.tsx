import { ReactNode, createContext, useContext, useState } from "react";
import { ValueProp } from "./types/auth-service-types";

const AuthContext = createContext({} as ValueProp);

const AuthService = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<{role: "admin" | "client"}>({ role: "admin" });

  return (
    <AuthContext.Provider value={{ userData }}>{children}</AuthContext.Provider>
  );
};

export default AuthService

export const useAuth = () => {
  return useContext(AuthContext);
};
