import { useState, useEffect } from 'react'

const COLOR_SCHEME = '(prefers-color-scheme: dark)'

const useDarkTheme = () => {
  const [isDark, setDarkTheme] = useState(false)

  useEffect(() => {
    setDarkTheme(window.matchMedia(COLOR_SCHEME).matches)
  }, [])

  return {
    isDark,
    setDarkTheme
  }
}

export default useDarkTheme
