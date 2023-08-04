import Image from 'next/image';

import { motion } from 'framer-motion';

import { useTransition } from '../hooks/useMotion';
import { useState } from 'react';

interface IProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}
export type ProductProps = {
  image: IProductImage;
  title: string;
  productId: string;
};

export function ProductCard(props: ProductProps) {
  let [isNavigatingTo, setIsNavigatingTo] = useState(false);
  const productVariants = {
    enter: { opacity: 1, transition: {} },
    exit: { opacity: 0, transition: {} },
  };

  const isNavigatingProductVariants = {
    enter: { opacity: 1, transition: {} },
    exit: {
      opacity: 1,
      borderRadius: 0,
      borderColor: '#ffffff',
      boxShadow: 0,
      transition: { duration: 1, delay: 0.2 },
    },
  };

  const { smooth } = useTransition();

  const titleVariants = {
    hidden: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: { delay: 0.2, ...smooth },
    },
    exit: {
      opacity: 0,
      transition: { delay: 0.1, ...smooth },
    },
  };

  const idVariants = {
    hidden: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: { delay: 0.3, ...smooth },
    },
    exit: {
      opacity: 0,
      transition: { delay: 0.2, ...smooth },
    },
  };

  return (
    <motion.div
      className="daisy-card daisy-card-bordered bg-base-100 shadow-sm not-prose"
      transition={{ duration: 0 }}
      variants={isNavigatingTo ? isNavigatingProductVariants : productVariants}
      onClickCapture={() => {
        setIsNavigatingTo(true);
      }}
    >
      <motion.figure>
        <motion.div
          layoutId={`wrapped-image-${props.productId}`}
          whileHover={{ scale: 1.1 }}
          transition={smooth}
          className="relative w-full"
          style={{ height: props.image.height }}
        >
          <Image
            fill
            className="object-cover"
            src={props.image.src}
            alt={props.image.alt}
          />
        </motion.div>
      </motion.figure>

      <div className="prose prose-sm daisy-card-body grid gap-auto grid-cols-2 prose">
        <motion.strong variants={titleVariants}>{props.title}</motion.strong>
        <motion.div variants={idVariants} className="text-right">
          {props.productId}
        </motion.div>
      </div>
    </motion.div>
  );
}
