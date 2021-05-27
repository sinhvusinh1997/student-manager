import React, { useState, useRef, useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { HandleContext } from '../../contexts/HandleContext';

const InputSearch = ({ label }) => {

  const { searchName, searchID, searchClassID } = useContext(HandleContext);
  const { isLight, theme } = useContext(ThemeContext);
  const { isAuth } = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const timeOutSearch = useRef(null);

  const inputStyle = isLight ? theme.inputField.light : theme.inputField.dark;
  const disable = isLight ? theme.disabledStyle.light : theme.disabledStyle.dark;


  const handleChangeTitle = e => {
    const value = e.target.value;
    setTitle(value);

    if (timeOutSearch.current) clearTimeout(timeOutSearch.current);

    timeOutSearch.current = setTimeout(() => {
      switch (label) {
        case 'name':
          searchName(value);
          break;
        case 'studentID':
          searchID(value);
          break;
        case 'classID':
          searchClassID(value);
          break;
        default:
          break;
      }
    }, 500);
  };

  return (
    <input
      style={isAuth ? inputStyle : disable}
      type='text'
      name={`SearchBy-${label}`}
      id={`SearchBy-${label}`}
      placeholder={`Find: ${label}`}
      autoComplete="off"
      value={title}
      onChange={handleChangeTitle}
    />
  )
};

export default InputSearch;