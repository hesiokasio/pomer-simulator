// components/landing/ComparisonSection.tsx
'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/Comparison.module.scss';

const traditionalPoints = [
  "نیاز به نصاب کاشی و پرداخت هزینه‌های بالای دستمزد",
  "پروسه کثیف تهیه دوغاب، زمان‌بر و همراه با ریخت‌وپاش",
  "ترک‌خوردگی، نشت آب و زرد شدن درزها به مرور زمان",
  "از بین رفتن بندکشی در برابر جوهر نمک و شوینده‌ها"
];

const promerPoints = [
  "اجرای سریع پودر پلیمری توسط خود شما (بدون نصاب)",
  "آماده‌سازی آسان فقط با آب، بدون کثیف‌کاری و دردسر",
  "عایق ۱۰۰٪ ضد آب، رطوبت و مانع رشد قارچ و کپک",
  "ثبات دائمی رنگ‌ها و مقاومت بالا در برابر اسیدها"
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
          <span className={styles.subtitle}>مقایسه پودر بندکشی پرومر با دوغاب سنتی</span>
          <h2 className={styles.title}>جایگزین قطعی روش‌های قدیمی؛ هوشمندانه بازسازی کنید.</h2>
        </motion.div>

        <div className={styles.cardsWrapper}>
          
          <motion.div 
            className={`${styles.card} ${styles.cardpromer}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.badge}>نسل جدید عایق‌ها</div>
            <h3>راه‌حل پرومر (راحتی و کیفیت مطلق)</h3>
            <div>
              {promerPoints.map((point, index) => (
                <div key={index} className={styles.listItem}>
                  <div className={`${styles.iconBox} ${styles.iconBoxGold}`}>
                    <CheckIcon />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={`${styles.card} ${styles.cardTraditional}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3>روش‌های سنتی (دردسر و هزینه)</h3>
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