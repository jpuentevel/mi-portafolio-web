import { NextUIProvider } from '@nextui-org/react';
import { myDefaultTheme } from '../utils/themes/myDefaultTheme';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={myDefaultTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp
