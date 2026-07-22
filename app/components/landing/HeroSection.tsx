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
        
        <motion.h1 
          className={styles.mainTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
         پودر بندکشی و چسب کاشی پرومر
        </motion.h1>
        
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
          <Link href="/#cta" className={styles.btnPrimary}>
             خرید پکیج پرومر
          </Link>
          <Link href="/tutorial" className={styles.btnSecondary}>
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
          alt="پکیج ترمیم درز کاشی و خمیر بندکشی پرومر"
          width={650} 
          height={650} 
          className={styles.heroIllustration}
          priority 
        />
      </motion.div>
    </section>
  );
}