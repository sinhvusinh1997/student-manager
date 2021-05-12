import React, { useContext, useState } from 'react';

import InputSearch from './InputSearch';
import AddStudent from '../popup/AddStudent';


import { AuthContext } from '../../contexts/AuthContext';
import { ThemeContext } from '../../contexts/ThemeContext';


const IndexController = () => {
  const { isAuth } = useContext(AuthContext);
  const { isLight, theme, toggleTheme } = useContext(ThemeContext);

  const shadowStyle = isLight ? theme.shadow.light : theme.shadow.dark;


  const [isToggleView, setToggleView] = useState(false);
  const handleToggleAdd = () => setToggleView(!isToggleView);


  return (
    <div className="wrapper-controller"
      style={isLight ? theme.bg.light : theme.bg.dark}>

      <InputSearch label={`Name`} />
      <InputSearch label={`ID`} />

      <button onClick={handleToggleAdd} style={isAuth ? shadowStyle : theme.disabledStyle}>
        <i className="fas fa-plus"></i>
      </button>

      <button onClick={toggleTheme} style={isLight ? theme.shadow.light : theme.shadow.dark}>
        {isLight ? (
          <i className="fas fa-moon"></i>) :
          (<i className="fas fa-sun"></i>)}


      </button>

      {isToggleView ? <AddStudent id={`add-student`} handleToggleAdd={handleToggleAdd} /> : null}

    </div>
  )
};

export default IndexController;