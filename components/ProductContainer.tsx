'use client';

import { useState, useCallback } from 'react';
import FilterSidebar from './FilterSidebar';
import ProductGrid from './ProductGrid';
import { FilterState } from './FilterSidebar';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface ProductContainerProps {
  products: Product[];
}

export default function ProductContainer({ products }: ProductContainerProps) {
  const handleFilterChange = useCallback((filters: FilterState) => {
    const filtered = products.filter(product => {
      // Price filter
      if (product.price > filters.priceRange) {
        return false;
      }

      // Category filter (Ideal For)
      if (filters.idealFor.length > 0) {
        const category = product.category.toLowerCase();
        const matchesCategory = filters.idealFor.some(ideal => {
          switch (ideal.toLowerCase()) {
            case 'men':
              return category.includes("men's");
            case 'women':
              return category.includes("women's");
            // Note: The API doesn't have kids category, so we'll skip that filter
            default:
              return false;
          }
        });
        if (!matchesCategory) return false;
      }

      // Customizable filter (we'll consider electronics as customizable)
      if (filters.customizable) {
        return product.category.toLowerCase() === 'electronics';
      }

      return true;
    });

    setFilteredProducts(filtered);
  }, [products]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <FilterSidebar onFilterChange={handleFilterChange} />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}