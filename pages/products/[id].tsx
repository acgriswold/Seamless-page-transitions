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
  const { smooth } = useTransition();

  return (
    <div className="flex flex-col prose">
      <div className="grid grid-cols-2 gap-auto">
        <div>
          <span>{productId}</span>
        </div>
        <a className="text-right">Contact offers</a>
      </div>

      <h2 className="text-center prose-2xl">{title}</h2>

      <motion.div
        layoutId={`wrapped-image-${productId}`}
        initial={{
          y: 0,
          height: 250,
        }}
        animate={{
          y: 0,
          width: '100%',
          height: window.innerWidth > 1440 ? 800 : 400,
          transition: { delay: 0.2, ...smooth },
        }}
        exit={{
          transition: { smooth },
        }}
      >
        <Image
          id={productId}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </motion.div>

      <div className="grid prose-md text-center">
        <h2 className="title">{lead}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const product = await getProduct({ id: query.id, width: 750, height: 750 });
  return {
    props: { product: product },
  };
}
