// components/stages/Stage3_Mix.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, PanInfo, useAnimation, AnimatePresence } from 'framer-motion';
import { useSimulatorStore } from '@/store/useSimulatorStore';
import styles from '@/styles/Stage3.module.scss';

export default function Stage3_Mix() {
  const { nextStage, prevStage, activeTheme } = useSimulatorStore();
  
  const [phase, setPhase] = useState<'first-mix' | 'resting' | 'second-mix'>('first-mix');
  const [mixProgress, setMixProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  
  const isTransitioningRef = useRef(false); 

  const FIRST_MIX_THRESHOLD = 2000;
  const SECOND_MIX_THRESHOLD = 1000;
  
  const mixerControls = useAnimation();

  useEffect(() => {
    let isMounted = true;

    const handleAnimations = async () => {
      if (phase === 'resting') {
        await mixerControls.start({ 
          y: -30, 
          opacity: 0.6, 
          rotate: 0,
          x: 0,
          transition: { duration: 0.5, ease: "easeOut" } 
        });
      } else if (phase === 'second-mix' && mixProgress === 0) {
        await mixerControls.start({ 
          y: 0, 
          opacity: 1, 
          scale: 1,
          transition: { duration: 0.4, ease: "easeIn" } 
        });
      }

      if (phase !== 'resting' && mixProgress === 0) {
        while (isMounted) {
          await new Promise(resolve => setTimeout(resolve, 2000));
          if (!isMounted || mixProgress > 0) break;
          
          await mixerControls.start({
            rotate: [0, -8, 8, -4, 0],
            x: [0, -10, 10, -5, 0],
            transition: { duration: 0.6, ease: "easeInOut" }
          });
        }
      }
    };

    handleAnimations();
    return () => { isMounted = false; };
  }, [phase, mixProgress, mixerControls]);

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (phase === 'resting' || isTransitioningRef.current) return;
    
    mixerControls.stop();
    
    const distance = Math.abs(info.delta.x) + Math.abs(info.delta.y);
    const newProgress = mixProgress + distance;
    
    setMixProgress(newProgress);
    
    if (phase === 'first-mix' && newProgress >= FIRST_MIX_THRESHOLD) {
      setPhase('resting');
      setMixProgress(0); 
    } else if (phase === 'second-mix' && newProgress >= SECOND_MIX_THRESHOLD) {
      if (!isTransitioningRef.current) {
        isTransitioningRef.current = true;
        setMixProgress(SECOND_MIX_THRESHOLD); 
        setTimeout(() => nextStage(), 500); 
      }
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (phase === 'resting' && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (phase === 'resting' && timeLeft === 0) {
      setPhase('second-mix'); 
    }
    return () => clearTimeout(timer);
  }, [phase, timeLeft]);

  let progressPercentage = 0;
  let rawIngredientsOpacity = 0;
  let pasteOpacity = 1;

  if (phase === 'first-mix') {
    progressPercentage = Math.min((mixProgress / FIRST_MIX_THRESHOLD) * 100, 100);
    rawIngredientsOpacity = 1 - (progressPercentage / 100);
    pasteOpacity = progressPercentage / 100;
  } else if (phase === 'resting') {
    progressPercentage = 100;
    rawIngredientsOpacity = 0;
    pasteOpacity = 1;
  } else if (phase === 'second-mix') {
    progressPercentage = Math.min((mixProgress / SECOND_MIX_THRESHOLD) * 100, 100);
    rawIngredientsOpacity = 0;
    pasteOpacity = 1;
  }

  // ==========================================
  // جادوی پف کردن خمیر در دور دوم (Path Morphing)
  // متغیر p مقداری بین 0 تا 1 است که نشان‌دهنده میزان پیشرفت هم‌زدن در دور دوم است.
  // ==========================================
  const p = phase === 'second-mix' ? Math.min(mixProgress / SECOND_MIX_THRESHOLD, 1) : 0;
  
  // محاسبه زنده مختصات SVG بر اساس میزان هم زدن (هرچه p بیشتر شود، خمیر بالاتر می‌آید)
  const clipPathD = `M -10 ${50 - p * 20} Q 40 ${30 - p * 15}, 100 ${55 - p * 20} T 220 ${40 - p * 25} L 220 160 L -10 160 Z`;
  const wave1D = `M -10 ${70 - p * 25} Q 70 ${40 - p * 20}, 140 ${100 - p * 30} T 250 ${80 - p * 25} L 250 180 L -10 180 Z`;
  const wave2D = `M -10 ${110 - p * 30} Q 50 ${140 - p * 30}, 120 ${90 - p * 35} T 250 ${110 - p * 30} L 250 180 L -10 180 Z`;

  const getTitle = () => {
    if (phase === 'first-mix') return 'هم‌زدن خمیر';
    if (phase === 'resting') return 'استراحت شیمیایی پلیمرها';
    return 'هم‌زدن نهایی';
  };

  const getSubtitle = () => {
    if (phase === 'first-mix') return 'ابزار را روی سطل بکشید و هم بزنید تا خمیر یکدست شود';
    if (phase === 'resting') return '۵ دقیقه صبر کنید تا مواد قوام بیایند (شبیه‌سازی: ۵ ثانیه)';
    return 'خمیر را یک بار دیگر هم بزنید تا کاملاً آماده و پف‌دار شود';
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
      
      <motion.div 
        className={styles.textWrap}
        key={phase} 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className={styles.title}>{getTitle()}</h2>
        <p className={styles.subtitle}>{getSubtitle()}</p>
      </motion.div>

      <div className={styles.bucketWrapper}>
        <AnimatePresence>
          {phase === 'resting' && (
            <motion.div 
              className={styles.timerBadge}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <span>00:0{timeLeft}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        <div className={styles.bucket}>
          <div className={styles.mixedPaste} style={{ opacity: pasteOpacity }}>
            <svg className={styles.pasteSvg} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150' preserveAspectRatio='none'>
              <defs>
                <clipPath id='pasteClip'>
                  {/* اعمال مختصات داینامیک */}
                  <path d={clipPathD} />
                </clipPath>
              </defs>
              <g clipPath='url(#pasteClip)'>
                <rect x='-10' y='-10' width='240' height='180' fill={activeTheme.colors.shadow} />
                <path d={wave1D} fill={activeTheme.colors.light} opacity='0.15' />
                <path d={wave2D} fill={activeTheme.colors.dot} opacity='0.25' />
                
                {/* حباب‌ها هم با پف کردن خمیر کمی بالا میان */}
                <g transform={`translate(0, -${p * 20})`}>
                  <circle cx='40' cy='90' r='1.5' fill={activeTheme.colors.highlight} opacity='0.3'/>
                  <circle cx='130' cy='115' r='2' fill={activeTheme.colors.highlight} opacity='0.2'/>
                  <circle cx='180' cy='75' r='1.5' fill={activeTheme.colors.highlight} opacity='0.35'/>
                  <circle cx='80' cy='130' r='1' fill={activeTheme.colors.highlight} opacity='0.25'/>
                </g>
              </g>
            </svg>
            <div className={styles.pasteShadowOverlay}></div>
          </div>

          <div className={styles.rawIngredients} style={{ opacity: rawIngredientsOpacity }}>
            <svg className={styles.powderSvg} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150' preserveAspectRatio='none'>
              <defs>
                <clipPath id='hillClip'>
                  <path d='M -10 160 L -10 70 C 35 60, 70 25, 110 40 C 160 60, 180 65, 220 50 L 220 160 Z'/>
                </clipPath>
              </defs>
              <g clipPath='url(#hillClip)'>
                <rect x='-10' y='-10' width='240' height='180' fill={activeTheme.colors.light} />
                <path d='M 100 -10 C 115 70, 140 120, 220 150 L 220 -10 Z' fill={activeTheme.colors.shadow} />
                <circle cx='80' cy='65' r='3.5' fill={activeTheme.colors.dot} />
                <circle cx='50' cy='115' r='4' fill={activeTheme.colors.dot} opacity='0.8' />
                <circle cx='105' cy='55' r='2' fill={activeTheme.colors.dot} />
                <circle cx='35' cy='135' r='2.5' fill={activeTheme.colors.dot} />
                <circle cx='95' cy='95' r='3' fill={activeTheme.colors.dot} opacity='0.6' />
                <circle cx='65' cy='85' r='1.5' fill={activeTheme.colors.dot} />
                <circle cx='115' cy='80' r='2.5' fill={activeTheme.colors.dot} />
                <circle cx='135' cy='65' r='1.5' fill={activeTheme.colors.dot} opacity='0.7' />
                <circle cx='165' cy='85' r='2' fill={activeTheme.colors.dot} />
                <circle cx='20' cy='85' r='2' fill={activeTheme.colors.dot} opacity='0.5' />
                
                <circle cx='95' cy='45' r='2.5' fill={activeTheme.colors.highlight} />
                <circle cx='45' cy='95' r='2' fill={activeTheme.colors.highlight} opacity='0.9' />
                <circle cx='75' cy='105' r='2' fill={activeTheme.colors.highlight} />
                <circle cx='25' cy='125' r='1.5' fill={activeTheme.colors.highlight} />
                <circle cx='85' cy='125' r='2.5' fill={activeTheme.colors.highlight} opacity='0.6' />
                <circle cx='115' cy='65' r='1.5' fill={activeTheme.colors.highlight} />
                <circle cx='60' cy='135' r='1.5' fill={activeTheme.colors.highlight} />
                <circle cx='145' cy='75' r='1.5' fill={activeTheme.colors.highlight} opacity='0.8' />
                <circle cx='40' cy='70' r='1.5' fill={activeTheme.colors.highlight} opacity='0.7' />
              </g>
            </svg>
            <div className={styles.waterLayer} />
          </div>
        </div>

        <motion.div
          className={styles.mixerTool}
          drag={phase !== 'resting'}
          dragConstraints={{ top: -20, bottom: 60, left: -60, right: 60 }} 
          dragElastic={0.1}
          onDrag={handleDrag}
          animate={mixerControls}
          whileHover={phase !== 'resting' ? { scale: 1.05 } : {}}
          whileTap={phase !== 'resting' ? { scale: 0.95, rotate: -5 } : {}}
          style={{ cursor: phase === 'resting' ? 'not-allowed' : 'grab' }}
        >
          <div className={styles.gripLine} />
          <div className={styles.gripLine} />
        </motion.div>
      </div>

      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: `${progressPercentage}%` }} />
      </div>
    </div>
  );
}