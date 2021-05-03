import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

const TitleContainer = () => {

  const { isLight, theme } = useContext(ThemeContext);

  return (
    <ul className="title-container" style={isLight ? theme.borderBot.light : theme.borderBot.dark}>
      <li className="title check">
        <input type="checkbox" name="" />
      </li>
      <li className="title studentID">Student ID</li>
      <li className="title name">Name</li>
      <li className="title gender">Gender</li>
      <li className="title phoneNumber">Phone Number</li>
    </ul>
  )
};

export default TitleContainer;