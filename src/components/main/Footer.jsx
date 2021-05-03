import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { ThemeContext } from '../../contexts/ThemeContext';

const Footer = () => {

  const { isAuth } = useContext(AuthContext);
  const { isLight, theme } = useContext(ThemeContext);

  const shadowStyle = isLight ? theme.shadow.light : theme.shadow.dark;

  return (
    <div className="footer">

      <button className="trash" style={isAuth ? null : theme.disabledStyle}>
        <span className="total">--</span>
        <i className="fas fa-trash"></i>
      </button>

      <span className="author">Design &amp; Code by Siinh. </span>

      <div className="pagination">
        <div className="page">
          <span className="current">--</span> /
          <span className="total">--</span>
        </div>

        <div className="btn">
          <button className="prev"
            style={isAuth ? shadowStyle : theme.disabledStyle}>
            <i className="fas fa-long-arrow-alt-left"></i>
          </button>
          <button className="next"
            style={isAuth ? shadowStyle : theme.disabledStyle}>
            <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>

    </div>
  )
};

export default Footer;