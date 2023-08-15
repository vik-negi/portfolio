import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeModeProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState();

  const toggleTheme = () => {
    setLightMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ lightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeContext);
