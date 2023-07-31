import Link from 'next/link';

import { ProductCard } from '../components/productCard';
import { getProducts } from './api/products';

import styles from '../styles/Home.module.css';

export default function Home({ products }) {
  const explicitTextInheritance = {
    font: 'inherit',
    textDecoration: 'inherit',
    fontFamily: 'inherit',
  };

  return products === null ? (
    <h2>No products found</h2>
  ) : (
    <div className={styles.container}>
      {products.map((product) => {
        const route = `./products/${product.productId}`;
        return (
          <Link href={route} style={{ ...explicitTextInheritance }}>
            <ProductCard key={product.title} {...product} />
          </Link>
        );
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
