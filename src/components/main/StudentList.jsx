import React, { useContext } from 'react';

import { ViewContext } from '../../contexts/ViewContext';
import { ThemeContext } from '../../contexts/ThemeContext';


const StudentList = ({ student }) => {

  const { toggleView } = useContext(ViewContext);
  const { isLight, theme } = useContext(ThemeContext);

  return (
    <div className="student-list" id={student.id}
      style={isLight ? theme.borderBot.light : theme.borderBot.dark}>

      <ul className="student-info">
        <li className="item check">
          <input type="checkbox" name="" />
        </li>
        <li className="item studentID">{student.studentID}</li>
        <li className="item name">{student.name}</li>
        <li className="item gender">{student.gender}</li>
        <li className="item phoneNumber">{student.phoneNumber}</li>
      </ul>

      <button className="student-view"
        style={isLight ? theme.shadow.light : theme.shadow.dark}
        onClick={toggleView}>
        <i className="fas fa-eye"></i>
      </button>
    </div>
  )
};

export default StudentList;