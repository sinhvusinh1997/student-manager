import React, { Fragment, useContext } from 'react';

import { ViewContext } from '../../contexts/ViewContext';

const ViewInfo = ({ id }) => {
  const { toggleView } = useContext(ViewContext);


  return (
    <Fragment>
      <div className="main" id={id}>
        <div className="right">
          <div className="img">
            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="" />
            <div className="img-info">
              <i className="far fa-edit"></i>
            </div>
          </div>
          <div className="btn">update image</div>
        </div>

        <div className="left">
          <Fragment>
            <div className="inputs">
              <label htmlFor="name">Name: </label>
              <input type="text" id={`name-${id}`} autoComplete="off" />
            </div>

            <div className="inputs">
              <label htmlFor="studentID">Student ID: </label>
              <input type="text" id={`studentID-${id}`} autoComplete="off" />
            </div>

            <div className="inputs">
              <label htmlFor="gender">Gender: </label>
              <input type="text" id={`gender-${id}`} autoComplete="off" />
            </div>

            <div className="inputs">
              <label htmlFor="dayOfBirth">BirthDay: </label>
              <input type="text" id={`dayOfBirth-${id}`} autoComplete="off" />
            </div>

            <div className="inputs">
              <label htmlFor="phoneNumber">Phone: </label>
              <input type="text" id={`phoneNumber-${id}`} autoComplete="off" />
            </div>

            <div className="inputs">
              <label htmlFor="email">Email: </label>
              <input type="text" id={`email-${id}`} autoComplete="off" />
            </div>

            <div className="btn-ctrl">
              <button className="save">save</button>
              <button className="close">close</button>
            </div>
          </Fragment>

        </div>
      </div>
      <div className="overlay" onClick={toggleView}></div>
    </Fragment>
  )
};

export default ViewInfo;