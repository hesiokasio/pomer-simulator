// components/landing/FaqSection.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/styles/Faq.module.scss';

const faqs = [
  {
    question: "آیا برای استفاده از پودر پرومر به نصاب یا بنا نیاز دارم؟",
    answer: "خیر پودر بندکشی پرومر برای استفاده خانگی طراحی شده و بدون تجربه هم میتوانید درز کاشی و سرامیک را به راحتی ترمیم و آب بندی کنید"
  },
  {
    question: "آیا قبل از اجرا باید بندکشی های قدیمی را کامل بردارم",
    answer: "خیر کافی است سطح تمیز و خشک باشد سپس پودر بندکشی پرومر را روی درزهای قبلی اجرا کنید مگر اینکه بندهای قدیمی جدا شده باشند"
  },
  {
    question: "آیا این محصول در برابر آب و شوینده مقاوم است",
    answer: "بله بعد از خشک شدن در برابر نفوذ آب مقاوم است و برای حمام سرویس بهداشتی آشپزخانه و محیط های مرطوب گزینه مناسبی است"
  },
  {
    question: "هر بسته ۵۰۰ گرمی برای چه متراژی کافی است",
    answer: "هر بسته ۵۰۰ گرمی با توجه به عرض و عمق بندها معمولا برای پوشش ۵ تا ۸ متر مربع کافی است"
  },
  {
    question: "بعد از اجرا چه مدت باید صبر کنم",
    answer: "خشک شدن اولیه حدود ۲ تا ۳ ساعت زمان میبرد اما برای رسیدن به بهترین نتیجه تا ۲۴ ساعت سطح را خیس نکنید"
  }
]
export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

 return (
    <section id="faq" className={styles.faqSection}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.title}>سوالات متداول درباره پرومر</h2>
        </motion.div>

        <div className={styles.faqCard}>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div 
                  key={index}
                  className={`${styles.faqItem} ${isActive ? styles.active : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button 
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isActive}
                  >
                    <h3>{faq.question}</h3>
                    <span className={styles.icon}>
                      <svg 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        style={{ 
                          transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease'
                        }}
                      >
                        {isActive ? (
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        ) : (
                          <>
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </>
                        )}
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        className={styles.faqAnswer}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}