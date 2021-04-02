import { css, Global } from '@emotion/react';
import { FC } from 'react';
import 'ress';

export const GlobalStyles: FC = () => (
  <Global
    styles={globalCss}
  />
);

const globalCss = css`
  html,
  body {
    padding: 3rem 1rem;
    margin: 0;
    min-height: 100%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 16px;
  }

  // For theme
  body[data-theme='dark'] {
    --colors-primary: deeppink;
    --colors-background: white;
  }
  body[data-theme='light'] {
    --colors-primary: lightpink;
    --colors-background: black;
  }
`
