import { GlobalStyles } from '@/styles/Globals';
import type { AppProps } from 'next/app';
import DarkThemeProvider from '@/providers/darkThemeProvider';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../../.mocks');
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <DarkThemeProvider>
        <Component {...pageProps} />
      </DarkThemeProvider>
    </>
  );
}

export default MyApp;
