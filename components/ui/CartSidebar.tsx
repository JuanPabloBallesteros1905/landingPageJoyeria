'use client';

import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock cart data
const cartItems = [
  {
    id: '1',
    name: 'Anillo Solitario Diamante Eternity',
    price: 15500,
    quantity: 1,
    image: 'https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg',
    material: 'Oro blanco 18k'
  },
  {
    id: '3',
    name: 'Pulsera Tennis Diamantes',
    price: 12400,
    quantity: 1,
    image: 'https://images.pexels.com/photos/8327425/pexels-photo-8327425.jpeg',
    material: 'Oro blanco 18k'
  }
];

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping for luxury items
  const total = subtotal + shipping;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:w-96 p-0">
        <SheetHeader className="px-6 py-4 border-b">
          <SheetTitle className="flex items-center space-x-2">
            <ShoppingBag className="h-5 w-5" />
            <span>Carrito de Compras</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">Tu carrito está vacío</p>
                <Button onClick={onClose}>Continuar Comprando</Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-4 py-4 border-b border-gray-100">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-black mb-1 line-clamp-2">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500 mb-2">{item.material}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                          <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold">
                            ${item.price.toLocaleString()}
                          </span>
                          <Button size="sm" variant="ghost" className="w-8 h-8 p-0 text-red-500 hover:text-red-700">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Summary */}
          {cartItems.length > 0 && (
            <div className="border-t bg-gray-50 px-6 py-4">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Envío</span>
                  <span className="text-green-600">Gratis</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Button className="w-full luxury-gradient text-white hover:opacity-90">
                  Proceder al Pago
                </Button>
                <Button variant="outline" className="w-full" onClick={onClose}>
                  Continuar Comprando
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}