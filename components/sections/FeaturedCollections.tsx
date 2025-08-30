import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    name: 'Anillos de Compromiso',
    description: 'Simboliza tu amor eterno con diseños únicos',
    image: 'https://images.pexels.com/photos/1666316/pexels-photo-1666316.jpeg',
    href: '/categoria/anillos',
    featured: true,
  },
  {
    name: 'Collares Elegantes',
    description: 'Sofisticación que realza tu belleza natural',
    image: 'https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg',
    href: '/categoria/collares',
  },
  {
    name: 'Pulseras Premium',
    description: 'Detalles refinados para cada ocasión',
    image: 'https://images.pexels.com/photos/8327425/pexels-photo-8327425.jpeg',
    href: '/categoria/pulseras',
  },
  {
    name: 'Aretes Únicos',
    description: 'Completa tu look con elegancia atemporal',
    image: 'https://images.pexels.com/photos/8837442/pexels-photo-8837442.jpeg',
    href: '/categoria/aretes',
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-black mb-4">
            Nuestras Colecciones
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada pieza es cuidadosamente seleccionada y crafteada para reflejar 
            la más alta calidad y diseño exclusivo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <div 
              key={collection.name}
              className={`group relative ${collection.featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            >
              <Link href={collection.href}>
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes={collection.featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className={`font-serif font-bold mb-2 ${collection.featured ? 'text-3xl' : 'text-xl'}`}>
                      {collection.name}
                    </h3>
                    <p className={`mb-4 ${collection.featured ? 'text-lg' : 'text-sm'}`}>
                      {collection.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-fit bg-white/10 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm"
                    >
                      Ver Colección
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}