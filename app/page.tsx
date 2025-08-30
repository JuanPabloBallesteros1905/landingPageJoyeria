import Hero from '@/components/sections/Hero';
import FeaturedCollections from '@/components/sections/FeaturedCollections';
import BestSellers from '@/components/sections/BestSellers';
import AboutSection from '@/components/sections/AboutSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aurelia - Joyería de Lujo Exclusiva | Colección Premium',
  description: 'Descubre la exclusiva colección de joyas de lujo Aurelia. Anillos de compromiso únicos, collares de diamantes, pulseras premium y aretes elegantes. Crafteadas con materiales excepcionales.',
  keywords: 'joyería de lujo, anillos de compromiso, diamantes, oro, platino, joyas exclusivas, colección premium',
  openGraph: {
    title: 'Aurelia - Joyería de Lujo Exclusiva',
    description: 'Colección exclusiva de joyas de lujo crafteadas con materiales excepcionales',
    images: ['/images/hero-jewelry.jpg'],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedCollections />
      <BestSellers />
      <AboutSection />
      <NewsletterSection />
    </div>
  );
}