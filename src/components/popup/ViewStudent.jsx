import React, { useContext, useState } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { HandleContext } from '../../contexts/HandleContext';


const ViewStudent = ({ id, closeView }) => {
  const { isLight, theme } = useContext(ThemeContext);
  const inputStyle = isLight ? theme.inputField.light : theme.inputField.dark;
  const bgStyle = isLight ? theme.bg.light : theme.bg.dark;
  const disable = isLight ? theme.disabledStyle.light : theme.disabledStyle.dark;

  const { titles, handleChangeTitle, handleUpdate } = useContext(HandleContext);
  const [isEdit, setEdit] = useState(false);

  const updateStudent = e => {
    setEdit(!isEdit);
    const id = e.target.parentNode.parentNode.parentNode.parentNode.id;
    handleUpdate(id);
  };

  return (
    <div id={id} className="popup-container">
      <div className="main" style={bgStyle}>
        <div className="left" id="avatar">
          <div className="img">
            <img src={titles[7]} alt="" />
          </div>
          <input type="text" className="btn"
            style={isEdit ? inputStyle : disable}
            value={titles[7]}
            placeholder="Copy URL picture!"
            onChange={e => handleChangeTitle(e)} />

        </div>

        <div className="right">
          <div className="inputs" id={`name`} >
            <label htmlFor="name">Name:</label>
            <input type="text" autoComplete="off"
              style={isEdit ? inputStyle : disable}
              value={titles[0]}
              onChange={e => handleChangeTitle(e)} />
          </div>

          <div className="inputs" id={`studentID`} >
            <label htmlFor="studentID">Student ID:</label>
            <input type="text" autoComplete="off"
              style={isEdit ? inputStyle : disable}
              value={titles[1]}
              onChange={e => handleChangeTitle(e)} />
          </div>

          <div className="inputs" id={`classID`}>
            <label htmlFor="classID">Class ID:</label>
            <input type="text" autoComplete="off"
              style={isEdit ? inputStyle : disable}
              value={titles[2]}
              onChange={e => handleChangeTitle(e)} />
          </div>

          <div className="inputs" id={`gender`} >
            <label htmlFor="gender">Gender:</label>
            <select value={titles[3]}
              style={isEdit ? inputStyle : disable}
              onChange={e => handleChangeTitle(e)}>
              <option value={titles[3]}
                style={bgStyle}>{titles[3]}</option>
              <option value="male" style={bgStyle}>Male</option>
              <option value="female" style={bgStyle}>Female</option>
              <option value="female" style={bgStyle}>Other</option>
            </select>
          </div>

          <div className="inputs" id={`dayOfBirth`} >
            <label htmlFor="dayOfBirth">BirthDay:</label>
            <input type="date"
              value={titles[4]}
              style={isEdit ? inputStyle : disable}
              onChange={e => handleChangeTitle(e)} />
          </div>

          <div className="inputs" id={`phoneNumber`} >
            <label htmlFor="phoneNumber">Phone:</label>
            <input type="text" autoComplete="off"
              style={isEdit ? inputStyle : disable}
              value={titles[5]}
              onChange={e => handleChangeTitle(e)} />
          </div>

          <div className="inputs" id={`email`} >
            <label htmlFor="email">Email:</label>
            <input type="text" autoComplete="off"
              style={isEdit ? inputStyle : disable}
              value={titles[6]}
              onChange={e => handleChangeTitle(e)} />
          </div>

          <div className="btn-ctrl">
            <button className="save"
              style={isEdit ? null : disable}
              onClick={(e) => updateStudent(e)}>save</button>
            <button className="edit" onClick={() => setEdit(!isEdit)}>Edit</button>
            <button className="close" onClick={closeView}>close</button>
          </div>

        </div>
      </div>

      <div className="overlay" onClick={closeView}></div>
    </div>
  )
};

export default ViewStudent;