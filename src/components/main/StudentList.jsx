import React, { useContext } from 'react';

import { ViewContext } from '../../contexts/ViewContext';


const StudentList = ({ student }) => {

  const { toggleView } = useContext(ViewContext);

  return (
    <div className="student-list" id={student.id}>
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
        onClick={toggleView}>
        <i className="fas fa-eye"></i>
      </button>
    </div>
  )
};

export default StudentList;