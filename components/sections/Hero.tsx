import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_#D4AF37_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_#C0C0C0_0%,_transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <Star className="h-5 w-5 text-yellow-600 fill-current" />
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Joyería de Lujo Exclusiva
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-black mb-6 leading-tight">
              Elegancia
              <span className="block gold-text">Atemporal</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Descubre nuestra colección exclusiva de joyas crafteadas con materiales excepcionales. 
              Cada pieza cuenta una historia de elegancia y sofisticación.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/categoria/exclusivas">
                <Button size="lg" className="luxury-gradient hover:opacity-90 text-white font-medium px-8 py-4 text-lg">
                  Ver Colección Exclusiva
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/categoria/anillos">
                <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-black font-medium px-8 py-4 text-lg">
                  Explorar Anillos
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 luxury-gradient opacity-10 rounded-full blur-3xl"></div>
              <Image
                src="https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg"
                alt="Joyería de lujo Joyeria Italiana"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-serif font-bold text-black mb-2">50+</div>
            <div className="text-sm text-gray-600">Años de Experiencia</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-serif font-bold text-black mb-2">1000+</div>
            <div className="text-sm text-gray-600">Clientes Satisfechos</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-serif font-bold text-black mb-2">100%</div>
            <div className="text-sm text-gray-600">Materiales Auténticos</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-serif font-bold text-black mb-2">24/7</div>
            <div className="text-sm text-gray-600">Atención Personalizada</div>
          </div>
        </div>
      </div>
    </section>
  );
}