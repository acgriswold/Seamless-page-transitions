import Image from 'next/image';

import { ScrollForMore } from '../../components/scrollForMore';
import { getProduct } from '../api/products/[id]';

export default function ProductPage({ product }) {
  return product === null ? RenderError() : RenderPage(product);
}

function RenderError() {
  return <p>Product not found</p>;
}

function RenderPage({ title, productId, lead, description, image }) {
  return (
    <>
      <div className="prose-sm grid grid-cols-2 gap-auto">
        <div>
          <span>{productId}</span>
        </div>
        <a className="text-right">Contact offers</a>
      </div>
      <h2 className="text-center prose-2xl">{title}</h2>

      <div>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </div>

      <div>
        <h2 className="title">{lead}</h2>
        <p>{description}</p>
      </div>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const product = await getProduct({ id: query.id, width: 750, height: 750 });
  return {
    props: { product: product },
  };
}
