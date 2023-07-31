import Image from 'next/image';

import { getProduct } from '../api/products/[id]';

export default function ProductPage({ product }) {
  return product === null ? RenderError() : RenderPage(product);
}

function RenderError() {
  return <p>Product not found</p>;
}

function RenderPage({ title, productId, image }) {
  return (
    <>
      <p className="prose text-center">
        {title} - {productId}
      </p>

      <Image
        className="w-screen"
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const product = await getProduct(query.id);
  return {
    props: { product: product },
  };
}
