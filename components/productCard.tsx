import Image from 'next/image';

import { motion } from 'framer-motion';

import { useTransition } from '../hooks/useMotion';

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
    <div className="daisy-card daisy-card-compact daisy-card-bordered bg-base-100 shadow-sm not-prose">
      <figure>
        <motion.div whileHover={{ scale: 1.1 }} transition={smooth}>
          <Image
            id={props.productId}
            src={props.image.src}
            alt={props.image.alt}
            width={props.image.width}
            height={props.image.height}
          />
        </motion.div>
      </figure>

      <div className="prose prose-sm daisy-card-body grid gap-auto grid-cols-2 prose">
        <motion.strong variants={titleVariants}>{props.title}</motion.strong>
        <motion.div variants={idVariants} className="text-right">
          {props.productId}
        </motion.div>
      </div>
    </div>
  );
}
