'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/Layout.module.scss';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        
        <button 
          className={`${styles.hamburgerBtn} ${isMobileMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navActive : ''}`}>
         <Link href="/" className={pathname === '/' ? styles.active : ''} onClick={() => setIsMobileMenuOpen(false)}>خانه</Link>
         <Link href="/tutorial" className={pathname === '/tutorial' ? styles.active : ''} onClick={() => setIsMobileMenuOpen(false)}>آموزش اجرا</Link>
         <Link href="/#features" onClick={() => setIsMobileMenuOpen(false)}>ویژگی‌ها</Link>
         <Link href="/#cta" onClick={() => setIsMobileMenuOpen(false)}>ثبت سفارش</Link>
         <Link href="/about" className={pathname === '/about' ? styles.active : ''} onClick={() => setIsMobileMenuOpen(false)}>درباره ما</Link>
        </nav>
        
        <Link href="/" className={styles.logo}>
          <Image 
            src="/pomer-light.svg" 
            alt="لوگوی پومر" 
            width={120} 
            height={40} 
            priority 
          />
        </Link>
      </div>
    </header>
  );
}