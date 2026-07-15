// src/app/layout.tsx

import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'POMER | شبیه‌ساز اجرای بندکشی',
  description: 'تجربه تعاملی و آسان استفاده از کیت ترمیم بندکشی پومر',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <main className="simulator-container">
          {children}
        </main>
      </body>
    </html>
  );
}