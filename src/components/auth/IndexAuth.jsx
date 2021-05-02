import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

const IndexAuth = () => {

  const { isAuth, changeAuth } = useContext(AuthContext);

  return (
    <div className="wrapper-auth">
      <div className="user">{isAuth ? `Sinh Vũ` : `Pls, Login!`}</div>
      <button onClick={changeAuth}>{isAuth ? `Logout` : `Login`}</button>
    </div>
  )
};

export default IndexAuth;