import { createContext } from 'react';

const DarkThemeContext = createContext({
  isDark: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDarkTheme: () => {},
});

export default DarkThemeContext;
