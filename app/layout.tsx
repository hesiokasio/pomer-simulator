// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import './globals.scss';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import SchemaMarkup from '@/app/components/seo/SchemaMarkup';

import { Vazirmatn } from 'next/font/google';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700', '800'],
});

export const viewport: Viewport = {
  themeColor: '#c8a377', 
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://promer.ir'),
  title: {
    default: 'پرومر (PROMER) | خرید پودر بندکشی نانو و چسب کاشی ضد آب',
    template: '%s | پرومر'
  },
  description: 'خرید آنلاین بهترین پودر بندکشی ضد آب و رنگی و چسب کاشی آماده. استعلام قیمت، مشخصات و آموزش تصویری اجرای بندکشی سرامیک و کاشی با پرومر (PROMER).',
  keywords: [
    'پودر بندکشی', 
    'پودر بندکشی ضد آب', 
    'پودر بندکشی نانو', 
    'چسب کاشی', 
    'قیمت پودر بندکشی', 
    'آموزش بندکشی سرامیک', 
    'بهترین مارک پودر بندکشی'
  ],
  icons: {
    icon: '/favicon.svg',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'پودر بندکشی و چسب کاشی پرومر',
    description: 'خرید باکیفیت‌ترین پودر بندکشی نانو و ضد آب. مشاهده قیمت و آموزش اجرای آسان در خانه.',
    url: 'https://promer.ir',
    siteName: 'PROMER',
    locale: 'fa_IR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification=PRjeISD2GMIzGTOD9KgofZjRN4qPbEamKQibSr9nYzA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <SchemaMarkup />
        
        <Header />
        
        <main style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          flex: 1, 
          paddingTop: '80px' 
        }}>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}