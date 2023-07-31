import { getProducts } from '../products.ts';

export async function getProduct(id: string) {
  const products = await getProducts();
  const response = products.find((p) => p.productId === id);
  return response;
}

export default async (req, res) => {
  if (req.method === 'GET') {
    const response = await getProduct(req.params.id);
    res.status(200).json({ product: response });
  }
};
