'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/Layout.module.scss';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        
        {/* <div className={styles.headerActions}>
          <button className={styles.buyBtn}>خرید محصول</button>
        </div> */}
        
        <nav className={styles.nav}>
         <Link href="/" className={pathname === '/' ? styles.active : ''}>خانه</Link>
         <Link href="/tutorial" className={pathname === '/tutorial' ? styles.active : ''}>آموزش اجرا</Link>
         <Link href="/#features">ویژگی‌ها</Link>
         <Link href="/#cta">ثبت سفارش</Link>
         <Link href="/about" className={pathname === '/about' ? styles.active : ''}>درباره ما</Link>
        </nav>
        

        <Link href="/" className={styles.logo}>
          <Image 
            src="/pomer-light.svg" 
            alt="لوگوی پومر" 
            width={120} // عرض لوگو - با توجه به فایل اصلیت می‌تونی کم و زیادش کنی
            height={40} // ارتفاع لوگو
            priority // به مرورگر میگه این عکس خیلی مهمه و همون اول لودش کن
          />
        </Link>
      </div>
    </header>
  );
}