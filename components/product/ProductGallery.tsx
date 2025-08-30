'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden group">
        <Image
          src={images[currentImage]}
          alt={`${productName} - imagen ${currentImage + 1}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <Button
              size="sm"
              variant="secondary"
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 p-0 rounded-full bg-white/80 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 p-0 rounded-full bg-white/80 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {/* Zoom Button */}
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setIsZoomed(true)}
          className="absolute top-4 right-4 w-10 h-10 p-0 rounded-full bg-white/80 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>

        {/* Image Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentImage ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                index === currentImage
                  ? 'border-yellow-600 ring-2 ring-yellow-100'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Image
                src={image}
                alt={`${productName} - thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="100px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Zoom Modal */}
      <Dialog open={isZoomed} onOpenChange={setIsZoomed}>
        <DialogContent className="max-w-4xl p-0 bg-black">
          <div className="relative aspect-square">
            <Image
              src={images[currentImage]}
              alt={`${productName} - vista ampliada`}
              fill
              className="object-contain"
              sizes="80vw"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}