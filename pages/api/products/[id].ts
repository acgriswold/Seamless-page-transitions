import { getProducts } from '../products.ts';

export async function getProduct({
  id,
  width,
  height,
}: {
  id: string;
  width: number;
  height: number;
}) {
  const products = await getProducts({ width, height });
  const response = products.find((p) => p.productId === id);
  return response;
}

export default async (req, res) => {
  if (req.method === 'GET') {
    const response = await getProduct({
      id: req.params.id,
      width: 750,
      height: 750,
    });
    res.status(200).json({ product: response });
  }
};
