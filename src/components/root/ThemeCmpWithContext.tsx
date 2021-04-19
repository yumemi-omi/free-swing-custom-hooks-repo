import { useDarkThemeContext } from '@/providers/darkThemeProvider';
import { css } from '@emotion/react';

const ThemeCmpWithContext = () => {
  const { isDark, setDarkTheme } = useDarkThemeContext();

  return (
    <div css={theme(isDark)}>
      <button onClick={setDarkTheme}>ToggleThemeBtContext</button>
    </div>
  );
};

export function theme(isDark: boolean) {
  return css`
    color: ${isDark ? '#4b5d67' : '#edeef7'};
    background: ${isDark ? '#322f3d' : '#7868e6'};
  `;
}

export default ThemeCmpWithContext;
