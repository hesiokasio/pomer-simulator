// components/stages/Stage3_Mix.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { useSimulatorStore } from '@/store/useSimulatorStore';
import styles from '@/styles/Stage3.module.scss';

export default function Stage3_Mix() {
  const { isMixed, setMixed, isResting, setResting, nextStage } = useSimulatorStore();
  const [mixProgress, setMixProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);

  const MIX_THRESHOLD = 2000; // مسافتی که باید با انگشت طی شود تا خمیر آماده شود

  // محاسبه میزان هم‌زدن
const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
  if (isMixed) return;
  
  const distance = Math.abs(info.delta.x) + Math.abs(info.delta.y);
  
  // ابتدا مقدار جدید را محاسبه می‌کنیم
  const newProgress = mixProgress + distance;
  
  // سپس به‌روزرسانی می‌کنیم
  setMixProgress(newProgress);
  
  // چک کردن شرط و تغییر وضعیت خارج از setState
  if (newProgress >= MIX_THRESHOLD) {
    setMixed(true);
  }
};

  // مدیریت تایمر استراحت پلیمرها
  useEffect(() => {
    if (isMixed && !isResting) {
      setResting(true); // شروع فاز استراحت
    }
  }, [isMixed, isResting, setResting]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isResting && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (isResting && timeLeft === 0) {
      nextStage(); // پایان تایمر و رفتن به پرده آخر
    }
    return () => clearTimeout(timer);
  }, [isResting, timeLeft, nextStage]);

  const progressPercentage = Math.min((mixProgress / MIX_THRESHOLD) * 100, 100);

  return (
    <div className={styles.stageContainer}>
      <h2 className={styles.title}>هم‌زدن خمیر</h2>
      <p className={styles.subtitle}>ابزار را روی سطل بکشید و هم بزنید تا خمیر یکدست شود</p>

      <div className={styles.bucketWrapper}>
        <motion.div
          className={styles.mixerTool}
          drag
          dragConstraints={{ top: -50, bottom: 50, left: -50, right: 50 }} // محدود کردن حرکت ابزار در محدوده سطل
          dragElastic={0.1}
          onDrag={handleDrag}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Mix!
        </motion.div>
      </div>

      {/* نوار پیشرفت */}
      <div className={styles.progressContainer}>
        <div 
          className={styles.progressBar} 
          style={{ width: `${progressPercentage}%` }} 
        />
      </div>

      {/* تایمر استراحت روی کل صفحه (فقط وقتی خمیر آماده شد نمایش داده می‌شود) */}
      {isResting && (
        <motion.div 
          className={styles.timerOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div 
            className={styles.timerNumber}
            key={timeLeft}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            {timeLeft}
          </motion.div>
          <div className={styles.timerText}>استراحت شیمیایی پلیمرها...</div>
        </motion.div>
      )}
    </div>
  );
}