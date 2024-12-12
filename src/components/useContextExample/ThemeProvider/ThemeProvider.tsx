import { useState, FC, ReactNode } from 'react';

import { ThemeContext } from './ThemeContext';

interface IProps {
    children: ReactNode;
}

const ThemeProvider: FC<IProps> = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
