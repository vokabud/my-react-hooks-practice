import { createContext } from "react";

interface IThemeContext {
    theme: string;
    toggleTheme: () => void;
}

const INITIAL_CONTEXT: IThemeContext = {
    theme: 'light',
    toggleTheme: () => { },
}

export const ThemeContext = createContext<IThemeContext>(INITIAL_CONTEXT);
