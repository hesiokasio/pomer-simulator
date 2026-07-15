// components/stages/Stage1_Unbox.tsx
'use client';

import { motion, PanInfo } from 'framer-motion';
import { useSimulatorStore } from '@/store/useSimulatorStore';
import styles from '@/styles/Stage1.module.scss';

export default function Stage1_Unbox() {
  const nextStage = useSimulatorStore((state) => state.nextStage);

  // این تابع چک می‌کند که آیا کاربر درِ سطل را به اندازه کافی کشیده است یا خیر
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // اگر کاربر در را بیشتر از 100 پیکسل به بالا (y منفی) یا چپ و راست کشید
    if (info.offset.y < -100 || Math.abs(info.offset.x) > 100) {
      nextStage(); // رفتن به پرده دوم
    }
  };

  return (
    <div className={styles.stageContainer}>
      <h2 className={styles.title}>شروع یک اجرای تمیز و راحت!</h2>
      <p className={styles.subtitle}>برای باز کردن کیت پومر، درِ سطل را به بیرون بکشید</p>
      
      <div className={styles.bucketWrapper}>
        {/* درِ سطل (Draggable) */}
        <motion.div
          className={styles.lid}
          drag
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }} // باعث میشه مثل فنر برگرده سر جاش اگه کم کشیده بشه
          dragElastic={0.8}
          onDragEnd={handleDragEnd}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* جایگزین این تگ بعداً عکس PNG درِ سطل خواهد شد */}
          <span className={styles.swipeHint}>Swipe ↑</span>
        </motion.div>

        {/* بدنه سطل */}
        <div className={styles.bucket}>
          {/* جایگزین این تگ بعداً عکس PNG بدنه سطل خواهد شد */}
          POMER
        </div>
      </div>
    </div>
  );
}