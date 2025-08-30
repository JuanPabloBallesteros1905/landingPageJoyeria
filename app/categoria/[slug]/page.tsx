import React from 'react';
import type { Metadata } from 'next';
import CategoryHeader from '@/components/category/CategoryHeader';
import ProductGrid from '@/components/category/ProductGrid';
import FilterSidebar from '@/components/category/FilterSidebar';
import { products } from '@/lib/data/products';
import { notFound } from 'next/navigation';

const categories = {
  anillos: {
    title: 'Anillos de Lujo',
    description: 'Descubre nuestra exclusiva colección de anillos crafteados con materiales premium',
    image: 'https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg',
  },
  collares: {
    title: 'Collares Elegantes',
    description: 'Collares que realzan tu belleza con sofisticación y estilo atemporal',
    image: 'https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg',
  },
  pulseras: {
    title: 'Pulseras Premium',
    description: 'Pulseras exclusivas que complementan tu personalidad única',
    image: 'https://images.pexels.com/photos/8327425/pexels-photo-8327425.jpeg',
  },
  aretes: {
    title: 'Aretes Únicos',
    description: 'Aretes que enmarcan tu rostro con elegancia refinada',
    image: 'https://images.pexels.com/photos/8837442/pexels-photo-8837442.jpeg',
  },
  exclusivas: {
    title: 'Colecciones Exclusivas',
    description: 'Piezas únicas diseñadas para ocasiones especiales y coleccionistas exigentes',
    image: 'https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg',
  },
};

interface PageProps {
  params: {
    slug: string;
  };
}

// Función para generar los parámetros estáticos
export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = categories[params.slug as keyof typeof categories];
  
  if (!category) {
    return {
      title: 'Categoría no encontrada - Aurelia',
    };
  }

  return {
    title: `${category.title} | Aurelia - Joyería de Lujo`,
    description: category.description,
    openGraph: {
      title: `${category.title} | Aurelia`,
      description: category.description,
      images: [category.image],
    },
  };
}

export default function CategoryPage({ params }: PageProps) {
  const category = categories[params.slug as keyof typeof categories];
  
  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(product => 
    product.category === params.slug || 
    (params.slug === 'exclusivas' && product.exclusive)
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <CategoryHeader category={category} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>
          <div className="flex-1">
            <ProductGrid products={categoryProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}