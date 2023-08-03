import Link from 'next/link';

import { ProductCard } from '../components/productCard';
import { getProducts } from './api/products';

import { motion } from 'framer-motion';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      ease: [0.17, 0.67, 0.83, 0.67],
      delay: 0.24,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.075,
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
};

const productVariants = {
  enter: { opacity: 1, transition: {} },
  exit: { opacity: 0, transition: {} },
};

const isNavigatingProductVariants = {
  enter: { opacity: 1, transition: {} },
  exit: { opacity: 1, transition: {} },
};

export default function Home({ products }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
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
        let [isNavigatingTo, setIsNavigatingTo] = useState(false);

        return (
          <motion.div
            variants={
              isNavigatingTo ? isNavigatingProductVariants : productVariants
            }
            layoutId={`wrapped-image-${product.productId}`}
            transition={{ duration: 0 }}
          >
            <Link
              href={route}
              style={{ ...explicitTextInheritance }}
              onClickCapture={() => {
                setIsNavigatingTo(true);
              }}
            >
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
