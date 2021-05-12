import React, { useContext, useState } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { HandleContext } from '../../contexts/HandleContext';

import ViewStudent from '../popup/ViewStudent';

const StudentList = ({ student }) => {

  const { isLight, theme } = useContext(ThemeContext);

  const [isToggleView, setToggleView] = useState(false);
  const { getViewStudent, setTitles } = useContext(HandleContext);
  const handleToggleView = e => {
    getViewStudent(e.target.parentNode.parentNode.id);
    setToggleView(!isToggleView);
  };
  const closeView = () => {
    setTitles.map(setTitle => setTitle(''));
    setToggleView(!isToggleView);
  };

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
        onClick={handleToggleView}
      >
        <i className="fas fa-eye"></i>
      </button>

      {isToggleView ? <ViewStudent
        id={student.id}
        closeView={closeView}
      /> : null}

    </div>
  )
};

export default StudentList;