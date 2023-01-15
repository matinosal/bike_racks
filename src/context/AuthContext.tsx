import React, { createContext, ReactNode, useState } from "react";
import { AuthToken } from "../types/GlobalTypes";

export const AuthContext = createContext({});

interface Props {
  children: ReactNode;
}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [userToken, setUserToken] = useState<string>("");
  const [userLogged, setUserLogged] = useState<boolean>(false);
  const [activityIndicatorState, setActivityIndicatorState] =
    useState<boolean>(false);

  const loginSuccess = (token: string) => {
    setUserToken(token);
    console.log(token);
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
