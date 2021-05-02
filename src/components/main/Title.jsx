import React from 'react';

const TitleContainer = () => {

  return (
    <ul className="title-container">
      <li className="title check">
        <input type="checkbox" name="" />
      </li>
      <li className="title studentID">Student ID</li>
      <li className="title name">Name</li>
      <li className="title gender">Gender</li>
      <li className="title phoneNumber">Phone Number</li>
    </ul>
  )
};

export default TitleContainer;