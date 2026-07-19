// components/layout/Footer.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Layout.module.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        
        {/* --- سمت راست: دسترسی سریع و اطلاعات تماس --- */}
        <div className={styles.rightSection}>
          
          <nav className={styles.navGroup}>
            <h4>دسترسی سریع</h4>
            <Link href="/">صفحه اصلی</Link>
            <Link href="/tutorial">آموزش اجرا</Link>
            <Link href="/#features">ویژگی‌ها</Link>
            <Link href="/#cta">ثبت سفارش</Link>
            <Link href="/about">درباره ما</Link>
          </nav>

          <div className={styles.contactGroup}>
            <h4>ارتباط با ما</h4>
            
            {/* لینک تماس تلفنی با آیکون */}
            <a href="tel:+989120000000">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              ۰۹۱۲۰۰۰۰۰۰۰
            </a>

            {/* لینک واتس‌اپ با آیکون */}
            <a href="https://wa.me/989120000000" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              پشتیبانی واتس‌اپ
            </a>

            {/* لینک ایمیل با آیکون */}
            {/* <a href="mailto:info@pomer.ir">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              info@pomer.ir
            </a> */}
          </div>

        </div>

        {/* --- سمت چپ: لوگو و کپی‌رایت --- */}
        <div className={styles.leftSection}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/pomer-dark.svg" // ترجیحاً لوگوی روشن برای پس‌زمینه تیره
              alt="لوگوی پومر" 
              width={120} 
              height={40} 
              priority 
            />
          </Link>
          <p className={styles.tagline}>
            نسل جدید ترمیم درزها. ساده، مقاوم و زیبا برای خانه‌ی شما.
          </p>
          <p className={styles.copyright}>
            © {currentYear} تمامی حقوق برای پومر محفوظ است.
          </p>
        </div>

      </div>
    </footer>
  );
}