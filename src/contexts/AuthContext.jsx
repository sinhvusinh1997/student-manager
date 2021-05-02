import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);

  const changeAuth = () => setAuth(!isAuth);

  const disabledStyle = {
    opacity: '0.4',
    pointerEvents: 'none',
  }

  const authContextData = {
    isAuth,
    changeAuth,
    disabledStyle,
  }

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;