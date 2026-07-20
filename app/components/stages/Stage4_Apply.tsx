// components/stages/Stage4_ApplyTile.tsx
'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSimulatorStore } from '@/store/useSimulatorStore';
import { useRouter } from 'next/navigation'; // اضافه شدن روتر Next.js
import styles from '@/styles/Stage4.module.scss';

export default function Stage4_ApplyTile() {
  const { activeTheme, resetSimulator, prevStage } = useSimulatorStore();
  const router = useRouter(); // تعریف روتر برای جابه‌جایی صفحات
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPos = useRef<{ x: number, y: number } | null>(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const startDrawing = (e: React.PointerEvent) => {
    setIsDrawing(true);
    setHasStarted(true); // غیب شدن دست راهنما
    
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      lastPos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  // تابع اصلاح شده برای انتقال به صفحه اصلی
  const goToHome = () => {
    router.push('/'); // کاربر را دقیقاً به روت اصلی سایت هدایت می‌کند
  };

  const draw = (e: React.PointerEvent) => {
    if (!isDrawing || !lastPos.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const rect = containerRef.current?.getBoundingClientRect();
    
    if (!ctx || !rect || !canvas) return;

    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;

    ctx.lineWidth = 26; 
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = activeTheme.hex; 

    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    lastPos.current = { x: currentX, y: currentY };
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    lastPos.current = null;
  };

  return (
    <div className={styles.stageContainer}>
      
      {/* دکمه بازگشت */}
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
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className={styles.title}>اجرای آسان و بی‌دردسر!</h2>
        <p className={styles.subtitle}>
          بدون نیاز به نصاب، خودتان دست به کار شوید. 
        </p>
      </motion.div>

      <div className={styles.tileWrapper}>
        
        {/* دست راهنما */}
        <AnimatePresence>
          {!hasStarted && (
            <motion.div
              className={styles.handIndicator}
              style={{ color: '#b3b3b3', left: '83px', top: '40px' }}
              animate={{ y: [0, 80, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5C12.88 5 14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6C13 6.67 12.33 6 11.5 6S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.04.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.21 0-.69-.38-1.32-1-1.61z" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        <div 
          ref={containerRef}
          className={styles.interactionArea}
          onPointerDown={startDrawing}
          onPointerMove={draw}
          onPointerUp={stopDrawing}
          onPointerLeave={stopDrawing}
        >
          <canvas ref={canvasRef} width={300} height={300} className={styles.drawingCanvas} />
          
          <div className={styles.tilesGrid}>
            {[...Array(9)].map((_, i) => <div key={i} className={styles.tile}></div>)}
          </div>
        </div>
      </div>

      {/* دکمه‌های پایانی - همیشه در صفحه با انیمیشن در لحظه ورود ظاهر می‌شوند */}
      <motion.div 
        className={styles.actionButtons}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
      >
        <button onClick={resetSimulator} className={styles.secondaryBtn}>اجرای دوباره</button>
        <button onClick={goToHome} className={styles.primaryBtn}>ورود به سایت</button> 
      </motion.div>

    </div>
  );
}