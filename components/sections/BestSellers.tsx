import React from 'react';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/lib/data/products';

export default function BestSellers() {
  const bestSellers = products.filter(product => product.bestseller).slice(0, 8);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-black mb-4">
            Más Vendidos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre las joyas favoritas de nuestros clientes, seleccionadas por su 
            excepcional calidad y diseño atemporal
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/categoria/todos" className="inline-flex items-center text-black hover:gold-text font-medium group">
            Ver todo el catálogo
           
          </a>
        </div>
      </div>
    </section>
  );
}