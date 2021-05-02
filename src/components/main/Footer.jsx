import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

const Footer = () => {

  const { isAuth, disabledStyle } = useContext(AuthContext);

  return (
    <div className="footer">

      <button className="trash" style={isAuth ? null : disabledStyle}>
        <span className="total">--</span>
        <i className="fas fa-trash"></i>
      </button>

      <span className="author">Design &amp; Code by Siinh. </span>

      <div className="pagination">
        <div className="page">
          <span className="current">--</span> /
          <span className="total">--</span>
        </div>

        <div className="btn" style={isAuth ? null : disabledStyle}>
          <button className="prev">
            <i className="fas fa-long-arrow-alt-left"></i>
          </button>
          <button className="next">
            <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
};

export default Footer;