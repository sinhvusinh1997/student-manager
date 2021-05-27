import React, { useContext } from 'react';

import Notify from '../display/Notify';
import InputText from './InputText';

import { ThemeContext } from '../../contexts/ThemeContext';
import { HandleContext } from '../../contexts/HandleContext';

const URLPicDefault = 'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png'

const ViewStudent = ({ id, handleToggleAdd }) => {
  const { isLight, theme } = useContext(ThemeContext);
  const { titles, setTitles, handleChangeTitle, handleSubmit, isSuccess, setSucess, isError, setError } = useContext(HandleContext);

  const inputStyle = isLight ? theme.inputField.light : theme.inputField.dark;
  const bgStyle = isLight ? theme.bg.light : theme.bg.dark;

  const handleClose = () => {
    setTitles.map(setTitle => setTitle(''))
    handleToggleAdd();
    setSucess(false);
    setError(false);
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
          {isSuccess ? <Notify type={`success`} content={`Add Success 🎉`} /> : null}
          {isError ? <Notify type={`error`} content={`Need fill all 😩`} /> : null}

        </div>

        <div className="right">

          <InputText type={`text`} id={`name`} label={`Name`} titles={titles[0]}
            styles={inputStyle}
            handleChangeTitle={handleChangeTitle} />

          <InputText type={`text`} id={`studentID`} label={`Student ID`} titles={titles[1]}
            styles={inputStyle}
            handleChangeTitle={handleChangeTitle} />

          <InputText type={`text`} id={`classID`} label={`Class ID`} titles={titles[2]}
            styles={inputStyle}
            handleChangeTitle={handleChangeTitle} />

          <InputText id={`gender`} label={`Gender`} titles={titles[3]}
            styles={inputStyle}
            styleSelect={bgStyle}
            handleChangeTitle={handleChangeTitle} />

          <InputText type={`date`} id={`dayOfBirth`} label={`BirthDay`} titles={titles[4]}
            styles={inputStyle}
            handleChangeTitle={handleChangeTitle} />

          <InputText type={`text`} id={`phoneNumber`} label={`Phone`} titles={titles[5]}
            styles={inputStyle}
            handleChangeTitle={handleChangeTitle} />

          <InputText type={`text`} id={`email`} label={`Email`} titles={titles[6]}
            styles={inputStyle}
            handleChangeTitle={handleChangeTitle} />

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