import React, { createContext, ReactNode, useState } from "react";
import { Props } from "./ContextTypes";

export const AuthContext = createContext({});

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [userToken, setUserToken] = useState<string>("");
  const [userLogged, setUserLogged] = useState<boolean>(false);
  const [activityIndicatorState, setActivityIndicatorState] =
    useState<boolean>(false);

  const loginSuccess = (token: string) => {
    setUserToken(token);
    setUserLogged(true);
  };

  return (
    <AuthContext.Provider
      value={{
        userToken,
        userLogged,
        loginSuccess,
        activityIndicatorState,
        setActivityIndicatorState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
