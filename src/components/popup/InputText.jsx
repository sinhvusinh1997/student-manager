import React from 'react';

const InputText = (props) => {
  const {
    id,
    label,
    type,
    titles,
    styles,
    styleSelect,
    handleChangeTitle } = props;

  const isText = type === 'text' || type === 'date';

  return (
    <>
      {isText ?
        (<div className="inputs" id={id}>
          <label htmlFor="">{label}:</label>
          <input type={type} autoComplete="off"
            style={styles}
            value={titles}
            onChange={handleChangeTitle}
            placeholder={`Enter your ${label}`}
            required />
        </div>)
        :
        (<div className="inputs" id={id} >
          <label htmlFor="">{label}</label>
          <select value={titles}
            style={styles}
            onChange={handleChangeTitle} >
            <option value="" style={styleSelect}>--</option>
            <option value="Male" style={styleSelect}>Male</option>
            <option value="Female" style={styleSelect}>Female</option>
            <option value="Other" style={styleSelect}>Other</option>
          </select>
        </div>)}
    </>
  )
};

export default InputText;