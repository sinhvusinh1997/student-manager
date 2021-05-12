import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { HandleContext } from '../../contexts/HandleContext';

const ViewStudent = ({ id, handleToggleAdd }) => {
  const { isLight, theme } = useContext(ThemeContext);
  const { titles, setTitles, handleChangeTitle, handleSubmit } = useContext(HandleContext);

  const handleClose = () => {
    setTitles.map(setTitle => setTitle(''))
    handleToggleAdd()
  };

  return (
    <div id={id} className="popup-container">
      <div className="main" style={isLight ? theme.bg.light : theme.bg.dark}>
        <div className="right" id="avatar">
          <div className="img" >
            <img src={titles[6] === '' ? 'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png' : titles[6]} alt="image" />
          </div>
          <input type="text" className="btn"
            value={titles[6]}
            placeholder="Copy URL picture!"
            onChange={e => handleChangeTitle(e)}
          />
          <div style={{ fontSize: '12px' }}>(Paste URL image above!)</div>
        </div>

        <div className="left">
          <div className="inputs" id={`name`} >
            <label htmlFor="name">Name:</label>
            <input type="text" autoComplete="off"
              style={isLight ? theme.inputField.light : theme.inputField.dark}
              value={titles[0]}
              onChange={e => handleChangeTitle(e)} />
          </div>

          <div className="inputs" id={`studentID`} >
            <label htmlFor="studentID">Student ID:</label>
            <input type="text" autoComplete="off"
              style={isLight ? theme.inputField.light : theme.inputField.dark}
              value={titles[1]}
              onChange={e => handleChangeTitle(e)} />
          </div>

          <div className="inputs" id={`gender`} >
            <label htmlFor="gender">Gender:</label>
            <select value={titles[2]}
              style={isLight ? theme.inputField.light : theme.inputField.dark}
              onChange={e => handleChangeTitle(e)} >
              <option value="" style={{ background: 'black' }}>--</option>
              <option value="male" style={{ background: 'black' }}>Male</option>
              <option value="female" style={{ background: 'black' }}>Female</option>
              <option value="female" style={{ background: 'black' }}>Other</option>
            </select>

            {/* <div className="gender-checkbox">
              <div className="container">
                <input type="radio" id="male" name="gender" value="male"
                  onChange={e => handleChangeTitle(e)} />
                <label htmlFor="male">Male</label>
              </div>

              <div className="container">
                <input type="radio" id="female" name="gender" value="female"
                  onChange={e => handleChangeTitle(e)} />
                <label htmlFor="female">Female</label>
              </div>

              <div className="container">
                <input type="radio" id="other" name="gender" value="other"
                  onChange={e => handleChangeTitle(e)} />
                <label htmlFor="other">Other</label>
              </div>
            </div> */}
          </div>

          <div className="inputs" id={`dayOfBirth`} >
            <label htmlFor="dayOfBirth">BirthDay:</label>
            <input type="date"
              value={titles[3]}
              style={isLight ? theme.inputField.light : theme.inputField.dark}
              onChange={e => handleChangeTitle(e)} />
            {/* <input type="text" autoComplete="off"
              style={isLight ? theme.inputField.light : theme.inputField.dark}
              value={titles[3]}
              onChange={e => handleChangeTitle(e)} /> */}
          </div>

          <div className="inputs" id={`phoneNumber`} >
            <label htmlFor="phoneNumber">Phone:</label>
            <input type="text" autoComplete="off"
              style={isLight ? theme.inputField.light : theme.inputField.dark}
              value={titles[4]}
              onChange={e => handleChangeTitle(e)} />
          </div>

          <div className="inputs" id={`email`} >
            <label htmlFor="email">Email:</label>
            <input type="text" autoComplete="off"
              style={isLight ? theme.inputField.light : theme.inputField.dark}
              value={titles[5]}
              onChange={e => handleChangeTitle(e)} />
          </div>


          <div className="btn-ctrl">
            <button className="save" onClick={handleSubmit}>Add</button>
            <button className="close" onClick={() => handleClose()}>close</button>
          </div>

        </div>
      </div>
      <div className="overlay" onClick={() => handleClose()}></div>
    </div>
  )
};

export default ViewStudent;