import React, { useState, useRef, useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { ThemeContext } from '../../contexts/ThemeContext';

const InputSearch = ({ label }) => {

  const [title, setTitle] = useState('');
  const timeOutSearch = useRef(null);

  const handleChangeTitle = e => {
    const value = e.target.value;
    setTitle(value);

    if (timeOutSearch.current) clearTimeout(timeOutSearch.current);
    timeOutSearch.current = setTimeout(() => {
      // handleSubmit(value)
      console.log(value)
    }, 500);
  };

  const { isAuth } = useContext(AuthContext);

  const { isLight, theme } = useContext(ThemeContext);
  const styleInput = isLight ? theme.inputField.light : theme.inputField.dark;


  return (
    <input
      style={isAuth ? styleInput : theme.disabledStyle}
      type="text"
      name={`SearchBy-${label}`}
      id={`SearchBy-${label}`}
      placeholder={`Find by ${label}`}
      autoComplete="off"
      value={title}
      onChange={handleChangeTitle}
    />
  )
};

export default InputSearch;