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
    <div className="flex flex-col prose">
      <div className="grid grid-cols-2 gap-auto">
        <div>
          <span>{productId}</span>
        </div>
        <a className="text-right">Contact offers</a>
      </div>

      <h2 className="text-center prose-2xl">{title}</h2>

      <Image
        className="flex-grow"
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />

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
