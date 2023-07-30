import { Product } from '../components/product';

import styles from '../styles/Home.module.css';

export default function Home({ products }) {
  return (
    <div className={styles.container}>
      {products.map((product) => {
        return <Product key={product.title} {...product} />;
      })}
    </div>
  );
}

export function getServerSideProps() {
  const products = [
    {
      title: 'Gold Necklace',
      productId: '120499322343',
      image: {
        src: '/../public/gold_necklace.jpg',
        alt: 'A golden necklace in editorial styling. Rays of sunlight and pastel colors draw the attention to the necklace sitting on a minimal background.',
        width: '250',
        height: '250',
      },
    },
  ];

  return {
    props: {
      products,
    },
  };
}
