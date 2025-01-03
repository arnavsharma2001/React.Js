
import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});
export const themeMode = "light";
export const darkTheme = () => {};
export const lightTheme = () => {};

// using conetxt.provider as a variable now
export const ThemeProvider = ThemeContext.Provider;

//hook created to give the context
export default function useTheme() {
    return useContext(ThemeContext);
}

