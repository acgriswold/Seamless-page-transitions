export async function getProducts({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  const products = [
    {
      title: 'Gold Necklace',
      productId: '120499322343',
      image: {
        src: '/../public/static/images/gold_necklace.jpg',
        alt: 'A golden necklace in editorial styling. Rays of sunlight and pastel colors draw the attention to the necklace sitting on a minimal background.',
        width: width,
        height: height,
      },
    },
  ];

  return products;
}

export default async (req, res) => {
  if (req.method === 'GET') {
    const products = await getProducts({ width: 450, height: 450 });
    res.status(200).json({ products });
  }
};
