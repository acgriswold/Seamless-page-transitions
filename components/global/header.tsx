import Link from 'next/link';

import styles from '../../styles/Home.module.css';

const paths = [{ uid: 10, name: 'Home', slug: '/' }];

export default function DefaultHeader() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {paths.map((path) => {
            return (
              <li key={path.uid}>
                <Link href={path.slug}>{path.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
