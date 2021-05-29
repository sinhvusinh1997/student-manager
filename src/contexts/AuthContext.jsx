import React, { createContext, useState, useContext } from 'react';

import { HandleContext } from '../contexts/HandleContext';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);

  const { deleteIDsList, handlePageChange } = useContext(HandleContext);

  const changeAuth = () => {
    setAuth(!isAuth);
    deleteIDsList.current = [];
    handlePageChange(1)
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