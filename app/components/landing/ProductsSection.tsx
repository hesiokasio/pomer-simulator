// components/landing/ProductsSection.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/Products.module.scss';

// متون سئوشده و خلاصه‌تر با تفکیک وزن
const products = [
  {
    id: 1,
    title: "چسب کاشی پلیمری",
    weight: "۲۰ کیلوگرم",
    desc: "چسبندگی فوق‌العاده برای نصب سرامیک و سنگ در پروژه‌های بزرگ. کاملا ضد آب و مقاوم در برابر تغییرات شدید دمایی.",
    imageSrc: "/pomer-20k.jpg",
    altText: "سطل ۲۰ کیلویی چسب کاشی و سرامیک پومر"
  },
  {
    id: 2,
    title: "چسب کاشی پلیمری",
    weight: "۵ کیلوگرم",
    desc: "ایده‌آل برای بازسازی و نصب سرامیک در سرویس‌های بهداشتی. اجرای سریع همراه با عایق‌بندی رطوبتی بی‌نظیر.",
    imageSrc: "/pomer-5k.jpg",
    altText: "چسب کاشی پلیمری ۵ کیلویی پومر"
  },
  {
    id: 3,
    title: "پودر بندکشی آماده",
    weight: "۵۰۰ گرم",
    desc: "ترمیم سریع درزهای کاشی بدون نیاز به مهارت فنی. ضد آب، ضد قارچ و دارای ثبات رنگ همیشگی برای حمام.",
    imageSrc: "/pomer-500g.jpg",
    altText: "پودر بندکشی و ترمیم درز کاشی ۵۰۰ گرمی پومر"
  }
];

export default function ProductsSection() {
  return (
    <section className={styles.productsSection}>
      <div className={styles.container}>
        
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.title}>محصولات پومر</h2>
          <p>
           مجموعه‌ای کامل از محصولات تخصصی برای بندکشی، ترمیم و نصب کاشی و سرامیک.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className={styles.productCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* بخش عکس محصول */}
              <div className={styles.imageWrapper}>
                {product.imageSrc ? (
                  <Image 
                    src={product.imageSrc} 
                    alt={product.altText} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <span className={styles.placeholderText}>محل قرارگیری عکس محصول</span>
                )}
                
                {/* بج وزن رو آوردیم اینجا تا بتونه روی مرز عکس قرار بگیره */}
                <span className={styles.weightBadge}>{product.weight}</span>
              </div>

              {/* بخش محتوای متنی */}
              <div className={styles.cardContent}>
                {/* بج از اینجا حذف شد */}
                <h3 className={styles.cardTitle}>{product.title}</h3>
                <p className={styles.cardDesc}>{product.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}