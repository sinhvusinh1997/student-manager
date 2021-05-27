import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { HandleContext } from '../../contexts/HandleContext';

import Delete from '../display/Delete';


const Footer = () => {

  const { isAuth } = useContext(AuthContext);
  const { isLight, theme } = useContext(ThemeContext);
  const shadowStyle = isLight ? theme.shadow.light : theme.shadow.dark;
  const disable = isLight ? theme.disabledStyle.light : theme.disabledStyle.dark;


  const { pagination, handlePageChange, totalsDeleteIDs, isDelete, togglePopDel } = useContext(HandleContext);
  const { _page, _limit, _totalRows } = pagination;
  const totalPage = Math.ceil(_totalRows / _limit);
  const disabledPrev = _page <= 1 ? disable : shadowStyle;
  const disabledNext = _page >= totalPage ? disable : shadowStyle;


  return (
    <div className="footer">

      <button className="trash" style={isAuth ? null : disable} onClick={() => togglePopDel()}>
        <span className="total">{isAuth ? totalsDeleteIDs.current : `--`}</span>
        <i className="fas fa-trash"></i>
      </button>

      <span className="author">Design &amp; Code by Siinh. </span>

      <div className="pagination">
        <div className="page">
          <span className="current">{isAuth ? `${_page < 10 ? `0${_page}` : _page}` : `--`}</span> /
            <span className="total"> {isAuth ? `${totalPage < 10 ? `0${totalPage}` : totalPage}` : `--`}</span>
        </div>

        <div className="btn">
          <button className="prev"
            style={isAuth ? disabledPrev : disable}
            onClick={() => handlePageChange(_page - 1)}
          >
            <i className="fas fa-long-arrow-alt-left"></i>
          </button>
          <button className="next"
            style={isAuth ? disabledNext : disable}
            onClick={() => handlePageChange(_page + 1)}>
            <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>

      {isDelete ? <Delete /> : null}

    </div >
  )
};

export default Footer;