import React from 'react';
import Link from 'next/link';
import { Crown, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const footerLinks = {
  productos: [
    { name: 'Anillos de Compromiso', href: '/categoria/anillos' },
    { name: 'Collares Premium', href: '/categoria/collares' },
    { name: 'Pulseras Exclusivas', href: '/categoria/pulseras' },
    { name: 'Aretes Elegantes', href: '/categoria/aretes' },
  ],
  servicio: [
    { name: 'Guía de Tallas', href: '/guia-tallas' },
    { name: 'Cuidado de Joyas', href: '/cuidado' },
    { name: 'Garantía', href: '/garantia' },
    { name: 'Envíos', href: '/envios' },
  ],
  empresa: [
    { name: 'Nuestra Historia', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'Trabaja con Nosotros', href: '/careers' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Crown className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-serif font-bold">Joyeria Italiana</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Más de 50 años creando joyas excepcionales que celebran los momentos 
              más importantes de la vida. Cada pieza es única, como tú.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">Av. Reforma 123, Col. Centro, CDMX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">+52 55 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">info@Joyeria Italiana.mx</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Productos</h4>
            <ul className="space-y-3">
              {footerLinks.productos.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Servicio</h4>
            <ul className="space-y-3">
              {footerLinks.servicio.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 Joyeria Italiana Jewelry. Todos los derechos reservados.
          </div>
          
          {/* Social Media */}
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-yellow-400 p-2">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-yellow-400 p-2">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-yellow-400 p-2">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Legal Links */}
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-yellow-400 transition-colors duration-200">
              Política de Privacidad
            </Link>
            <Link href="/terms" className="hover:text-yellow-400 transition-colors duration-200">
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}