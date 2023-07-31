import Image from 'next/image';

export default function ProductPage({ product: { title, productId, image } }) {
  return (
    <>
      <p className="prose-lg text-center">
        Product
        <h4>
          {title} - {productId}
        </h4>
      </p>

      <Image
        className="align-center w-full"
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
    </>
  );
}

export function getServerSideProps({ query }) {
  const product = {
    title: 'Gold Necklace',
    productId: '120499322343',
    image: {
      src: '/../public/gold_necklace.jpg',
      alt: 'A golden necklace in editorial styling. Rays of sunlight and pastel colors draw the attention to the necklace sitting on a minimal background.',
      width: '750',
      height: '750',
    },
  };

  return {
    props: { product },
  };
}