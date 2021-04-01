import { FC, useContext } from 'react'
import useDarkTheme from '@/hooks/useDarkTheme'
import DarkThemeContext from '@/providers/darkThemeContext'

const DarkThemeProvider: FC = ({ children }) => {
  const { isDark } = useDarkTheme()

  return <DarkThemeContext.Provider value={{ isDark }}>{ children }</DarkThemeContext.Provider>
}

export default DarkThemeProvider

export const useDarkThemeContext = () => useContext(DarkThemeContext)
