import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { HandleContext } from '../../contexts/HandleContext';

const URLPicDefault = 'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png'

const ViewStudent = ({ id, handleToggleAdd }) => {
  const { isLight, theme } = useContext(ThemeContext);
  const { titles, setTitles, handleChangeTitle, handleSubmit } = useContext(HandleContext);

  const inputStyle = isLight ? theme.inputField.light : theme.inputField.dark;
  const bgStyle = isLight ? theme.bg.light : theme.bg.dark;

  const handleClose = () => {
    setTitles.map(setTitle => setTitle(''))
    handleToggleAdd()
  };

  return (
    <div id={id} className="popup-container">
      <div className="main" style={bgStyle}>
        <div className="left" id="avatar">
          <div className="img" >
            <img src={titles[7] === '' ? URLPicDefault : titles[7]} alt="" />
          </div>
          <input type="text" className="btn"
            style={inputStyle}
            value={titles[7]}
            placeholder="Copy URL picture!"
            onChange={handleChangeTitle}
          />
          <div style={{ fontSize: '12px' }}>Paste URL image above!</div>
        </div>

        <div className="right">
          <div className="inputs" id={`name`} >
            <label htmlFor="name">Name:</label>
            <input type="text" autoComplete="off"
              style={inputStyle}
              value={titles[0]}
              onChange={handleChangeTitle} />
          </div>

          <div className="inputs" id={`studentID`} >
            <label htmlFor="studentID">Student ID:</label>
            <input type="text" autoComplete="off"
              style={inputStyle}
              value={titles[1]}
              onChange={handleChangeTitle} />
          </div>

          <div className="inputs" id={`classID`}>
            <label htmlFor="classID">Class ID:</label>
            <input type="text" autoComplete="off"
              style={inputStyle}
              value={titles[2]}
              onChange={handleChangeTitle} />
          </div>

          <div className="inputs" id={`gender`} >
            <label htmlFor="gender">Gender:</label>
            <select value={titles[3]}
              style={inputStyle}
              onChange={handleChangeTitle} >
              <option value="" style={bgStyle}>--</option>
              <option value="Male" style={bgStyle}>Male</option>
              <option value="Female" style={bgStyle}>Female</option>
              <option value="Other" style={bgStyle}>Other</option>
            </select>
          </div>

          <div className="inputs" id={`dayOfBirth`} >
            <label htmlFor="dayOfBirth">BirthDay:</label>
            <input type="date"
              value={titles[4]}
              style={inputStyle}
              onChange={handleChangeTitle} />
          </div>

          <div className="inputs" id={`phoneNumber`} >
            <label htmlFor="phoneNumber">Phone:</label>
            <input type="text" autoComplete="off"
              style={inputStyle}
              value={titles[5]}
              onChange={handleChangeTitle} />
          </div>

          <div className="inputs" id={`email`} >
            <label htmlFor="email">Email:</label>
            <input type="text" autoComplete="off"
              style={inputStyle}
              value={titles[6]}
              onChange={handleChangeTitle} />
          </div>


          <div className="btn-ctrl">
            <button className="save" onClick={handleSubmit}>Add</button>
            <button className="close" onClick={handleClose}>close</button>
          </div>

        </div>
      </div>
      <div className="overlay" onClick={handleClose}></div>
    </div>
  )
};

export default ViewStudent;