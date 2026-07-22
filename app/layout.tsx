// app/layout.tsx
import './globals.scss';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';

import { Vazirmatn } from 'next/font/google';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700', '800'],
});

export const metadata = {
  title: 'promer | پرومر',
  description: 'نسل جدید ترمیم درز کاشی',
  icons: {
    icon: '/favicon.svg',
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