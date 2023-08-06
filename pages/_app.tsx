import '../styles/globals.css';
import BaseLayout from '../components/global/baseLayout';

import { AnimatePresence, MotionConfig } from 'framer-motion';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const baseUrl =
    'https://stackblitzstarterssfqh1d-svky--3000--a9bdb71e.local-credentialless.webcontainer.io';
  const url = `${baseUrl}${router.route}`;

  return (
    <BaseLayout>
      <MotionConfig reducedMotion="user">
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} conanical={url} key={url} />
        </AnimatePresence>
      </MotionConfig>
    </BaseLayout>
  );
}

export default MyApp;
