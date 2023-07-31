export async function getProducts() {
  const products = [
    {
      title: 'Gold Necklace',
      productId: '120499322343',
      image: {
        src: '/../public/gold_necklace.jpg',
        alt: 'A golden necklace in editorial styling. Rays of sunlight and pastel colors draw the attention to the necklace sitting on a minimal background.',
        width: '250',
        height: '250',
      },
    },
  ];

  return products;
}

export default async (req, res) => {
  if (req.method === 'GET') {
    const products = await getProducts();
    res.status(200).json({ products });
  }
};
