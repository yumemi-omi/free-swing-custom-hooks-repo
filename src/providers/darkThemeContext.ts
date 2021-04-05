import { createContext } from 'react'

const DarkThemeContext = createContext({
  isDark: false,
  setDarkTheme: () => {}
})

export default DarkThemeContext
