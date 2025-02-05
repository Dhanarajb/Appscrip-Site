import { Metadata } from 'next';
import ProductContainer from '@/components/ProductContainer';

export const metadata: Metadata = {
  title: 'Discover Our Products - Premium E-commerce Store',
  description:
    'Explore our curated collection of high-quality products. Find the perfect items that match your style and needs.',
  openGraph: {
    title: 'Discover Our Products - Premium E-commerce Store',
    description: 'Explore our curated collection of high-quality products',
    type: 'website',
  },
};

async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      next: { revalidate: 3600 },
      headers: {
        Accept: 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch products: ${res.status} ${res.statusText}`
      );
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">DISCOVER OUR PRODUCTS</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of high-quality products from various
            categories. Find the perfect items that match your style and needs.
          </p>
        </div>

        <ProductContainer products={products} />
      </div>
    </main>
  );
}
