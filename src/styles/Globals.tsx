import { css, Global } from '@emotion/react';
import { FC } from 'react';
import 'ress';

export const GlobalStyles: FC = () => <Global styles={globalCss} />;

const globalCss = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  html {
    overscroll-behavior: none;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    position: relative;
    background-color: #cccccc;
    color: #070707;
    font-family: sans-serif;
    font-size: 2rem;
    line-height: 1.6;
    text-align: left;
  }

  // For theme
  body[data-theme='dark'] {
    --colors-primary: deeppink;
    --colors-background: white;

    /**
     *  base
     */
    background-color: #444;
    color: #e4e4e4;

    a {
      color: #e39777;
    }
    img {
      filter: grayscale(30%);
    }
  }
  body[data-theme='light'] {
    --colors-primary: lightpink;
    --colors-background: black;
  }
`;
