import React from 'react';
import ProductCard from '@/components/ui/ProductCard';
import type { Product } from '@/lib/types/product';

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="pt-16">
      <h2 className="text-3xl font-serif font-bold text-black mb-8 text-center">
        Productos Relacionados
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}