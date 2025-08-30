'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { X } from 'lucide-react';

const filterOptions = {
  materials: [
    'Oro amarillo',
    'Oro blanco', 
    'Oro rosa',
    'Platino',
    'Plata 925',
    'Diamantes',
    'Perlas',
    'Esmeraldas',
    'Rubíes',
    'Zafiros'
  ],
  collections: [
    'Clásica',
    'Moderna',
    'Vintage',
    'Contemporánea',
    'Exclusiva'
  ],
  occasions: [
    'Compromiso',
    'Boda',
    'Aniversario',
    'Cumpleaños',
    'Graduación',
    'Uso diario'
  ]
};

export default function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);

  const handleMaterialToggle = (material: string) => {
    setSelectedMaterials(prev =>
      prev.includes(material)
        ? prev.filter(m => m !== material)
        : [...prev, material]
    );
  };

  const clearAllFilters = () => {
    setPriceRange([0, 50000]);
    setSelectedMaterials([]);
    setSelectedCollections([]);
    setSelectedOccasions([]);
  };

  const hasActiveFilters = selectedMaterials.length > 0 || 
                          selectedCollections.length > 0 || 
                          selectedOccasions.length > 0 ||
                          priceRange[0] > 0 || 
                          priceRange[1] < 50000;

  return (
    <div className="w-80 bg-white p-6 rounded-lg shadow-sm h-fit sticky top-28">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-serif font-semibold">Filtros</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-gray-500 hover:text-black"
          >
            <X className="h-4 w-4 mr-1" />
            Limpiar
          </Button>
        )}
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h4 className="font-medium mb-4">Rango de Precio</h4>
        <div className="px-2">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={50000}
            min={0}
            step={500}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0].toLocaleString()}</span>
            <span>${priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Materials */}
      <div className="mb-8">
        <h4 className="font-medium mb-4">Materiales</h4>
        <div className="space-y-3 max-h-48 overflow-y-auto">
          {filterOptions.materials.map((material) => (
            <div key={material} className="flex items-center space-x-2">
              <Checkbox
                id={material}
                checked={selectedMaterials.includes(material)}
                onCheckedChange={() => handleMaterialToggle(material)}
              />
              <label
                htmlFor={material}
                className="text-sm text-gray-700 cursor-pointer"
              >
                {material}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Collections */}
      <div className="mb-8">
        <h4 className="font-medium mb-4">Colecciones</h4>
        <div className="space-y-3">
          {filterOptions.collections.map((collection) => (
            <div key={collection} className="flex items-center space-x-2">
              <Checkbox
                id={collection}
                checked={selectedCollections.includes(collection)}
                onCheckedChange={() => {
                  setSelectedCollections(prev =>
                    prev.includes(collection)
                      ? prev.filter(c => c !== collection)
                      : [...prev, collection]
                  );
                }}
              />
              <label
                htmlFor={collection}
                className="text-sm text-gray-700 cursor-pointer"
              >
                {collection}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Occasions */}
      <div className="mb-8">
        <h4 className="font-medium mb-4">Ocasiones</h4>
        <div className="space-y-3">
          {filterOptions.occasions.map((occasion) => (
            <div key={occasion} className="flex items-center space-x-2">
              <Checkbox
                id={occasion}
                checked={selectedOccasions.includes(occasion)}
                onCheckedChange={() => {
                  setSelectedOccasions(prev =>
                    prev.includes(occasion)
                      ? prev.filter(o => o !== occasion)
                      : [...prev, occasion]
                  );
                }}
              />
              <label
                htmlFor={occasion}
                className="text-sm text-gray-700 cursor-pointer"
              >
                {occasion}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}