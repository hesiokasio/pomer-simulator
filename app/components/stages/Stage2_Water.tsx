// components/stages/Stage2_AddWater.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useSimulatorStore } from '@/store/useSimulatorStore';
import styles from '@/styles/Stage2.module.scss';

export default function Stage2_AddWater() {
const { activeTheme, waterScoops, addWater, nextStage, prevStage } = useSimulatorStore();
  
  const [isPouring, setIsPouring] = useState(false);
  const [streamVisible, setStreamVisible] = useState(false);
  
  const [waterLevel, setWaterLevel] = useState(() => {
    if (waterScoops === 1) return '7%';
    if (waterScoops === 2) return '14%';
    if (waterScoops >= 3) return '20%';
    return '0%';
  });

  const cupControls = useAnimation();
  const waterLevelControls = useAnimation();

  useEffect(() => {
    waterLevelControls.set({ 
      height: '85%', y: 0, x: 0, scaleX: 1, scaleY: 1,
      originX: 0.5, originY: 1, rotate: 0,
      borderRadius: '0 0 14px 14px', opacity: 1 
    });
  }, [waterLevelControls]);

  useEffect(() => {
    let isMounted = true;
    const playIdleAnimation = async () => {
      while (isMounted && !isPouring && waterScoops < 3) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        if (!isMounted || isPouring || waterScoops >= 3) break;
        await cupControls.start({ 
          rotate: [0, -8, 6, -3, 0], 
          transition: { duration: 0.5, ease: "easeInOut" } 
        });
      }
    };
    playIdleAnimation();
    return () => { isMounted = false; };
  }, [isPouring, waterScoops, cupControls]);

  useEffect(() => {
    if (waterScoops >= 3) {
      const timer = setTimeout(() => { nextStage(); }, 300); 
      return () => clearTimeout(timer);
    }
  }, [waterScoops, nextStage]);

  const handleTap = async () => {
    if (isPouring || waterScoops >= 3) return;
    setIsPouring(true);
    cupControls.stop();

    cupControls.start({ 
      rotate: -100, x: 0, y: 0, 
      transition: { duration: 0.5, ease: "easeInOut" } 
    });

    setTimeout(() => {
      waterLevelControls.start({ 
        x: -21, y: -50, scaleX: 0.4, scaleY: 0.7,
        borderRadius: '20px 5px 20px 20px', opacity: 0,
        transition: { duration: 0.7, ease: "easeIn" } 
      });
      setStreamVisible(true);
    }, 150);

    setTimeout(() => {
      const nextScoop = waterScoops + 1;
      if (nextScoop === 1) setWaterLevel('7%');
      else if (nextScoop === 2) setWaterLevel('14%');
      else if (nextScoop >= 3) setWaterLevel('20%');
    }, 450); 

    await new Promise(resolve => setTimeout(resolve, 1100));
    setStreamVisible(false); 

    await cupControls.start({ 
      rotate: 0, x: 0, y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    });

    if (waterScoops < 2) {
      waterLevelControls.set({ 
        height: '0%', y: 0, x: 0, scaleX: 1, scaleY: 1,
        borderRadius: '0 0 14px 14px', opacity: 1, originX: 0.5, originY: 1
      });
      await waterLevelControls.start({ 
        height: '85%', transition: { duration: 0.5, ease: "easeOut" } 
      });
    }

    addWater();
    setIsPouring(false);
  };

  return (
    <div className={styles.stageContainer}>

      <button 
       className={styles.backButton} 
       onClick={prevStage} 
         aria-label="مرحله قبل"
      >
         <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
         </svg>
       </button>

       <button 
        className={styles.nextButton} 
        onClick={nextStage} 
        aria-label="مرحله بعد"
      >
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>


      <div className={styles.textWrap}>
        <h2 className={styles.title}>اضافه کردن آب</h2>
        <p className={styles.subtitle}>
          به ۳ پیمانه آب نیاز داریم. ۳ بار روی لیوان ضربه بزن تا آب اضافه شود.
          (پیمانه فعلی: {waterScoops}/3)
        </p>
      </div>
      
      <div className={styles.cupArea}>
        <motion.button
          className={styles.cupContainer}
          onClick={handleTap}
          animate={cupControls}
          whileHover={!isPouring && waterScoops < 3 ? { scale: 1.05 } : {}}
          whileTap={!isPouring && waterScoops < 3 ? { scale: 0.95 } : {}}
          disabled={waterScoops >= 3 || isPouring}
        >
          <motion.div 
             className={styles.waterInside} 
             initial={{ height: '85%', borderRadius: '0 0 14px 14px', originX: 0.5, originY: 1 }}
             animate={waterLevelControls}
            >
            <div className={styles.bubbles}>
              <span style={{ left: '20%', width: '5px', height: '5px', animationDelay: '0s' }}></span>
              <span style={{ left: '50%', width: '3px', height: '3px', animationDelay: '0.4s' }}></span>
              <span style={{ left: '75%', width: '6px', height: '6px', animationDelay: '0.8s' }}></span>
              <span style={{ left: '35%', width: '4px', height: '4px', animationDelay: '0.2s' }}></span>
              <span style={{ left: '65%', width: '7px', height: '7px', animationDelay: '0.6s' }}></span>
            </div>
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {streamVisible && (
            <motion.div
              className={styles.waterStreamContainer}
              initial={{ opacity: 0, height: 0, top: 95, left: -12 }}
              animate={{ opacity: 1, height: 90, top: 95, left: -12 }}
              exit={{ opacity: 0, height: 0, top: 185 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
            >
              <svg viewBox="0 0 40 150" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                <defs>
                  <linearGradient id="streamGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(168, 192, 203, 0.9)" />
                    <stop offset="100%" stopColor="rgba(168, 192, 203, 0.4)" />
                  </linearGradient>
                </defs>
                <path d="M 20 0 C 10 30, 30 60, 15 90 C 0 120, 35 130, 25 150 C 35 130, 40 120, 25 90 C 40 60, 20 30, 20 0 Z" fill="url(#streamGrad)" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className={styles.bucketWrapper}>
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

          <motion.div
            className={styles.risingWaterInBucket}
            initial={{ height: '0%' }}
            animate={{ height: waterLevel }}
            transition={{ type: "spring", stiffness: 40, damping: 15 }} 
          />
        </div>
      </div>
    </div>
  );
}