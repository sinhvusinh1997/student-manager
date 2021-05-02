import React from 'react';

// ========================= COMPONNETS =============================

import IndexController from './components/ctrl/IndexController';
import IndexAuth from './components/auth/IndexAuth';
import IndexMain from './components/main/IndexMain';

// ========================= CONTEXTS ===============================
import ViewContextProvider from './contexts/ViewContext';
import AuthContextProvider from './contexts/AuthContext';

// ========================= STYLESHEETS ============================
import './styleSheets/index.scss';



// ========================= MAIN ===================================

const App = () => {
  return (
    <div className="wrapper-app">
      <AuthContextProvider>
        <IndexAuth />
        <ViewContextProvider>
          <IndexController />
          <IndexMain />
        </ViewContextProvider>
      </AuthContextProvider>
    </div>
  )
}

export default App;
