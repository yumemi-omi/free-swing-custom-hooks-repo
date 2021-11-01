import useDarkTheme from '@/hooks/useDarkTheme';
import { css } from '@emotion/react';
import { VFC } from 'react';

const ThemeCmp: VFC = () => {
  const { isDark, setDarkTheme } = useDarkTheme();

  return (
    <div css={theme(isDark)}>
      <button onClick={setDarkTheme}>ToggleTheme</button>
    </div>
  );
};

export function theme(isDark: boolean) {
  return css`
    color: ${isDark ? '#4b5d67' : '#edeef7'};
    background: ${isDark ? '#322f3d' : '#7868e6'};
  `;
}

export default ThemeCmp;
