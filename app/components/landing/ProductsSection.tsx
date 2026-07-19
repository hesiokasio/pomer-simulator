// components/landing/ProductsSection.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/Products.module.scss';

const products = [
  {
    id: 1,
    tag: "کاربری صنعتی و پروژه‌های بزرگ",
    title: "چسب کاشی پلیمری 20 کیلویی",
    desc: "بالاترین قدرت چسبندگی برای نصب انواع سرامیک و سنگ در متراژ بالا. مقاومت ۱۰۰٪ در برابر رطوبت و تغییرات دمایی.",
    // weight: "بسته‌بندی ۲۰ کیلویی",
    imageSrc: "/images-4.jpg", // <--- جایگذاری عکس سطل 20 کیلویی: مثلا "/product-20kg.jpg"
    altText: "سطل ۲۰ کیلویی چسب کاشی و سرامیک پومر"
  },
  {
    id: 2,
    tag: "کاربری حرفه‌ای و بازسازی",
    title: "چسب کاشی پلیمری 5 کیلویی",
    desc: "ایده‌آل برای نصب سرامیک‌های جدید و بازسازی سرویس‌های بهداشتی با قدرت عایق‌بندی بی‌نظیر و اجرای روان.",
    // weight: "بسته‌بندی ۵ کیلویی",
    imageSrc: "/images-3.jpg", // <--- جایگذاری عکس سطل 5 کیلویی: مثلا "/product-5kg.jpg"
    altText: "چسب کاشی پلیمری ۵ کیلویی پومر"
  },
  {
    id: 3,
    tag: "کاربری خانگی و ترمیم درزها",
    title: "پودر بندکشی آماده 500 گرمی",
    desc: "بهترین انتخاب برای ترمیم سریع درزها بدون نیاز به نصاب. ضد قارچ، ضد آب و دارای ثبات رنگ دائمی برای حمام.",
    // weight: "قوطی ۵۰۰ گرمی",
    imageSrc: "/images-2.jpg", // <--- جایگذاری عکس قوطی 500 گرمی: مثلا "/product-500g.jpg"
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
          <span className={styles.subtitle}>یک فرمول، ابعاد مختلف</span>
          <h2 className={styles.title}>لاین محصولات پومر</h2>
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
                    style={{ objectFit: 'cover' }} // <--- فقط همین یک خط تغییر کرد
                  />
                ) : (
                  <span className={styles.placeholderText}>محل قرارگیری عکس محصول</span>
                )}
              </div>

              {/* بخش محتوای متنی */}
              <div className={styles.cardContent}>
                <span className={styles.tag}>{product.tag}</span>
                <h3 className={styles.cardTitle}>{product.title}</h3>
                <p className={styles.cardDesc}>{product.desc}</p>
                
                {/* <div className={styles.weightBadge}>
                  {product.weight}
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}