import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

const TitleContainer = () => {

  const { isLight, theme } = useContext(ThemeContext);
  const borderBotStyle = isLight ? theme.borderBot.light : theme.borderBot.dark;

  return (
    <ul className="title-container" style={borderBotStyle}>
      <li className="title checkbox">
        <input type="checkbox" name="" id="" />
      </li>

      <li className="title studentID">Student ID</li>
      <li className="title name">Name</li>
      <li className="title class">Class</li>
      <li className="title gender">Gender</li>
      <li className="title phoneNumber">Phone</li>
    </ul>
  )
};

export default TitleContainer;