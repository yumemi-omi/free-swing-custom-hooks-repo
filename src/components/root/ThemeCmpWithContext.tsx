import { useDarkThemeContext } from '@/providers/darkThemeProvider';
import { css, SerializedStyles } from '@emotion/react';
import { VFC } from 'react';

const ThemeCmpWithContext: VFC = () => {
  const { isDark, setDarkTheme } = useDarkThemeContext();

  return (
    <div css={theme(isDark)}>
      <button onClick={setDarkTheme}>ToggleThemeBtContext</button>
    </div>
  );
};

export function theme(isDark: boolean): SerializedStyles {
  return css`
    color: ${isDark ? '#4b5d67' : '#edeef7'};
    background: ${isDark ? '#322f3d' : '#7868e6'};
  `;
}

export default ThemeCmpWithContext;
