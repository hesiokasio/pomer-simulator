// components/landing/HeroSection.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/Landing.module.scss';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <motion.div 
        className={styles.heroContent}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* <motion.div 
          className={styles.badge}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span>فناوری پلیمری پیشرفته</span> کلمه کلیدی اول
        </motion.div> */}
        
        {/* H1 سئو شده: ترکیب شعار + هدف جستجوی کاربر */}
        <motion.h1 
          className={styles.mainTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
         پودر بندکشی و چسب کاشی پومر
        </motion.h1>
        
        {/* H2 سئو شده: توضیح محصول و ارزش‌های اصلی */}
        <motion.h2 
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          راهکاری حرفه‌ای برای نصب، بندکشی و ترمیم کاشی و سرامیک
          </motion.h2>
        <motion.div 
          className={styles.actionButtons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <button className={styles.btnPrimary}>
            خرید پکیج پومر
          </button>
          <Link href="/tutorial" className={styles.btnSecondary}>
            {/* <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg> */}
            شبیه‌ساز آموزش اجرا
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        className={styles.heroImageWrapper}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Image 
          src="/illustration.png" 
          alt="پکیج ترمیم درز کاشی و خمیر بندکشی پومر" /* Alt سئو شده بسیار مهم */
          width={650} 
          height={650} 
          className={styles.heroIllustration}
          priority 
        />
      </motion.div>
    </section>
  );
}