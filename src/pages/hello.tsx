import { FC } from 'react';
import { useDarkThemeContext } from '@/providers/darkThemeProvider'
import { css } from '@emotion/react'
import Map from '@/components/root/Map'

const Hello: FC = () => {
  const { isDark, setDarkTheme } = useDarkThemeContext()

  return (
    <section>
      Applied { isDark? "DarkTheme" : "LightTheme" } by useDarkThemeContext
      <p css={themeColor}>This sentence is colorized by css-variables</p>
      <button onClick={setDarkTheme} css={buttonStyle}>Toggle theme</button>
      <Map />
    </section>
  );
};

const themeColor = css`
  color: var(--colors-primary);
  background-color: var(--colors-background);
`

const buttonStyle =css`
  border: 1px solid grey;
  border-radius: 4px;
  background-color: #9b5252;
  color: white;

  :hover {
    filter: brightness(90%);
  }
`

export default Hello;
