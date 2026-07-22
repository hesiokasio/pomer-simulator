'use client';

import { useEffect } from 'react';
import { useSimulatorStore } from '@/store/useSimulatorStore';
import { AnimatePresence, motion } from 'framer-motion';
import Stage1_Unbox from '@/app/components/stages/Stage1_Unbox';
import Stage2_Water from '@/app/components/stages/Stage2_Water';
import Stage3_Mix from '@/app/components/stages/Stage3_Mix';
import Stage4_Apply from '@/app/components/stages/Stage4_Apply';

export default function SimulatorPage() {
  const currentStage = useSimulatorStore((state) => state.currentStage);
  const resetSimulator = useSimulatorStore((state) => state.resetSimulator);

  useEffect(() => {
    resetSimulator();
  }, [resetSimulator]);

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      flex: 1, 
      minHeight: 'calc(100vh - 80px)', 
      overflow: 'hidden' 
    }}>
      <AnimatePresence mode="wait">
        
        {currentStage === 1 && (
          <motion.div
            key="stage1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            style={{ width: '100%', height: '100%', position: 'absolute' }}
          >
            <Stage1_Unbox />
          </motion.div>
        )}

        {currentStage === 2 && (
          <motion.div
            key="stage2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            style={{ width: '100%', height: '100%', position: 'absolute' }}
          >
            <Stage2_Water />
          </motion.div>
        )}

        {currentStage === 3 && (
          <motion.div
            key="stage3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            style={{ width: '100%', height: '100%', position: 'absolute' }}
          >
            <Stage3_Mix />
          </motion.div>
        )}

        {currentStage === 4 && (
          <motion.div
            key="stage4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            style={{ width: '100%', height: '100%', position: 'absolute' }}
          >
            <Stage4_Apply />
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}