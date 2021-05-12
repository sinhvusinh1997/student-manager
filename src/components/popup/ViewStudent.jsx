import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { HandleContext } from '../../contexts/HandleContext';


const ViewStudent = ({ id, closeView }) => {
  const { isLight, theme } = useContext(ThemeContext);
  const { titles } = useContext(HandleContext);

  return (
    <div id={id} className="popup-container">
      <div className="main" style={isLight ? theme.bg.light : theme.bg.dark}>
        <div className="right">
          <div className="img">
            <img src={titles[6]} alt="image" />
          </div>
          <div className="btn">update image</div>
        </div>

        <div className="left">

          <div className="inputs" id={`name`} >
            <label htmlFor="name">Name:</label>
            <input type="text" autoComplete="off"
              style={isLight ? theme.inputField.light : theme.inputField.dark}
              defaultValue={titles[0]}
            />
          </div>

          <div className="inputs" id={`studentID`} >
            <label htmlFor="studentID">Student ID:</label>
            <input type="text" autoComplete="off"
              style={isLight ? theme.inputField.light : theme.inputField.dark}
              defaultValue={titles[1]}
            />
          </div>

          <div className="inputs" id={`gender`} >
            <label htmlFor="gender">Gender:</label>
            {/* <select value={viewStudentData.current.gender}
              style={isLight ? theme.inputField.light : theme.inputField.dark}
            >
              <option value="" style={{ background: 'black' }}>--</option>
              <option value="male" style={{ background: 'black' }}>Male</option>
              <option value="female" style={{ background: 'black' }}>Female</option>
              <option value="female" style={{ background: 'black' }}>Other</option>
            </select> */}
            <input type="text" autoComplete="off"
              style={isLight ? theme.inputField.light : theme.inputField.dark}
              defaultValue={titles[2]}
            />
          </div>

          <div className="inputs" id={`dayOfBirth`} >
            <label htmlFor="dayOfBirth">BirthDay:</label>
            <input type="text"
              style={isLight ? theme.inputField.light : theme.inputField.dark}
              defaultValue={titles[3]}
            />
          </div>

          <div className="inputs" id={`phoneNumber`} >
            <label htmlFor="phoneNumber">Phone:</label>
            <input type="text" autoComplete="off"
              style={isLight ? theme.inputField.light : theme.inputField.dark}
              defaultValue={titles[4]}
            />
          </div>

          <div className="inputs" id={`email`} >
            <label htmlFor="email">Email:</label>
            <input type="text" autoComplete="off"
              style={isLight ? theme.inputField.light : theme.inputField.dark}
              defaultValue={titles[5]}
            />
          </div>


          <div className="btn-ctrl">
            <button className="save">Save</button>
            <button className="close" onClick={closeView}>close</button>
          </div>

        </div>
      </div>

      <div className="overlay" onClick={closeView}></div>
    </div>
  )
};

export default ViewStudent;