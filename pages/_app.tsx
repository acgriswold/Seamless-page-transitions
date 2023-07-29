import '@/styles/globals.css';
import BaseLayout from '../components/global/baseLayout';

function MyApp({ Component, pageProps }) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
}

export default MyApp;
