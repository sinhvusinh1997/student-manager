import React, { useContext } from 'react';

import { HandleContext } from '../../contexts/HandleContext';
import { ThemeContext } from '../../contexts/ThemeContext';

const Delete = () => {
  const { deleteIDsList, togglePopDel, deleteMultiStudent } = useContext(HandleContext);
  const { isLight, theme } = useContext(ThemeContext);
  const bgStyle = isLight ? theme.bg.light : theme.bg.dark;

  return (
    <>
      <div className='delete-container' style={bgStyle}>
        {deleteIDsList.current.length > 0 ? (
          <>
            <p>{`Are you sure to delete ${deleteIDsList.current.length} student?`}</p>
            <div className='btn'>
              <button className='yes' onClick={deleteMultiStudent}>Yes</button>
              <button className='no' onClick={() => togglePopDel()}>No</button>
            </div>
          </>

        ) : (
          <p>There are NO student to delete!</p>
        )}
      </div>

      <div className="overlay" onClick={() => togglePopDel()}></div>
    </>
  )
};

export default Delete;