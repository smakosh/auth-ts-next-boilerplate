import { AppProps } from 'next/app';
import AppProviders from 'utils/AppProviders';
import 'ui/theme/styles/fonts.css';

const MyApp = ({ Component, pageProps, err }: AppProps & { err: any }) => (
  <>
    <AppProviders>
      <Component {...pageProps} err={err} />
    </AppProviders>
  </>
);

export default MyApp;
