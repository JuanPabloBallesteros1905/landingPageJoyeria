'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X, Filter } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/lib/data/products';

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const filters = {
  categories: ['Anillos', 'Collares', 'Pulseras', 'Aretes'],
  materials: ['Oro', 'Plata', 'Platino', 'Diamante', 'Perlas'],
  priceRanges: [
    { label: 'Menos de $2,000', min: 0, max: 2000 },
    { label: '$2,000 - $5,000', min: 2000, max: 5000 },
    { label: '$5,000 - $10,000', min: 5000, max: 10000 },
    { label: 'Más de $10,000', min: 10000, max: Infinity },
  ],
};

export default function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<{
    categories: string[];
    materials: string[];
    priceRange: { min: number; max: number } | null;
  }>({
    categories: [],
    materials: [],
    priceRange: null,
  });

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedFilters.categories.length === 0 ||
                           selectedFilters.categories.some(cat => 
                             product.category.toLowerCase().includes(cat.toLowerCase())
                           );
    
    const matchesMaterial = selectedFilters.materials.length === 0 ||
                           selectedFilters.materials.some(mat =>
                             product.materials.some(prodMat => 
                               prodMat.toLowerCase().includes(mat.toLowerCase())
                             )
                           );
    
    const matchesPrice = !selectedFilters.priceRange ||
                        (product.price >= selectedFilters.priceRange.min &&
                         product.price <= selectedFilters.priceRange.max);
    
    return matchesSearch && matchesCategory && matchesMaterial && matchesPrice;
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="px-6 py-4 border-b">
          <DialogTitle className="text-2xl font-serif">Buscar Productos</DialogTitle>
        </DialogHeader>
        
        <div className="flex h-[70vh]">
          {/* Filters Sidebar */}
          <div className="w-80 border-r bg-gray-50 p-6 overflow-y-auto">
            <div className="space-y-6">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar joyas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Categories Filter */}
              <div>
                <h4 className="font-medium text-black mb-3">Categorías</h4>
                <div className="space-y-2">
                  {filters.categories.map((category) => (
                    <label key={category} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.categories.includes(category)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedFilters(prev => ({
                              ...prev,
                              categories: [...prev.categories, category]
                            }));
                          } else {
                            setSelectedFilters(prev => ({
                              ...prev,
                              categories: prev.categories.filter(c => c !== category)
                            }));
                          }
                        }}
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Materials Filter */}
              <div>
                <h4 className="font-medium text-black mb-3">Materiales</h4>
                <div className="space-y-2">
                  {filters.materials.map((material) => (
                    <label key={material} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.materials.includes(material)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedFilters(prev => ({
                              ...prev,
                              materials: [...prev.materials, material]
                            }));
                          } else {
                            setSelectedFilters(prev => ({
                              ...prev,
                              materials: prev.materials.filter(m => m !== material)
                            }));
                          }
                        }}
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-700">{material}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h4 className="font-medium text-black mb-3">Rango de Precio</h4>
                <div className="space-y-2">
                  {filters.priceRanges.map((range) => (
                    <label key={range.label} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="priceRange"
                        checked={selectedFilters.priceRange?.min === range.min}
                        onChange={() => {
                          setSelectedFilters(prev => ({
                            ...prev,
                            priceRange: { min: range.min, max: range.max }
                          }));
                        }}
                        className="border-gray-300"
                      />
                      <span className="text-sm text-gray-700">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <Button
                variant="outline"
                onClick={() => setSelectedFilters({ categories: [], materials: [], priceRange: null })}
                className="w-full"
              >
                Limpiar Filtros
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-600">
                {filteredProducts.length} productos encontrados
              </p>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">No se encontraron productos</p>
                <Button onClick={() => {
                  setSearchTerm('');
                  setSelectedFilters({ categories: [], materials: [], priceRange: null });
                }}>
                  Ver todos los productos
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}