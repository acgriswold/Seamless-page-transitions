import Image from 'next/image';

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

export function Product(props: ProductProps) {
  return (
    <div className="daisy-card daisy-card-compact daisy-card-bordered bg-base-100 shadow-sm not-prose">
      <figure>
        <Image
          src={props.image.src}
          alt={props.image.alt}
          width={props.image.width}
          height={props.image.height}
        />
      </figure>

      <div className="daisy-card-body grid gap-auto grid-cols-2 prose">
        <strong>{props.title}</strong>
        <div className="text-right">{props.productId}</div>
      </div>
    </div>
  );
}
