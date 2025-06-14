import { useContext } from "react";
import { createContext } from "react";

const themeContext = createContext();

export const ThemeContextProvider = themeContext.Provider;

export const useTheme = () => {
  return useContext(themeContext);
};
