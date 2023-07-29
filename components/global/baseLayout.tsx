import { PropsWithChildren } from 'react';
import Head from 'next/head';

import Header from './header';
import Footer from './footer';

interface InternalLayoutProps {}
type LayoutProps = PropsWithChildren<InternalLayoutProps>;

export default function BaseLayout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Seamless | Fully Animated Photography Sharing Platform</title>
      </Head>

      <Header />

      <main style={{ display: 'flex', flexDirection: 'row' }}>
        <section>{children}</section>
      </main>

      <Footer />
    </>
  );
}
