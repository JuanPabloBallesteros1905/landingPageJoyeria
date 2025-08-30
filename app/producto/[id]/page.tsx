import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductTabs from '@/components/product/ProductTabs';
import RelatedProducts from '@/components/product/RelatedProducts';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { products } from '@/lib/data/products';

interface PageProps {
  params: {
    id: string;
  };
}

// Función para generar los parámetros estáticos
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    return {
      title: 'Producto no encontrado - Joyeria Italiana',
    };
  }

  return {
    title: `${product.name} | Joyeria Italiana - Joyería de Lujo`,
    description: product.description,
    keywords: product.tags.join(', '),
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images,
    },
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/categoria/${product.category}`}>
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <ProductGallery images={product.images} productName={product.name} />
          <ProductInfo product={product} />
        </div>

        {/* Product Tabs */}
        <ProductTabs product={product} />

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <RelatedProducts products={relatedProducts} />
        )}
      </div>
    </div>
  );
}