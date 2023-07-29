import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seamless | Fully Animated Photography Sharing Platform</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.emphasis}>Seamless!</span>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://stackblitz.com/edit/stackblitz-starters-sfqh1d?file=pages%2Findex.tsx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Come back anytime 👋
        </a>
      </footer>
    </div>
  );
}
