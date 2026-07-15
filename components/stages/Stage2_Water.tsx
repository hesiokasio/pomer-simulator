// components/stages/Stage2_Water.tsx
'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSimulatorStore } from '@/store/useSimulatorStore';
import styles from '@/styles/Stage2.module.scss';

export default function Stage2_Water() {
  const { waterScoops, addWater, nextStage } = useSimulatorStore();

  // مانیتور کردن تعداد پیمانه‌ها
  useEffect(() => {
    if (waterScoops === 3) {
      // اگر 3 پیمانه ریخته شد، 1 ثانیه صبر کن تا انیمیشن دیده بشه، بعد برو مرحله بعد
      const timer = setTimeout(() => {
        nextStage();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [waterScoops, nextStage]);

  // محاسبه درصد پر شدن سطل (هر پیمانه 33 درصد)
  const fillPercentage = (waterScoops / 3) * 100;

  return (
    <div className={styles.stageContainer}>
      <h2 className={styles.title}>اضافه کردن آب</h2>
      <p className={styles.subtitle}>
        برای اضافه کردن آب، ۳ بار روی پیمانه ضربه بزنید (پیمانه فعلی: {waterScoops}/3)
      </p>

      {/* پیمانه آب */}
      <motion.div
        className={styles.cup}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9, y: 10 }} // انیمیشن فشرده شدن موقع تپ کردن
        onClick={() => {
          if (waterScoops < 3) addWater();
        }}
      >
        Tap!
      </motion.div>

      {/* سطل و سطح مواد */}
      <div className={styles.bucketWrapper}>
        <motion.div
          className={styles.mixtureLevel}
          initial={{ height: '0%' }}
          animate={{ height: `${fillPercentage}%` }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        />
      </div>
    </div>
  );
}