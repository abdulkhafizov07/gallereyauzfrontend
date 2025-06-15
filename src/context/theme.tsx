"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark((prev) => {
      if (!prev) {
        document.body.classList.add("dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        window.localStorage.setItem("theme", "light");
      }

      return !prev;
    });
  };

  useEffect(() => {
    const choosedDark = window.localStorage.getItem("theme") === "dark";
    setIsDark(choosedDark);
    if (choosedDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
