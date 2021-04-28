import React, { useState } from 'react';


const IndexController = () => {
  const [searchID, setSearchID] = useState('');
  const [searchName, setSearchName] = useState('');

  const handleChangeSearchID = e => setSearchID(e.target.value);

  const handleChangeSearchName = e => setSearchName(e.target.value);


  return (
    <div className="wrapper-controller">
      <input
        type="text"
        name="searchByID"
        id="searchByID"
        placeholder="Find by ID ..."
        autoComplete="off"
        value={searchID}
        onChange={e => handleChangeSearchID(e)}
      />

      <input
        type="text"
        name="searchByName"
        id="searchByName"
        placeholder="Find by Name ..."
        autoComplete="off"
        value={searchName}
        onChange={e => handleChangeSearchName(e)}
      />

      <button>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  )
};

export default IndexController;