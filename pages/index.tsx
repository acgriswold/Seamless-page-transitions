import Link from 'next/link';

import { ProductCard } from '../components/productCard';
import { getProducts } from './api/products';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
};

const productVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

export default function Home({ products }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
    >
      {Products(products)}
    </motion.div>
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
          <motion.div
            variants={productVariants}
            layoutId={`wrapped-image-${product.productId}`}
          >
            <Link href={route} style={{ ...explicitTextInheritance }}>
              <ProductCard key={product.title} {...product} />
            </Link>
          </motion.div>
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
