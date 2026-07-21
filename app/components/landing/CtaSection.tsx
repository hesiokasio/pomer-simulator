// components/landing/CtaSection.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '@/styles/Cta.module.scss';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function CtaSection() {
  return (
    <section id="cta" className={styles.ctaSection}>
      <motion.div 
        className={styles.ctaBox}
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
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
            <a 
              href="https://wa.me/989043719109?text=سلام،%20من%20از%20سایت%20پومر%20پیام%20می‌دم%20و%20قصد%20سفارش%20دارم." 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.btnPrimary}
              style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              سفارش در واتس‌اپ
            </a>

            <a 
              href="tel:+989120000000" 
              className={styles.btnSecondary}
              style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              تماس با کارشناس
            </a>
          </motion.div>
        </div>

        <div className={styles.imageContent}>
          
          <BeforeAfterSlider 
            beforeImage="/before.jpg"
            afterImage="/after.jpg"
          />
          
        </div>

      </motion.div>
    </section>
  );
}