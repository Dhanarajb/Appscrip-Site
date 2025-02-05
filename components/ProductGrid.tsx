'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export default function ProductGrid({ products }: { products: Product[] }) {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  if (!products || products.length === 0) {
    return (
      <div className="empty-state">
        <p>No products available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              priority={product.id <= 4}
              loading={product.id <= 4 ? 'eager' : 'lazy'}
            />
          </div>
          <div className="product-details">
            <div className="product-header">
              <div className="product-info">
                <h3 className="product-title">
                  <a href={`/product/${product.id}`}>
                    {product.title}
                  </a>
                </h3>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <p className="product-category">{product.category}</p>
              </div>
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`wishlist-button ${wishlist.includes(product.id) ? 'active' : ''}`}
                aria-label={wishlist.includes(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}