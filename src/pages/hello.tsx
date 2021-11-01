import { VFC } from 'react';
import { useDarkThemeContext } from '@/providers/darkThemeProvider';
import { css } from '@emotion/react';
import Map from '@/components/root/Map';
import Link from 'next/link';

const Hello: VFC = () => {
  const { isDark, setDarkTheme } = useDarkThemeContext();

  return (
    <section>
      <Link href="/">To index page</Link>
      <Link href="/dnd">To dnd page</Link>
      Applied {isDark ? 'DarkTheme' : 'LightTheme'} by useDarkThemeContext
      <p css={themeColor}>This sentence is colorized by css-variables</p>
      <button onClick={setDarkTheme} css={buttonStyle}>
        Toggle theme
      </button>
      <Map />
    </section>
  );
};

const themeColor = css`
  color: var(--colors-primary);
  background-color: var(--colors-background);
`;

const buttonStyle = css`
  border: 1px solid grey;
  border-radius: 4px;
  background-color: #9b5252;
  color: white;

  :hover {
    filter: brightness(90%);
  }
`;

export default Hello;
