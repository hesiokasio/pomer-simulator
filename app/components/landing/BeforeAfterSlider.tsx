// components/landing/BeforeAfterSlider.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/BeforeAfter.module.scss';

interface Props {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage }: Props) {
  const [position, setPosition] = useState(50);

  return (
    <div className={styles.sliderContainer} dir="ltr">
      
      <div className={styles.imageLayer} style={{ zIndex: 1 }}>
        <Image 
          src="/after.jpg"
          alt="بعد از استفاده" 
          fill 
          style={{ objectFit: 'cover' }} 
        />
      </div>

      <div 
        className={styles.imageLayer}
        style={{ 
          zIndex: 2,
          clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
          WebkitClipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`
        }} 
      >
        <Image 
          src="/before.jpg"
          alt="قبل از استفاده" 
          fill 
          style={{ objectFit: 'cover' }} 
        />
      </div>

      <div className={styles.sliderLine} style={{ left: `${position}%`, zIndex: 3 }}>
        <div className={styles.sliderHandle}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className={styles.rangeInput}
        style={{ zIndex: 4 }}
      />
      
    </div>
  );
}