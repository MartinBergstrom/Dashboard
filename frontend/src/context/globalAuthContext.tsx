import { createContext, useContext } from "react";

export type GlobalAuthContextType = {
    auth: string;
    setAuth: (auth: string) => void;
  };
  
  export const AuthContext = createContext<GlobalAuthContextType>(({
    auth: "",
    setAuth: () => {}
  }));
  
  export const useAuthContext = () => useContext(AuthContext);