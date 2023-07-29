import Image from 'next/image';

import styles from '../styles/Home.module.css';

export default function Home({ images }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to <span className={styles.emphasis}>Seamless!</span>
      </h1>

      {images.map((image) => {
        return <Image {...image} />;
      })}
    </div>
  );
}

export function getServerSideProps() {
  const images = [
    {
      src: '/../public/gold_necklace.jpg',
      alt: 'A golden necklace in editorial styling. Rays of sunlight and pastel colors draw the attention to the necklace sitting on a minimal background.',
      width: '250',
      height: '250',
    },
  ];

  return {
    props: {
      images,
    },
  };
}
