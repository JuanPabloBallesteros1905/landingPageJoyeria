'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      '¡Hola! Me interesa conocer más sobre sus joyas de lujo. ¿Podrían brindarme información personalizada?'
    );
    const phoneNumber = '1234567890'; // Replace with actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        title="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}