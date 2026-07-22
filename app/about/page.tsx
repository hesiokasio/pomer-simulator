// app/about/page.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import styles from '@/styles/About.module.scss';

export default function AboutPage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <main className={styles.aboutPage}>
      <div className={styles.container}>

        {/* داستان */}
        <motion.section
          className={styles.storySection}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            className={styles.title}
            variants={fadeUp}
          >
            پرومر؛ از آزمایشگاه تا خانه شما
          </motion.h1>

          <motion.p
            className={styles.paragraph}
            variants={fadeUp}
          >
            داستان پرومر از یک سوال ساده شروع شد؛ آیا می توان کیفیت و دوام مصالح
            صنعتی را در قالب محصولی ساده و قابل استفاده برای همه ارائه کرد؟
            پاسخ این سوال، نتیجه ماه ها مطالعه، آزمایش و توسعه بود تا محصولی
            ساخته شود که ترمیم درزهای کاشی و سرامیک را برای هر کسی آسان کند.
          </motion.p>

          <motion.p
            className={styles.paragraph}
            variants={fadeUp}
          >
            آنچه در ظاهر یک خمیر بندکشی ساده دیده می شود، حاصل تحقیق در زمینه
            پلیمرها، آزمایش های دقیق و بارها اصلاح فرمولاسیون است. هدف ما تنها
            تولید یک محصول نبود؛ می خواستیم راهکاری ارائه دهیم که بدون نیاز به
            نصاب یا ابزار تخصصی، نتیجه ای تمیز، بادوام و حرفه ای ایجاد کند.
          </motion.p>
        </motion.section>

        {/* فرمولاسیون */}
        <motion.section
          className={styles.formulaSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h2
            className={styles.btitle}
            variants={fadeUp}
          >
            فرمولاسیون بهینه؛ تفاوتی که ماندگار است
          </motion.h2>

          <motion.p
            className={styles.bparagraph}
            variants={fadeUp}
          >
            پرومر با تکیه بر دانش مهندسی مواد و تجربه عملی توسعه یافته است.
            فرمول نهایی پس از آزمایش های متعدد به تعادلی رسیده که هم استفاده از
            آن آسان باشد و هم دوام و عملکردی قابل اعتماد ارائه دهد. این فرمول
            بر سه اصل استوار است.
          </motion.p>

          <div className={styles.grid}>
            {/* کارت اول */}
            <motion.div
              className={styles.card}
              variants={fadeUp}
            >
              <div className={styles.icon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>

              <h3>دقت در فرمولاسیون</h3>

              <p>
                ترکیب ذرات بسیار ریز با پلیمرهای پیشرفته، بافتی نرم و یکنواخت
                ایجاد می کند که به خوبی در عمق درزها نفوذ کرده و سطحی یکدست به
                وجود می آورد.
              </p>
            </motion.div>

            {/* کارت دوم */}
            <motion.div
              className={styles.card}
              variants={fadeUp}
            >
              <div className={styles.icon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>

              <h3>دوام و اجرای آسان</h3>

              <p>
                فرمول پرومر در برابر آب و رطوبت مقاومت بالایی ایجاد می کند و در
                عین حال بدون ابزار تخصصی و تنها در چند مرحله ساده قابل اجرا
                است.
              </p>
            </motion.div>

            {/* کارت سوم */}
            <motion.div
              className={styles.card}
              variants={fadeUp}
            >
              <div className={styles.icon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>

              <h3>کیفیت ماندگار</h3>

              <p>
                هر مرحله از توسعه پرومر با آزمایش های دقیق همراه بوده تا محصولی
                تولید شود که درزهای کاشی و سرامیک را برای مدت طولانی تمیز،
                مقاوم و زیبا نگه دارد.
              </p>
            </motion.div>
          </div>

          <motion.p
            className={styles.ctitle}
            variants={fadeUp}
            style={{
              textAlign: 'center',
              marginTop: '4rem',
              maxWidth: '850px',
              marginInline: 'auto',
            }}
          >
            پرومر نتیجه ترکیب دانش، تجربه و طراحی هوشمند است؛ محصولی که کیفیت یک
            راهکار حرفه ای را در ساده ترین شکل ممکن به خانه شما می آورد.
          </motion.p>
        </motion.section>
      </div>
    </main>
  );
}