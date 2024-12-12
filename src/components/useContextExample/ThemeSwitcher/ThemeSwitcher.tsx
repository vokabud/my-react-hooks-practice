import { useContext } from "react";

import { ThemeContext } from '@/components/useContextExample/ThemeProvider';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;