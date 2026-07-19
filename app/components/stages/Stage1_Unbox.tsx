// components/stages/Stage1_Unbox.tsx
'use client';

import { useState } from 'react';
import { motion, PanInfo, useAnimation } from 'framer-motion';
// اینجا POWDER_THEMES رو کنار useSimulatorStore ایمپورت می‌کنیم:
import { useSimulatorStore, POWDER_THEMES } from '@/store/useSimulatorStore';
import styles from '@/styles/Stage1.module.scss';

export default function Stage1_Unbox() {
  // به جای useState، حالا activeTheme و setActiveTheme رو از استور گلوبال می‌گیریم
  const { nextStage, activeTheme, setActiveTheme } = useSimulatorStore();
  
  const controls = useAnimation();
  const [isOpening, setIsOpening] = useState(false);

  const handleDragEnd = async (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (isOpening) return;

    if (Math.abs(info.offset.x) > 50 || Math.abs(info.velocity.x) > 200) {
      setIsOpening(true);
      const direction = info.offset.x > 0 ? 1 : -1;

      await controls.start({
        backgroundPositionX: `${direction * 1500}px`, 
        y: -45, 
        transition: { duration: 1.2, ease: "easeOut" }
      });

      nextStage();
    }
  };

  return (
    <div className={styles.stageContainer}>
      <div className={styles.textWrap}>
        <h2 className={styles.title}>شروع یک اجرای تمیز و راحت!</h2>
        <p className={styles.subtitle}>برای باز کردن پومر، یک بار روی در بکشید</p>
      </div>
      
      <div className={styles.bucketWrapper}>
        <motion.div
          className={styles.lid}
          drag={!isOpening ? "x" : false} 
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.8}
          onDragEnd={handleDragEnd}
          animate={controls}
          whileHover={{ scale: 1.02 }}
          whileTap={!isOpening ? { scale: 0.95 } : {}}
        >
          {!isOpening && (
            <motion.div
              className={styles.handIndicator}
              animate={{ x: [-45, 45] }} 
              transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5C12.88 5 14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6C13 6.67 12.33 6 11.5 6S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.04.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.21 0-.69-.38-1.32-1-1.61z" />
              </svg>
            </motion.div>
          )}
        </motion.div>
        
        <div className={styles.bucket}>
          <svg className={styles.powderSvg} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150' preserveAspectRatio='none'>
            <defs>
              <clipPath id='hillClip'>
                <path d='M -10 160 L -10 70 C 35 60, 70 25, 110 40 C 160 60, 180 65, 220 50 L 220 160 Z'/>
              </clipPath>
            </defs>
            <g clipPath='url(#hillClip)'>
              <rect x='-10' y='-10' width='240' height='180' fill={activeTheme.colors.light} className={styles.svgPath}/>
              <path d='M 100 -10 C 115 70, 140 120, 220 150 L 220 -10 Z' fill={activeTheme.colors.shadow} className={styles.svgPath}/>
              
              <circle cx='80' cy='65' r='3.5' fill={activeTheme.colors.dot} className={styles.svgPath}/>
              <circle cx='50' cy='115' r='4' fill={activeTheme.colors.dot} opacity='0.8' className={styles.svgPath}/>
              <circle cx='105' cy='55' r='2' fill={activeTheme.colors.dot} className={styles.svgPath}/>
              <circle cx='35' cy='135' r='2.5' fill={activeTheme.colors.dot} className={styles.svgPath}/>
              <circle cx='95' cy='95' r='3' fill={activeTheme.colors.dot} opacity='0.6' className={styles.svgPath}/>
              <circle cx='65' cy='85' r='1.5' fill={activeTheme.colors.dot} className={styles.svgPath}/>
              <circle cx='115' cy='80' r='2.5' fill={activeTheme.colors.dot} className={styles.svgPath}/>
              <circle cx='135' cy='65' r='1.5' fill={activeTheme.colors.dot} opacity='0.7' className={styles.svgPath}/>
              <circle cx='165' cy='85' r='2' fill={activeTheme.colors.dot} className={styles.svgPath}/>
              <circle cx='20' cy='85' r='2' fill={activeTheme.colors.dot} opacity='0.5' className={styles.svgPath}/>
              
              <circle cx='95' cy='45' r='2.5' fill={activeTheme.colors.highlight} className={styles.svgPath}/>
              <circle cx='45' cy='95' r='2' fill={activeTheme.colors.highlight} opacity='0.9' className={styles.svgPath}/>
              <circle cx='75' cy='105' r='2' fill={activeTheme.colors.highlight} className={styles.svgPath}/>
              <circle cx='25' cy='125' r='1.5' fill={activeTheme.colors.highlight} className={styles.svgPath}/>
              <circle cx='85' cy='125' r='2.5' fill={activeTheme.colors.highlight} opacity='0.6' className={styles.svgPath}/>
              <circle cx='115' cy='65' r='1.5' fill={activeTheme.colors.highlight} className={styles.svgPath}/>
              <circle cx='60' cy='135' r='1.5' fill={activeTheme.colors.highlight} className={styles.svgPath}/>
              <circle cx='145' cy='75' r='1.5' fill={activeTheme.colors.highlight} opacity='0.8' className={styles.svgPath}/>
              <circle cx='40' cy='70' r='1.5' fill={activeTheme.colors.highlight} opacity='0.7' className={styles.svgPath}/>
            </g>
          </svg>
        </div>
      </div>

      {/* نوار رنگ شناور مخصوص موبایل */}
      <div className={styles.mobileColorBar}>
        {POWDER_THEMES.map((theme) => (
          <button
            key={theme.id}
            className={`${styles.colorBtn} ${activeTheme.id === theme.id ? styles.activeColor : ''}`}
            onClick={() => setActiveTheme(theme)}
            title={theme.name}
            aria-label={`تغییر رنگ به ${theme.name}`}
          >
            {/* دایره رنگی داخل دکمه */}
            <span 
              className={styles.colorDot} 
              style={{ backgroundColor: theme.hex }}
              data-color={theme.id}
            />
          </button>
        ))}
      </div>
      
    </div>
  );
}