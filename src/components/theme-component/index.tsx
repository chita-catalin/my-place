import React from "react";

export const ThemeContext = React.createContext<any>(null);

export const useTheme = () => {
  const [theme, setTheme] = React.useState<string>("vs-code");
  return { theme, setTheme };
};
