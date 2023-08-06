import Image from 'next/image';

import { ScrollForMore } from '../../components/scrollForMore';
import { getProduct } from '../api/products/[id]';

import { motion } from 'framer-motion';

import { useTransition } from '../../hooks/useMotion';

export default function ProductPage({ product }) {
  return product === null ? RenderError() : RenderPage(product);
}

function RenderError() {
  return <p>Product not found</p>;
}

function RenderPage({ title, productId, lead, description, image }) {
  const { smooth, snappy } = useTransition();

  const exit = {
    exit: {
      opacity: 0,
      transition: { ...smooth },
    },
  };

  const TitleVariants = {
    hidden: {},
    enter: {
      transition: { delay: 0.95, staggerChildren: 0.12, ...snappy },
    },
    ...exit,
  };

  const TitleCharacterVariants = {
    hidden: {
      y: '50%',
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
    },
    ...exit,
  };

  const DescriptionVariants = {
    hidden: {
      opacity: 0,
      y: '10px',
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.75, ...smooth },
    },
    ...exit,
  };

  const ContactVariants = {
    hidden: {
      opacity: 0,
      y: '50%',
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, ...smooth },
    },
    ...exit,
  };

  const IdVariants = {
    hidden: {
      opacity: 0,
      y: '50%',
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.1, ...smooth },
    },
    ...exit,
  };

  const imageVariants = {
    hidden: {
      scale: 1.1,
    },
    enter: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      transition: { delay: 0.5, ...smooth },
    },
  };

  return (
    <div className="flex flex-col prose">
      <div className="grid grid-cols-2 gap-auto">
        <motion.div variants={IdVariants}>
          <span>{productId}</span>
        </motion.div>
        <motion.a variants={ContactVariants} className="text-right">
          Contact offers
        </motion.a>
      </div>

      <motion.h2
        variants={TitleVariants}
        initial="hidden"
        animate="enter"
        className="text-center prose-2xl"
      >
        {title.split('').map((c, i) => {
          return (
            <motion.span
              style={{ display: c === ' ' ? '' : 'inline-block' }}
              key={`${c}-${i}`}
              variants={TitleCharacterVariants}
            >
              {c}
            </motion.span>
          );
        })}
      </motion.h2>

      <motion.div
        layoutId={`wrapped-image-${productId}`}
        variants={imageVariants}
        transition={{ duration: 1, ease: [0.21, 0.51, 0.41, 0.98] }}
        className="relative width-full"
        style={{ height: image.height }}
      >
        <Image
          fill
          className="object-cover"
          id={productId}
          src={image.src}
          alt={image.alt}
        />
      </motion.div>

      <motion.div
        variants={DescriptionVariants}
        className="grid prose-md text-center"
      >
        <h2 className="title">{lead}</h2>
        <p>{description}</p>
      </motion.div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const product = await getProduct({ id: query.id, width: 900, height: 400 });
  return {
    props: { product: product },
  };
}
