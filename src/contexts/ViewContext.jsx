import React, { createContext, useState } from 'react';

export const ViewContext = createContext();

const ViewContextProvider = ({ children }) => {

  const [isToggleView, setToggleView] = useState(false);

  const toggleView = () => setToggleView(!isToggleView);

  const viewContextData = {
    // -------- toggle view student 
    isToggleView,
    toggleView,
  }

  return (
    <ViewContext.Provider value={viewContextData} >
      {children}
    </ViewContext.Provider>
  )

};

export default ViewContextProvider;
