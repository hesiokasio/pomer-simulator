// components/landing/CtaSection.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/Cta.module.scss';

export default function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <motion.div 
        className={styles.ctaBox}
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
        {/* ستون راست: محتوا و دکمه‌ها */}
        <div className={styles.textContent}>
          
          <motion.h2 
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          زمان نوسازی رسیده
          </motion.h2>
          <p className={styles.subtitle}>
           پومر همه چیز را برای ترمیم سریع و آسان کاشی و سرامیک در اختیار شما قرار می‌دهد
          </p>
          
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
        </div>

        {/* ستون چپ: عکس محصول */}
        <div className={styles.imageContent}>
          <div className={styles.imageBg}></div>
          <Image 
            src="/images-4.jpg" 
            alt="پکیج کامل خمیر بندکشی پومر"
            fill
            style={{ 
              objectFit: 'cover', 
              borderRadius: '24px' // این خط رو اضافه کردم تا گوشه‌های عکس نرم و اپلی بشه
            }} 
          />
        </div>

      </motion.div>
    </section>
  );
}