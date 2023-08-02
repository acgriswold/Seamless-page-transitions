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
        <strong>{props.title}</strong>
        <div className="text-right">{props.productId}</div>
      </div>
    </div>
  );
}
