/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext } from "react";

export const ThemeContext = createContext({
  theme: "light",
  dark: () => {},
  light: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
