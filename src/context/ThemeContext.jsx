import React, { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const isDark = true;

  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('datanexus-theme', 'dark');
  }, []);

  const toggleTheme = () => {};

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    return { isDark: true, toggleTheme: () => {} };
  }

  return context;
}