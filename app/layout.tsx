import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Joyeria Italiana - Joyería de Lujo Exclusiva',
  description: 'Descubre nuestra exclusiva colección de joyas de lujo. Anillos, collares, pulseras y aretes únicos crafteados con materiales premium.',
  keywords: 'joyería de lujo, anillos de diamantes, collares premium, pulseras exclusivas, aretes elegantes',
  authors: [{ name: 'Joyeria Italiana Jewelry' }],
  openGraph: {
    title: 'Joyeria Italiana - Joyería de Lujo Exclusiva',
    description: 'Descubre nuestra exclusiva colección de joyas de lujo',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white text-black antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}