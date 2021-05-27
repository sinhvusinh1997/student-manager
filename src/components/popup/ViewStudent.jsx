import React, { useContext } from 'react';

import Notify from '../display/Notify';
import InputText from './InputText';

import { ThemeContext } from '../../contexts/ThemeContext';
import { HandleContext } from '../../contexts/HandleContext';

const ViewStudent = ({ id, closeView, titles }) => {
  const { isLight, theme } = useContext(ThemeContext);
  const { handleChangeTitle, handleUpdate, isPatch, setPatch, isError,
    setEdit, isEdit } = useContext(HandleContext);


  const inputStyle = isLight ? theme.inputField.light : theme.inputField.dark;
  const bgStyle = isLight ? theme.bg.light : theme.bg.dark;
  const disable = isLight ? theme.disabledStyle.light : theme.disabledStyle.dark;
  const focusStyle = isEdit ? inputStyle : disable;

  const updateStudent = e => {
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
            style={focusStyle}
            value={titles[7]}
            placeholder="Copy URL picture!"
            onChange={handleChangeTitle} />

          {isPatch ? <Notify type={`success`} content={`Update Success 🎉`} /> : null}
          {isError ? <Notify type={`error`} content={`Fail to update `} /> : null}
        </div>

        <div className="right">

          <InputText type={`text`} id={`name`} label={`Name`} titles={titles[0]}
            styles={focusStyle}
            handleChangeTitle={handleChangeTitle} />

          <InputText type={`text`} id={`studentID`} label={`Student ID`} titles={titles[1]}
            styles={focusStyle}
            handleChangeTitle={handleChangeTitle} />

          <InputText type={`text`} id={`classID`} label={`Class ID`} titles={titles[2]}
            styles={focusStyle}
            handleChangeTitle={handleChangeTitle} />

          <InputText id={`gender`} label={`Gender`} titles={titles[3]}
            styles={focusStyle}
            styleSelect={bgStyle}
            handleChangeTitle={handleChangeTitle} />

          <InputText type={`date`} id={`dayOfBirth`} label={`BirthDay`} titles={titles[4]}
            styles={focusStyle}
            handleChangeTitle={handleChangeTitle} />

          <InputText type={`text`} id={`phoneNumber`} label={`Phone`} titles={titles[5]}
            styles={focusStyle}
            handleChangeTitle={handleChangeTitle} />

          <InputText type={`text`} id={`email`} label={`Email`} titles={titles[6]}
            styles={focusStyle}
            handleChangeTitle={handleChangeTitle} />

          <div className="btn-ctrl">
            <button className="save"
              style={isEdit ? null : disable}
              onClick={e => updateStudent(e)}>save</button>

            <button className="edit"
              onClick={() => setEdit(!isEdit)}>Edit</button>

            <button className="close"
              onClick={() => { closeView(); setPatch(false) }}>close</button>
          </div>
        </div>
      </div>

      <div className="overlay"
        onClick={() => { closeView(); setPatch(false) }}></div>
    </div>
  )
};

export default ViewStudent;