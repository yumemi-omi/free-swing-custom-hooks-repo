import { useState, useEffect, useCallback} from 'react'

const COLOR_SCHEME = '(prefers-color-scheme: dark)'

const useDarkTheme = () => {
  const [isDark, _setDarkTheme] = useState(false)

  const setDarkTheme = useCallback(() => {
      _setDarkTheme(prev => !prev)
    }, [])

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => {
      _setDarkTheme(e.matches)
    }

    const matchMediaList = window.matchMedia(COLOR_SCHEME)
    // Setting up initial theme
    _setDarkTheme(matchMediaList.matches)

    // To detect changing the user setting theme
    matchMediaList.addEventListener('change', handler)
    return () => {
      matchMediaList.removeEventListener('change', handler)
    }
  }, [])

  useEffect(() => {
    document.body.dataset.theme = isDark? 'dark' : 'light'
  }, [isDark])

  return {
    isDark,
    setDarkTheme
  }
}

export default useDarkTheme
