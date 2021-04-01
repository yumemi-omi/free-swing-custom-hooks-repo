import { FC } from 'react';
import { useDarkThemeContext } from '@/providers/darkThemeProvider'

const Hello: FC = () => {
  const { isDark } = useDarkThemeContext()

  return (
    <section>
      Hello { isDark? "DarkTheme" : "LightTheme" }
    </section>
  );
};

export default Hello;
