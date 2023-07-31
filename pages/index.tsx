import { ProductCard } from '../components/productCard';
import { getProducts } from './api/products';

import styles from '../styles/Home.module.css';

export default function Home({ products }) {
  return products === null ? (
    <h2>No products found</h2>
  ) : (
    <div className={styles.container}>
      {products.map((product) => {
        return <ProductCard key={product.title} {...product} />;
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: {
      products: products ?? null,
    },
  };
}
