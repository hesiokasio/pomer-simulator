// components/landing/SpecsSection.tsx
'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/Specs.module.scss';

const specsData = [
  { label: "محتویات محصول", value: "پودر پلیمری (آماده‌سازی فقط با آب)" },
  { label: "بسته‌بندی‌ها", value: "۵۰۰ گرم (بندکشی) | ۵ و ۲۰ کیلو (چسب)" },
  { label: "ویژگی ساختاری", value: "آنتی‌باکتریال و ضد قارچ" },
  { label: "زمان خشک شدن اولیه", value: "۲ الی ۳ ساعت" },
  { label: "مقاومت رطوبتی", value: "عایق ۱۰۰٪ (واترپروف)" },
];

const colors = [
  { name: "سفید", hex: "#F8F9FA" },
  { name: "بژ", hex: "#c8a377" },
  { name: "طوسی روشن", hex: "#D9D9D9" },
  { name: "طوسی تیره", hex: "#595959" },
  { name: "قهوه‌ای", hex: "#8B5A2B" },
  { name: "آبی", hex: "#6CA6CD" },
  { name: "سبز", hex: "#71C671" },
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
          <span className={styles.subtitle}>جزئیات فنی پودر بندکشی و چسب کاشی</span>
          <h2 className={styles.title}>استاندارد جدید در ترمیم و عایق‌بندی</h2>
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
            <h3>تنوع رنگی پودر بندکشی متناسب با دکوراسیون شما</h3>
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