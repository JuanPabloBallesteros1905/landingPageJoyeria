import React from 'react';
import Image from 'next/image';
import { Award, Shield, Gem, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Certificación Premium',
    description: 'Todas nuestras piezas cuentan con certificados de autenticidad y calidad.'
  },
  {
    icon: Shield,
    title: 'Garantía de por Vida',
    description: 'Protección completa y servicio de mantenimiento gratuito.'
  },
  {
    icon: Gem,
    title: 'Materiales Excepcionales',
    description: 'Solo utilizamos materiales premium de origen responsable.'
  },
  {
    icon: Users,
    title: 'Servicio Personalizado',
    description: 'Asesoría experta para encontrar la joya perfecta para ti.'
  }
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-black mb-6">
              Tradición y Excelencia desde 1970
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              En Joyeria Italiana, cada joya es una obra maestra crafteada con dedicación absoluta. 
              Nuestra tradición familiar de más de 50 años nos respalda como referentes 
              en joyería de lujo, combinando técnicas artesanales ancestrales con diseños 
              contemporáneos innovadores.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 luxury-gradient rounded-lg flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg"
                alt="Craftsman working on luxury jewelry"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-serif font-bold text-black">50+</div>
                    <div className="text-sm text-gray-600">Años de Experiencia</div>
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-bold text-black">5★</div>
                    <div className="text-sm text-gray-600">Calificación Promedio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}