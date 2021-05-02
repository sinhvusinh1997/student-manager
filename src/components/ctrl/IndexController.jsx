import React, { useContext } from 'react';

import InputSearch from './InputSearch';
import ViewInfo from '../popup/ViewInfo';


import { ViewContext } from '../../contexts/ViewContext';
import { AuthContext } from '../../contexts/AuthContext';


const IndexController = () => {

  const { isToggleView, toggleView } = useContext(ViewContext);
  const { isAuth, disabledStyle } = useContext(AuthContext);

  return (
    <div className="wrapper-controller" >
      <InputSearch label={`Name`} />
      <InputSearch label={`ID`} />

      <button onClick={toggleView} style={isAuth ? null : disabledStyle}>
        <i className="fas fa-plus"></i>
      </button>

      <button>
        {/* <i className="fas fa-sun"></i> */}
        <i className="fas fa-moon"></i>
      </button>

      {isToggleView ? <ViewInfo id={`add-student`} /> : null}
    </div>
  )
};

export default IndexController;