import React, { useContext, useState } from 'react';

import InputSearch from './InputSearch';
import AddStudent from '../popup/AddStudent';


import { AuthContext } from '../../contexts/AuthContext';
import { ThemeContext } from '../../contexts/ThemeContext';


const IndexController = () => {
  const { isAuth } = useContext(AuthContext);
  const { isLight, theme, toggleTheme } = useContext(ThemeContext);

  const shadowStyle = isLight ? theme.shadow.light : theme.shadow.dark;
  const disable = isLight ? theme.disabledStyle.light : theme.disabledStyle.dark;
  const bgStyle = isLight ? theme.bg.light : theme.bg.dark;


  const [isToggleView, setToggleView] = useState(false);
  const handleToggleAdd = () => setToggleView(!isToggleView);


  return (
    <div className="wrapper-controller"
      style={bgStyle}>

      <InputSearch label={`name`} />
      <InputSearch label={`studentID`} />
      <InputSearch label={`classID`} />

      <button onClick={handleToggleAdd} style={isAuth ? shadowStyle : disable}>
        <i className="fas fa-plus"></i>
      </button>

      <button onClick={toggleTheme} style={shadowStyle}>
        {isLight ? (
          <i className="fas fa-moon"></i>) :
          (<i className="fas fa-sun"></i>)}
      </button>

      {isToggleView ? <AddStudent id={`add-student`} handleToggleAdd={handleToggleAdd} /> : null}

    </div>
  )
};

export default IndexController;