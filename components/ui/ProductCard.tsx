'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Eye, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlistActive, setIsWishlistActive] = useState(false);

  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Link href={`/producto/${product.id}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </Link>
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
          <Button
            size="sm"
            variant="secondary"
            className="w-10 h-10 p-0 rounded-full bg-white/90 hover:bg-white shadow-lg"
            onClick={() => setIsWishlistActive(!isWishlistActive)}
          >
            <Heart 
              className={`h-4 w-4 ${isWishlistActive ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </Button>
          <Link href={`/producto/${product.id}`}>
            <Button
              size="sm"
              variant="secondary"
              className="w-10 h-10 p-0 rounded-full bg-white/90 hover:bg-white shadow-lg"
            >
              <Eye className="h-4 w-4 text-gray-600" />
            </Button>
          </Link>
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button className="w-full luxury-gradient text-white hover:opacity-90 shadow-lg">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Agregar al Carrito
          </Button>
        </div>

        {/* Badge */}
        {product.bestseller && (
          <div className="absolute top-4 left-4 bg-yellow-600 text-white text-xs font-medium px-3 py-1 rounded-full">
            Más Vendido
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
            {product.category}
          </span>
        </div>
        
        <Link href={`/producto/${product.id}`}>
          <h3 className="text-lg font-serif font-semibold text-black mb-2 hover:gold-text transition-colors duration-200 line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
            <span className="text-xl font-bold text-black">
              ${product.price.toLocaleString()}
            </span>
          </div>
          
          <div className="flex items-center space-x-1">
            
            <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
}