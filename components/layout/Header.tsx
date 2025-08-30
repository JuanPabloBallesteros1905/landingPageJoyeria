'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Menu, X, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SearchDialog from '@/components/ui/SearchDialog';
import CartSidebar from '@/components/ui/CartSidebar';

const categories = [
  { name: 'Anillos', href: '/categoria/anillos' },
  { name: 'Collares', href: '/categoria/collares' },
  { name: 'Pulseras', href: '/categoria/pulseras' },
  { name: 'Aretes', href: '/categoria/aretes' },
  { name: 'Colecciones Exclusivas', href: '/categoria/exclusivas' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Crown className="h-8 w-8 text-black group-hover:text-yellow-600 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-20 rounded-full blur-sm transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-serif font-bold text-black tracking-tight">Joyeria Italiana</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="text-sm font-medium text-gray-700 hover:text-black relative group py-2"
                >
                  {category.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(true)}
                className="hidden sm:flex items-center space-x-2 hover:bg-gray-100"
              >
                <Search className="h-4 w-4" />
                <span className="hidden md:inline">Buscar</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCartOpen(true)}
                className="relative hover:bg-gray-100"
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-yellow-600 text-white text-xs rounded-full flex items-center justify-center">
                  2
                </span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg">
              <nav className="px-4 py-4 space-y-2">
                <div className="sm:hidden pb-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(true)}
                    className="w-full justify-start"
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Buscar productos
                  </Button>
                </div>
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="block py-2 text-gray-700 hover:text-black font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}