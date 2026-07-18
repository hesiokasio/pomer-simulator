// components/landing/HeroSection.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '@/styles/Landing.module.scss';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <motion.div 
        className={styles.heroContent}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className={styles.badge}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          نسل جدید ترمیم درزها
        </motion.div>
        
        <motion.h1 
          className={styles.mainTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          زیبایی بی‌نقص،<br />
          اجرای بی‌دردسر.
        </motion.h1>
        
        <motion.p 
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          پومر؛ پکیج آماده‌به‌کار ترمیم و بازسازی درز کاشی و سرامیک با تکنولوژی پلیمری پیشرفته. بدون نیاز به تخصص، خودتان نصاب خانه‌ی خود باشید.
        </motion.p>

        <motion.div 
          className={styles.actionButtons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <button className={styles.btnPrimary}>
            خرید محصول
          </button>
          <Link href="/tutorial" className={styles.btnSecondary}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            شبیه‌ساز آموزش اجرا
          </Link>
        </motion.div>
      </motion.div>

     <motion.div 
        className={styles.heroImageWrapper}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Image 
          src="/illustration.png" 
          alt="اجرای پومر" 
          width={600} 
          height={600} 
          className={styles.heroIllustration}
          priority // برای لود سریع در هیرو سکشن
        />
      </motion.div>
    </section>
  );
}