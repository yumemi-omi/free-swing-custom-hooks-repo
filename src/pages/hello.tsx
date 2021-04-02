import { FC } from 'react';
import { useDarkThemeContext } from '@/providers/darkThemeProvider'
import { css } from '@emotion/react'

const Hello: FC = () => {
  const { isDark } = useDarkThemeContext()

  return (
    <section>
      Applied { isDark? "DarkTheme" : "LightTheme" } by useDarkThemeContext
      <p css={themeColor}>This sentence is colorized by css-variables</p>
    </section>
  );
};

const themeColor = css`
  color: var(--colors-primary);
  background-color: var(--colors-background);
`

export default Hello;
