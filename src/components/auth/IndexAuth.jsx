import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { ThemeContext } from '../../contexts/ThemeContext';

const IndexAuth = () => {

  const { isAuth, changeAuth } = useContext(AuthContext);
  const { isLight, theme } = useContext(ThemeContext);

  return (
    <div className="wrapper-auth" style={isLight ? theme.bg.light : theme.bg.dark}>
      <div className="user">{isAuth ? `Sinh Vũ` : `Pls, Login!`}</div>
      <button onClick={changeAuth}
        style={isLight ? theme.shadow.light : theme.shadow.dark}>{isAuth ? `Logout` : `Login`}</button>
    </div>
  )
};

export default IndexAuth;