import React from 'react';

// ========================= COMPONNETS =============================

import IndexController from './components/controller/IndexController';
import IndexAuth from './components/authenticated/IndexAuth';
import IndexMain from './components/main/IndexMain';

// ========================= STYLESHEETS ============================
import './styleSheets/index.scss';



// ========================= MAIN ===================================

const App = () => {
  return (
    <div className="wrapper-app">
      <IndexController />
      <IndexAuth />
      <IndexMain />
    </div>
  )
}

export default App;
