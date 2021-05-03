import React from 'react';

// ========================= COMPONNETS =============================

import IndexController from './components/ctrl/IndexController';
import IndexAuth from './components/auth/IndexAuth';
import IndexMain from './components/main/IndexMain';

// ========================= CONTEXTS ===============================
import ViewContextProvider from './contexts/ViewContext';
import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';

// ========================= STYLESHEETS ============================
import './styleSheets/index.scss';



// ========================= MAIN ===================================

const App = () => {
  return (
    <div className="wrapper-app">
      <AuthContextProvider>
        <ThemeContextProvider>
          <IndexAuth />
          <ViewContextProvider>
            <IndexController />
            <IndexMain />
          </ViewContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  )
}

export default App;
