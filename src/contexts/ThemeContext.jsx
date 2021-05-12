import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isLight, setLight] = useState(false);

  const theme = {
    // background
    bg: {
      light: {
        background: 'rgba(255, 255, 255, 0.85)',
        color: 'rgba(0,0,0,0.9)',
      },
      dark: {
        background: 'rgb(2, 15, 51)',
        color: 'rgba(255,255,255,0.9)',
      }
    },
    // input field
    inputField: {
      light: {
        background: 'rgba(255, 255, 255, 0.6)',
        border: '1px solid rgba(0, 0, 0, 0.2)',
        color: 'rgba(0, 0, 0, 1)',
      },
      dark: {
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(0, 0, 0, 0.2)',
        color: 'rgba(255, 255, 255, 1)',
      },
    },
    shadow: {
      light: { boxShadow: '0px 0px 3px 2px rgba(0, 0, 0, 0.2)' },
      dark: { boxShadow: '0px 0px 3px 2px rgba(0, 255, 240, 0.4 )' }
    },
    // borderBottom
    borderBot: {
      light: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)'
      },
      dark: {
        borderBottom: '1px solid rgba(255, 255, 255,0.2)'
      }
    },
    disabledStyle: {
      opacity: '0.3',
      pointerEvents: 'none',
      border: 'none',
      background: 'rgba(0, 0, 0, 0.2)',
      boxShadow: 'none'
    }
  };

  const toggleTheme = () => {
    console.log('Theme has changed!');
    setLight(!isLight);
  };

  const themeContextData = {
    isLight,
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
  )
};

export default ThemeContextProvider;