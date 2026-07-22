// components/landing/FeaturesSection.tsx
'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/Features.module.scss';

const featuresData = [
  {
    id: "01",
    title: "اجرای آسان در خانه (بدون نصاب)",
    desc: "پرومر به گونه‌ای طراحی شده که هر فردی بدون تجربه قبلی بتواند در کمترین زمان، کاشی‌های لق را بچسباند و بندکشی‌ها را مثل یک حرفه‌ای ترمیم کند.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
      </svg>
    )
  },
  {
    id: "02",
    title: "عایق ۱۰۰٪ ضد آب و رطوبت",
    desc: "فرمولاسیون پلیمری پیشرفته که مانع نفوذ آب شده و بهترین گزینه به عنوان چسب کاشی و پودر بندکشی برای حمام، سرویس بهداشتی و آشپزخانه است.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
      </svg>
    )
  },
  {
    id: "03",
    title: "آنتی‌باکتریال و ضد جرم",
    desc: "ساختار یکپارچه و مقاوم این محصول، سطحی کاملاً بهداشتی ایجاد می‌کند که مانع از رشد هرگونه قارچ، کپک و سیاهی در درزها می‌شود.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
      </svg>
    )
  },
  {
    id: "04",
    title: "ماندگاری رنگ و مقاومت بالا",
    desc: "برخلاف دوغاب‌های سیمانی سنتی، پرومر تغییر رنگ نمی‌دهد و در برابر قوی‌ترین شوینده‌های خانگی و اسیدی کاملاً مقاوم است.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
      </svg>
    )
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.container}>
        
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.title}>چرا پودر بندکشی ضد آب و چسب کاشی پرومر؟</h2>
          <p>نسل جدید عایق‌های رطوبتی با اجرای خانگی و سریع، بدون نیاز به تخریب و نصاب، انتخابی بی‌نقص برای بازسازی و ترمیم درز کاشی و سرامیک.</p>
        </motion.div>

        <div className={styles.grid}>
          {featuresData.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className={styles.cardNumber}>{feature.id}</div>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}