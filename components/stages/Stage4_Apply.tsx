// components/stages/Stage4_Apply.tsx
'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSimulatorStore } from '@/store/useSimulatorStore';
import styles from '@/styles/Stage4.module.scss';

export default function Stage4_Apply() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [scratchProgress, setScratchProgress] = useState(0);
  const { isCanvasRevealed, setCanvasRevealed } = useSimulatorStore();

  // راه‌اندازی اولیه Canvas (کشیدن لایه کثیف)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // تنظیم ابعاد واقعی بوم
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // پر کردن کل بوم با رنگ طوسی/کثیف
    ctx.fillStyle = '#b0b0b0'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // نوشتن یک متن راهنما روی لایه کثیف
    ctx.fillStyle = '#888';
    ctx.font = '16px IRANSans';
    ctx.textAlign = 'center';
    ctx.fillText('بکشید تا تمیز شود', canvas.width / 2, canvas.height / 2);
  }, []);

  // توابع پاک کردن (Scratch)
  const erase = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isCanvasRevealed) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2, false);
    ctx.fill();

    // تغییر: فقط شمارنده را بالا می‌بریم، بدون تغییر State دیگر
    setScratchProgress((prev) => prev + 1);
  };
  
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDrawing(true);
    erase(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDrawing) return;
    erase(e.clientX, e.clientY);
  };

  const handlePointerUp = () => setIsDrawing(false);

  return (
    <div className={styles.stageContainer}>
      <h2 className={styles.title}>اجرای آسان و بی‌دردسر!</h2>
      <p className={styles.subtitle}>
        بدون نیاز به نصاب، خودتان دست به کار شوید. <br/>
        انگشت خود را روی درز بکشید تا معجزه پومر را ببینید.
      </p>

      <div className={styles.tileWrapper}>
        <canvas
          ref={canvasRef}
          className={styles.scratchCanvas}
          style={{ opacity: isCanvasRevealed ? 0 : 1, pointerEvents: isCanvasRevealed ? 'none' : 'auto' }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        />
      </div>

      {/* نمایش دکمه خرید پس از تمیز شدن کاشی */}
      {isCanvasRevealed && (
        <motion.button
          className={styles.buyButton}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          خرید کیت ترمیم پومر
        </motion.button>
      )}
    </div>
  );
}