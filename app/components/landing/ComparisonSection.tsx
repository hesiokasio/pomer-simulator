// components/landing/ComparisonSection.tsx
'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/Comparison.module.scss';

const traditionalPoints = [
  "نیاز به نصاب حرفه‌ای و صرف هزینه دستمزد",
  "پروسه کثیف، زمان‌بر و نیاز به ابزارهای متعدد",
  "امکان نشت آب و تغییر رنگ به مرور زمان",
  "کاهش مقاومت در برابر شوینده‌های شیمیایی"
];

const pomerPoints = [
  "اجرای سریع و آسان توسط خود شما",
  "پکیج کامل بدون نیاز به ابزار جانبی و کثیف‌کاری",
  "مقاومت ۱۰۰٪ در برابر نفوذ آب، رطوبت و قارچ",
  "ثبات رنگ دائمی و مقاوم در برابر قوی‌ترین شوینده‌ها"
];

const CrossIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function ComparisonSection() {
  return (
    <section className={styles.comparisonSection}>
      <div className={styles.container}>
        
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.subtitle}>یک انتخاب ساده</span>
          <h2 className={styles.title}>هوشمندانه تعمیر کنید، نه سخت‌تر.</h2>
        </motion.div>

        <div className={styles.cardsWrapper}>
          
          {/* کارت پومر (آوردیمش سمت راست چون سایت RTL هست) */}
          <motion.div 
            className={`${styles.card} ${styles.cardPomer}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.badge}>راه‌حل هوشمندانه</div>
            <h3>راه‌حل پومر (راحتی مطلق)</h3>
            <div>
              {pomerPoints.map((point, index) => (
                <div key={index} className={styles.listItem}>
                  <div className={`${styles.iconBox} ${styles.iconBoxGold}`}>
                    <CheckIcon />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* کارت روش سنتی */}
          <motion.div 
            className={`${styles.card} ${styles.cardTraditional}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3>روش سنتی (دردسرها)</h3>
            <div>
              {traditionalPoints.map((point, index) => (
                <div key={index} className={styles.listItem}>
                  <div className={`${styles.iconBox} ${styles.iconBoxRed}`}>
                    <CrossIcon />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}