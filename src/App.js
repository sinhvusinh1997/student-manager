import React from 'react';

// ========================= COMPONNETS =============================

import IndexController from './components/ctrl/IndexController';
import IndexAuth from './components/auth/IndexAuth';
import IndexMain from './components/main/IndexMain';

// ========================= CONTEXTS ===============================
import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';
import HandleContextProvider from './contexts/HandleContext';

// ========================= STYLESHEETS ============================
import './styleSheets/index.scss';

// ========================= MAIN ===================================

const App = () => {
  return (
    <div className="wrapper-app">
      <HandleContextProvider>
        <AuthContextProvider>
          <ThemeContextProvider>
            <IndexAuth />
            <IndexController />
            <IndexMain />
          </ThemeContextProvider>
        </AuthContextProvider>
      </HandleContextProvider>
    </div>
  )
}

export default App;
