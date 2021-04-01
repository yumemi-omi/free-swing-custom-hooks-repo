import { useState, useEffect } from 'react'

const COLOR_SCHEME = '(prefers-color-scheme: dark)'

const useDarkTheme = () => {
  const [isDark, setDarkTheme] = useState(false)

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => {
      setDarkTheme(e.matches)
    }

    const matchMediaList = window.matchMedia(COLOR_SCHEME)
    // Setting up initial theme
    setDarkTheme(matchMediaList.matches)

    // To detect changing the user setting theme
    matchMediaList.addEventListener('change', handler)
    return () => {
      matchMediaList.removeEventListener('change', handler)
    }
  }, [])

  return {
    isDark,
    setDarkTheme
  }
}

export default useDarkTheme
