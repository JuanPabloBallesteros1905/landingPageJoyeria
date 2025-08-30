'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, Share2, Shield, Truck, RotateCcw, ShoppingCart, MessageCircle } from 'lucide-react';
import type { Product } from '@/lib/types/product';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    // Add to cart logic
    console.log('Adding to cart:', { productId: product.id, quantity });
  };

  const handleRequestInfo = () => {
    const message = encodeURIComponent(
      `Hola! Me interesa obtener más información sobre: ${product.name} (SKU: ${product.sku}). ¿Podrían brindarme detalles adicionales?`
    );
    const phoneNumber = '1234567890'; // Replace with actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Product Header */}
      <div>
        {product.bestseller && (
          <Badge className="mb-2 luxury-gradient text-white">Más Vendido</Badge>
        )}
        <h1 className="text-4xl font-serif font-bold text-black mb-2">
          {product.name}
        </h1>
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-5 w-5 ${
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
            <span className="text-sm text-gray-600 ml-2">
              ({product.reviews} reseñas)
            </span>
          </div>
          <span className="text-sm text-gray-400">SKU: {product.sku}</span>
        </div>
      </div>

      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-center space-x-4">
          <span className="text-3xl font-bold text-black">
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-xl text-gray-400 line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        {product.originalPrice && (
          <p className="text-sm text-green-600">
            Ahorra ${(product.originalPrice - product.price).toLocaleString()}
          </p>
        )}
      </div>

      <Separator />

      {/* Description */}
      <div>
        <p className="text-gray-600 leading-relaxed text-lg">
          {product.description}
        </p>
      </div>

      {/* Materials */}
      <div>
        <h3 className="font-medium text-black mb-3">Materiales Premium</h3>
        <div className="flex flex-wrap gap-2">
          {product.materials.map((material) => (
            <Badge key={material} variant="outline" className="border-gold text-black">
              {material}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      {/* Purchase Actions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-medium">Cantidad:</span>
          <div className="flex items-center space-x-3">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >
              -
            </Button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            onClick={handleAddToCart}
            className="w-full luxury-gradient text-white hover:opacity-90 text-lg py-6"
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            {product.inStock ? 'Agregar al Carrito' : 'Agotado'}
          </Button>
          
          <Button
            variant="outline"
            onClick={handleRequestInfo}
            className="w-full text-lg py-6 border-2"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Solicitar Información
          </Button>
        </div>

        <div className="flex space-x-3">
          <Button
            variant="ghost"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="flex-1"
          >
            <Heart className={`h-4 w-4 mr-2 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
            {isWishlisted ? 'En Favoritos' : 'Agregar a Favoritos'}
          </Button>
          <Button variant="ghost" className="flex-1">
            <Share2 className="h-4 w-4 mr-2" />
            Compartir
          </Button>
        </div>
      </div>

      <Separator />

      {/* Trust Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
          <Shield className="h-5 w-5 text-green-600 flex-shrink-0" />
          <div>
            <div className="font-medium text-sm">Garantía Premium</div>
            <div className="text-xs text-gray-600">{product.warranty || '2 años'}</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
          <Truck className="h-5 w-5 text-blue-600 flex-shrink-0" />
          <div>
            <div className="font-medium text-sm">Envío Gratuito</div>
            <div className="text-xs text-gray-600">En compras 55,000</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
          <RotateCcw className="h-5 w-5 text-purple-600 flex-shrink-0" />
          <div>
            <div className="font-medium text-sm">Cambios</div>
            <div className="text-xs text-gray-600">30 días</div>
          </div>
        </div>
      </div>
    </div>
  );
}