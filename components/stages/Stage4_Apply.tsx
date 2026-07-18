// components/stages/Stage4_ApplyTile.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSimulatorStore } from '@/store/useSimulatorStore';
import styles from '@/styles/Stage4.module.scss';

export default function Stage4_ApplyTile() {
  const { activeTheme, nextStage } = useSimulatorStore();
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPos = useRef<{ x: number, y: number } | null>(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [drawDistance, setDrawDistance] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const GOAL_DISTANCE = 1000; 
  const progressPercentage = Math.min((drawDistance / GOAL_DISTANCE) * 100, 100);

  useEffect(() => {
    if (progressPercentage >= 100 && !isFinished) {
      setIsFinished(true);
      setTimeout(() => {
        nextStage(); 
      }, 1500);
    }
  }, [progressPercentage, isFinished, nextStage]);

  const startDrawing = (e: React.PointerEvent) => {
    if (isFinished) return;
    setIsDrawing(true);
    setHasStarted(true); // به محض لمس، hasStarted ترو میشه و دست غیب میشه
    
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      lastPos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const draw = (e: React.PointerEvent) => {
    if (!isDrawing || !lastPos.current || isFinished) return;
    
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

    const dist = Math.sqrt(
      Math.pow(currentX - lastPos.current.x, 2) + Math.pow(currentY - lastPos.current.y, 2)
    );
    setDrawDistance((prev) => prev + dist);

    lastPos.current = { x: currentX, y: currentY };
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    lastPos.current = null;
  };

  return (
    <div className={styles.stageContainer}>
      <motion.div 
        className={styles.textWrap}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className={styles.title}>اجرای آسان و بی‌دردسر!</h2>
        <p className={styles.subtitle}>
          بدون نیاز به نصاب، خودتان دست به کار شوید. 
          <br/>
          انگشت خود را روی درزها بکشید تا معجزه پومر را ببینید.
        </p>
      </motion.div>

      <div className={styles.tileWrapper}>
        
        {/* دست راهنما: فیکس شده روی درز اول سمت چپ */}
        <AnimatePresence>
          {!hasStarted && (
            <motion.div
              className={styles.handIndicator}
              style={{ 
                color: '#b3b3b3',
                left: '83px', // تنظیم دقیق روی درز اول (کمی چپ‌تر)
                top: '40px'
              }}
              animate={{ 
                y: [0, 80, 0] 
              }}
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
          <canvas 
            ref={canvasRef} 
            width={300} 
            height={300} 
            className={styles.drawingCanvas} 
          />
          
          <div className={styles.tilesGrid}>
            {[...Array(9)].map((_, i) => (
              <div key={i} className={styles.tile}></div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {isFinished && (
            <motion.div 
              className={styles.successOverlay}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.successText}>عالی بود!</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: `${progressPercentage}%`, backgroundColor: activeTheme.hex }} />
      </div>
    </div>
  );
}