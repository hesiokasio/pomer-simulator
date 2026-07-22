// components/landing/ProductsSection.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/Products.module.scss';

const products = [
  {
    id: 1,
    title: "پودر چسب کاشی پلیمری",
    weight: "۲۰ کیلوگرم",
    desc: "نسخه مقرون‌به‌صرفه با همان فرمولاسیون پلیمری پیشرفته پرومر. ایده‌آل برای نصب سرامیک و بازسازی‌های گسترده‌تر خانگی. صد در صد ضد آب و آماده‌سازی آسان (فقط با افزودن آب).",
    imageSrc: "/promer-20k.jpg",
    altText: "خرید پودر چسب کاشی پلیمری ۲۰ کیلویی پرومر برای نصب سرامیک"
  },
  {
    id: 2,
    title: "پودر چسب کاشی پلیمری",
    weight: "۵ کیلوگرم",
    desc: "بسته‌بندی کوچک‌تر با همان قدرت چسبندگی و عایق‌بندی رطوبتی ۱۰۰٪. بهترین انتخاب برای ترمیم و نصب سریع در مساحت‌های کم مانند حمام و سرویس بهداشتی توسط خود شما.",
    imageSrc: "/promer-5k.jpg",
    altText: "پودر چسب کاشی پلیمری ۵ کیلویی پرومر ضد آب"
  },
  {
    id: 3,
    title: "کیت پودر بندکشی رنگی (آماده)",
    weight: "۵۰۰ گرم",
    desc: "ترمیم سریع درزها بدون نیاز به نصاب. عرضه شده در ۷ رنگ جذاب (طوسی تیره، طوسی روشن، بژ، قهوه‌ای، سفید، آبی و سبز) با ثبات رنگ همیشگی.",
    imageSrc: "/promer-500g.jpg",
    altText: "کیت پودر بندکشی رنگی و ترمیم درز کاشی ۵۰۰ گرمی پرومر در رنگ‌های متنوع"
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
          <h2 className={styles.title}>خرید چسب کاشی و پودر بندکشی ضد آب پرومر</h2>
          <p>
           مجموعه‌ای لوکس و تخصصی از محصولات ترمیم و نصب کاشی، طراحی شده برای اجرای آسان در خانه بدون نیاز به تخریب.
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
              <div className={styles.imageWrapper}>
                {product.imageSrc ? (
                  <Image 
                    src={product.imageSrc} 
                    alt={product.altText} 
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <span className={styles.placeholderText}>محل قرارگیری عکس محصول</span>
                )}
                
                <span className={styles.weightBadge}>{product.weight}</span>
              </div>

              <div className={styles.cardContent}>
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