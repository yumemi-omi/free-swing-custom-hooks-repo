import { FC, useContext } from 'react';
import useDarkTheme from '@/hooks/useDarkTheme';
import DarkThemeContext from '@/providers/darkThemeContext';

const DarkThemeProvider: FC = ({ children }) => {
  const { isDark, setDarkTheme } = useDarkTheme();

  return (
    <DarkThemeContext.Provider value={{ isDark, setDarkTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};

export default DarkThemeProvider;

export const useDarkThemeContext = () => useContext(DarkThemeContext);
