import Link from 'next/link';

import { ProductCard } from '../components/productCard';
import { getProducts } from './api/products';

import styles from '../styles/Home.module.css';

export default function Home({ products }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      {Products(products)}
    </div>
  );
}

function Products(products) {
  const explicitTextInheritance = {
    font: 'inherit',
    textDecoration: 'inherit',
    fontFamily: 'inherit',
  };

  return products === null ? (
    <h2>No products found</h2>
  ) : (
    <>
      {products.map((product) => {
        const route = `./products/${product.productId}`;
        return (
          <Link href={route} style={{ ...explicitTextInheritance }}>
            <ProductCard key={product.title} {...product} />
          </Link>
        );
      })}
    </>
  );
}

export async function getServerSideProps() {
  const products = await getProducts({ width: 250, height: 250 });
  return {
    props: {
      products: products ?? null,
    },
  };
}
