// components/landing/CalculatorSection.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/styles/Calculator.module.scss';

export default function CalculatorSection() {
  const [activeTab, setActiveTab] = useState<'powder' | 'adhesive'>('powder');
  const [area, setArea] = useState<number | ''>('');

  const calculateResult = () => {
    if (!area || area <= 0) return null;

    if (activeTab === 'powder') {
      const weight = area * 0.125;
      const formattedWeight = parseFloat(weight.toFixed(2));
      return (
        <p className={styles.resultText}>
          نیاز به <span className={styles.highlight}>{formattedWeight}</span> کیلوگرم <strong>پودر بندکشی</strong> دارید.
        </p>
      );
    } else {
      const weight = area * 4;
      return (
        <p className={styles.resultText}>
          نیاز به <span className={styles.highlight}>{weight}</span> کیلوگرم <strong>چسب کاشی</strong> دارید.
        </p>
      );
    }
  };

  return (
    <section className={styles.calculatorSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.calculatorCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          
          <div className={styles.infoSide}>
            <div className={styles.header}>
              <h2>محاسبه‌گر هوشمند مصرف</h2>
              <p>متراژ پروژه خود را وارد کنید تا مقدار دقیق مواد مورد نیاز شما را محاسبه کنیم.</p>
            </div>

            <div className={styles.tabs} dir="rtl">
              
              <button 
                className={`${styles.tab} ${activeTab === 'powder' ? styles.active : ''}`}
                onClick={() => setActiveTab('powder')}
              >
                {activeTab === 'powder' && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className={styles.activeTabBackground}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={styles.tabText}>پودر بندکشی</span>
              </button>

              <button 
                className={`${styles.tab} ${activeTab === 'adhesive' ? styles.active : ''}`}
                onClick={() => setActiveTab('adhesive')}
              >
                {activeTab === 'adhesive' && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className={styles.activeTabBackground}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={styles.tabText}>چسب کاشی</span>
              </button>
            </div>
          </div>

          <div className={styles.actionSide}>
            <div className={styles.inputWrapper}>
              <input 
                type="number"
                min="0"
                step="any"
                placeholder="متراژ (متر مربع)"
                className={styles.inputBox}
                value={area}
                onChange={(e) => setArea(e.target.value ? Number(e.target.value) : '')}
              />
            </div>

            <div className={styles.resultWrapper}>
              <AnimatePresence mode="wait">
                {area && area > 0 ? (
                  <motion.div
                    key={`${activeTab}-${area}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: '100%' }}
                  >
                    {calculateResult()}
                  </motion.div>
                ) : (
                  <div className={styles.emptyState}>منتظر ورود متراژ...</div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}