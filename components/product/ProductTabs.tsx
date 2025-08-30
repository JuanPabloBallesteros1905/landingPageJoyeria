import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, User } from 'lucide-react';
import type { Product } from '@/lib/types/product';

interface ProductTabsProps {
  product: Product;
}

// Mock reviews data
const reviews = [
  {
    id: '1',
    user: 'María González',
    rating: 5,
    comment: 'Absolutamente hermoso! La calidad es excepcional y llegó perfectamente empacado.',
    date: '2024-01-15',
    verified: true
  },
  {
    id: '2', 
    user: 'Carlos Rivera',
    rating: 5,
    comment: 'Compré este anillo para mi propuesta y fue perfecto. El servicio al cliente es excelente.',
    date: '2024-01-10',
    verified: true
  },
  {
    id: '3',
    user: 'Ana Martínez',
    rating: 4,
    comment: 'Muy elegante y bien hecho. Solo tardó un poco más de lo esperado en llegar.',
    date: '2024-01-05',
    verified: true
  }
];

export default function ProductTabs({ product }: ProductTabsProps) {
  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="description">Descripción</TabsTrigger>
        <TabsTrigger value="specifications">Especificaciones</TabsTrigger>
        <TabsTrigger value="reviews">Reseñas ({product.reviews})</TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="mt-8">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            {product.description}
          </p>
          
          <h3 className="font-serif font-semibold text-black mb-4">Características Destacadas</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Materiales premium certificados de origen responsable</li>
            <li>• Proceso de manufactura artesanal con técnicas tradicionales</li>
            <li>• Control de calidad riguroso en cada etapa de producción</li>
            <li>• Diseño exclusivo que combina elegancia clásica y modernidad</li>
            <li>• Empaque premium incluido perfecto para regalo</li>
          </ul>

          {product.care_instructions && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-black mb-3">Cuidados Especiales</h4>
              <p className="text-gray-600">{product.care_instructions}</p>
            </div>
          )}
        </div>
      </TabsContent>

      <TabsContent value="specifications" className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif font-semibold text-black mb-4">Especificaciones Técnicas</h3>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Materiales:</span>
                <span className="font-medium">{product.materials.join(', ')}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">SKU:</span>
                <span className="font-medium">{product.sku}</span>
              </div>
              {product.dimensions && (
                <>
                  {product.dimensions.weight && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Peso:</span>
                      <span className="font-medium">{product.dimensions.weight}</span>
                    </div>
                  )}
                  {product.dimensions.length && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Longitud:</span>
                      <span className="font-medium">{product.dimensions.length}</span>
                    </div>
                  )}
                </>
              )}
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Garantía:</span>
                <span className="font-medium">{product.warranty || 'Consultar'}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-black mb-4">Información Adicional</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">✓ Producto Auténtico</h4>
                <p className="text-sm text-green-700">Certificado de autenticidad incluido</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">✓ Envío Asegurado</h4>
                <p className="text-sm text-blue-700">Cobertura total contra pérdida o daño</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-2">✓ Servicio Post-Venta</h4>
                <p className="text-sm text-purple-700">Mantenimiento y limpieza gratuitos</p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="reviews" className="mt-8">
        <div className="space-y-8">
          {/* Reviews Summary */}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-3xl font-bold">{product.rating}</span>
                <div className="flex">
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
                </div>
              </div>
              <p className="text-gray-600">Basado en {product.reviews} reseñas</p>
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="font-medium text-black">{review.user}</span>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">Compra Verificada</Badge>
                      )}
                      <span className="text-sm text-gray-400">{review.date}</span>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < review.rating 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}