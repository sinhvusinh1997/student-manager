import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { ThemeContext } from '../../contexts/ThemeContext';

const IndexAuth = () => {

  const { isAuth, changeAuth } = useContext(AuthContext);
  const { isLight, theme } = useContext(ThemeContext);

  const shadowStyle = isLight ? theme.shadow.light : theme.shadow.dark;
  const bgStyle = isLight ? theme.bg.light : theme.bg.dark;

  return (
    <div className="wrapper-auth" style={bgStyle}>
      <div className="user">{isAuth ? `Siinh` : `- - -`}</div>
      <button onClick={changeAuth}
        style={shadowStyle}>{isAuth ? `Logout` : `Login`}</button>
    </div>
  )
};

export default IndexAuth;