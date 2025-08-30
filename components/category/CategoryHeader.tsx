import React from 'react';
import Image from 'next/image';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

interface CategoryHeaderProps {
  category: {
    title: string;
    description: string;
    image: string;
  };
}

export default function CategoryHeader({ category }: CategoryHeaderProps) {
  return (
    <div className="relative h-80 bg-gray-900 overflow-hidden">
      <Image
        src={category.image}
        alt={category.title}
        fill
        className="object-cover opacity-60"
        priority
        sizes="100vw"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <Breadcrumb className="mb-4">
          <BreadcrumbList className="text-white">
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-gray-300 hover:text-white">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-gray-400" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">{category.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-5xl sm:text-6xl font-serif font-bold text-white mb-4">
          {category.title}
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl">
          {category.description}
        </p>
      </div>
    </div>
  );
}