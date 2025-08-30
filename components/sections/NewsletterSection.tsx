'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Crown } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_#D4AF37_0%,_transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center">
            <Crown className="h-8 w-8 text-white" />
          </div>
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
          Únete al Círculo VIP
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Sé el primero en conocer nuestras nuevas colecciones exclusivas, 
          eventos privados y ofertas especiales para miembros VIP.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400"
                required
              />
            </div>
            <Button 
              type="submit"
              className="luxury-gradient hover:opacity-90 px-6"
            >
              Suscribirse
            </Button>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-serif font-bold mb-2">Acceso Prioritario</div>
            <p className="text-gray-400">A colecciones limitadas</p>
          </div>
          <div>
            <div className="text-2xl font-serif font-bold mb-2">15% Descuento</div>
            <p className="text-gray-400">En tu primera compra</p>
          </div>
          <div>
            <div className="text-2xl font-serif font-bold mb-2">Eventos VIP</div>
            <p className="text-gray-400">Invitaciones exclusivas</p>
          </div>
        </div>
      </div>
    </section>
  );
}