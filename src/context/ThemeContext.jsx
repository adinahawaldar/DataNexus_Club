import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('datanexus-theme');

    if (savedTheme) {
      return savedTheme === 'dark';
    }

    return true;
  });

  useEffect(() => {

    if (isDark) {

      document.documentElement.classList.add('dark');
      localStorage.setItem('datanexus-theme', 'dark');

    } else {

      document.documentElement.classList.remove('dark');
      localStorage.setItem('datanexus-theme', 'light');

    }

  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

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