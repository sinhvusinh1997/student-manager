import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isLight, setLight] = useState(false);

  const theme = {
    // background
    bg: {
      light: {
        background: 'rgba(255, 255, 255, 1)',
        color: 'rgba(0,0,0,0.9)',
      },
      dark: {
        background: 'rgb(0, 40, 80)',
        color: 'rgba(255,255,255,0.9)',
      }
    },
    // input field
    inputField: {
      light: {
        background: 'rgba(255, 255, 255, 0.6)',
        color: 'rgba(0, 0, 0, 1)',
      },
      dark: {
        background: 'rgba(255, 255, 255, 0.1)',
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
      light: {
        opacity: '0.5',
        pointerEvents: 'none',
        background: 'rgba(0, 0, 0, 0.2)',
        boxShadow: 'none',
        color: 'black'
      },
      dark: {
        opacity: '0.5',
        pointerEvents: 'none',
        background: 'rgba(0, 0, 0, 0.2)',
        boxShadow: 'none',
        color: 'white'
      }
    },
    selected: {
      background: 'darkred',
      color: 'bisque',
    }
  };

  const toggleTheme = () => setLight(!isLight);

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