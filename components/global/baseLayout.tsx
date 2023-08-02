import { PropsWithChildren } from 'react';
import Head from 'next/head';

import Header from './header';
import Footer from './footer';

import { motion } from 'framer-motion';

interface InternalLayoutProps {}
type LayoutProps = PropsWithChildren<InternalLayoutProps>;

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function BaseLayout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Seamless | Fully Animated Photography Sharing Platform</title>
      </Head>
      <Header />

      <motion.main
        className="flex justify-center align-center mt-4 mb-8"
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
      >
        <section>{children}</section>
      </motion.main>

      <Footer />
    </>
  );
}
