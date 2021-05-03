import React, { useContext } from 'react';

import InputSearch from './InputSearch';
import ViewInfo from '../popup/ViewInfo';


import { ViewContext } from '../../contexts/ViewContext';
import { AuthContext } from '../../contexts/AuthContext';
import { ThemeContext } from '../../contexts/ThemeContext';


const IndexController = () => {

  const { isToggleView, toggleView } = useContext(ViewContext);
  const { isAuth } = useContext(AuthContext);
  const { isLight, theme, toggleTheme } = useContext(ThemeContext);

  const shadowStyle = isLight ? theme.shadow.light : theme.shadow.dark;


  return (
    <div className="wrapper-controller"
      style={isLight ? theme.bg.light : theme.bg.dark}>

      <InputSearch label={`Name`} />
      <InputSearch label={`ID`} />

      <button onClick={toggleView} style={isAuth ? shadowStyle : theme.disabledStyle}>
        <i className="fas fa-plus"></i>
      </button>

      <button onClick={toggleTheme} style={isLight ? theme.shadow.light : theme.shadow.dark}>
        {isLight ? (
          <i className="fas fa-moon"></i>) :
          (<i className="fas fa-sun"></i>)}


      </button>

      {isToggleView ? <ViewInfo id={`add-student`} /> : null}
    </div>
  )
};

export default IndexController;