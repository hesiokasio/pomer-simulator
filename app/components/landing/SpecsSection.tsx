// components/landing/SpecsSection.tsx
'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/Specs.module.scss';

const specsData = [
  { label: "محتویات پکیج", value: "پودر پلیمری + مکمل مایع" },
  { label: "وزن خالص", value: "۴۰۰ گرم" },
  { label: "میزان پوشش‌دهی", value: "۵ تا ۸ متر مربع" },
  { label: "زمان خشک شدن اولیه", value: "۲ ساعت" },
  { label: "مقاومت در برابر آب", value: "۱۰۰٪ (واترپروف)" },
];

const colors = [
  { name: "سفید", hex: "#ffffff" },
  { name: "بژ", hex: "#e8d8c8" },
  { name: "آبی ملایم", hex: "#d0e0e3" },
  { name: "سبز ملایم", hex: "#d9ead3" },
  { name: "طوسی", hex: "#999999" },
  { name: "مشکی", hex: "#333333" },
];

export default function SpecsSection() {
  return (
    <section id="specs" className={styles.specsSection}>
      <div className={styles.container}>
        
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.subtitle}>دقیق و مهندسی‌شده</span>
          <h2 className={styles.title}>مشخصات فنی پومر</h2>
        </motion.div>

        <div className={styles.content}>
          <motion.div 
            className={styles.specsList}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {specsData.map((spec, index) => (
              <div key={index} className={styles.specItem}>
                <span className={styles.specLabel}>{spec.label}</span>
                <span className={styles.specValue}>{spec.value}</span>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className={styles.colorsBox}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3>تنوع رنگی متناسب با دکوراسیون شما</h3>
            <div className={styles.colorGrid}>
              {colors.map((color, index) => (
                <div 
                  key={index} 
                  className={styles.colorCircle}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}