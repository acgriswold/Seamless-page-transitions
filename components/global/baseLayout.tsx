import { PropsWithChildren } from 'react';
import Head from 'next/head';

import Header from './header';
import Footer from './footer';
import styles from '../../styles/Home.module.css';

interface InternalLayoutProps {}
type LayoutProps = PropsWithChildren<InternalLayoutProps>;

export default function BaseLayout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Seamless | Fully Animated Photography Sharing Platform</title>
      </Head>
      <Header />

      <main className="flex justify-center align-center">
        <section>{children}</section>
      </main>

      <Footer />
    </>
  );
}
