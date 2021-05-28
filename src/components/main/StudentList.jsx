import React, { Fragment, useContext, useState } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { HandleContext } from '../../contexts/HandleContext';

import ViewStudent from '../popup/ViewStudent';

const StudentList = ({ student }) => {

  const { isLight, theme } = useContext(ThemeContext);
  const { getViewStudent, titles, setTitles, sendDeleteIDs, setSucess, setError } = useContext(HandleContext);

  const [isToggleView, setToggleView] = useState(false);

  const borderBotStyle = isLight ? theme.borderBot.light : theme.borderBot.dark;
  const shadowStyle = isLight ? theme.shadow.light : theme.shadow.dark;


  const handleToggleView = e => {
    getViewStudent(e.target.parentNode.parentNode.id);
    setToggleView(!isToggleView);
  };

  const closeView = () => {
    setTitles.map(setTitle => setTitle(''));
    setError(false);
    setSucess(false);
    setToggleView(!isToggleView);
  };

  const countDelete = e => {
    const id = e.target.parentNode.parentNode.id;
    sendDeleteIDs(id);
  };

  return (
    <Fragment>
      <div className="student-list" id={student.id}
        style={student.isSelect ? theme.selected : borderBotStyle}
      >

        <ul className="student-info"
          onClick={e => countDelete(e)}
        >
          <li className="item checkbox">
            <input type="checkbox" checked={student.isSelect} />
          </li>
          <li className="item studentID">{student.studentID}</li>
          <li className="item name">{student.name}</li>
          <li className="item gender">{student.gender}</li>
          <li className="item class">{student.classID}</li>
          <li className="item phoneNumber">{student.phoneNumber}</li>
        </ul>

        <button className="student-view"
          style={shadowStyle}
          onClick={handleToggleView}>
          <i className="fas fa-eye"></i>
        </button>
      </div>

      {isToggleView ? <ViewStudent
        id={student.id}
        closeView={closeView}
        titles={titles} /> : null}

    </Fragment>
  )
};

export default StudentList;