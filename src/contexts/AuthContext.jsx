import React, { createContext, useState, useContext } from 'react';
import { HandleContext } from './HandleContext';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);

  const { totalsDeleteIDs, deleteIDsList } = useContext(HandleContext);

  const changeAuth = () => {
    totalsDeleteIDs.current = 0;
    deleteIDsList.current = [];
    setAuth(!isAuth)
  };

  const authContextData = {
    isAuth,
    changeAuth,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;