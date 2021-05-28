import React, { useContext } from 'react';

import { HandleContext } from '../../contexts/HandleContext';
import { ThemeContext } from '../../contexts/ThemeContext';

const Delete = () => {
  const { totalsDeleteIDs, togglePopDel, deleteMultiStudent } = useContext(HandleContext);
  const { isLight, theme } = useContext(ThemeContext);
  const bgStyle = isLight ? theme.bg.light : theme.bg.dark;

  return (
    <>
      <div className='delete-container' style={bgStyle}>
        {totalsDeleteIDs.current > 0 ? (
          <>
            <p>{`Are you sure to delete ${totalsDeleteIDs.current} student?`}</p>
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