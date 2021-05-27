import React from 'react';

const Notify = ({ type, content }) => {
  const styles = {
    background: type === 'success' ? 'green' : 'red',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '20px',
    fontWeight: 'bold',
  };

  return (
    <div className='notify'
      style={styles}>{content}</div>
  )
};

export default Notify;