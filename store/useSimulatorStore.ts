// src/store/useSimulatorStore.ts
import { create } from 'zustand';

interface SimulatorState {
  currentStage: number;       // مرحله فعلی (۱ تا ۴)
  waterScoops: number;        // تعداد پیمانه‌های آب ریخته شده (۰ تا ۳)
  isMixed: boolean;           // آیا خمیر کاملاً هم‌زده شده؟
  isResting: boolean;         // آیا در تایم استراحت شیمیایی هستیم؟
  isCanvasRevealed: boolean;  // آیا کاربر کاشی را کامل تمیز کرده؟

  // اکشن‌ها
  nextStage: () => void;
  addWater: () => void;
  setMixed: (status: boolean) => void;
  setResting: (status: boolean) => void;
  setCanvasRevealed: (status: boolean) => void;
}

export const useSimulatorStore = create<SimulatorState>((set) => ({
  currentStage: 1,
  waterScoops: 0,
  isMixed: false,
  isResting: false,
  isCanvasRevealed: false,

  nextStage: () => set((state) => ({ currentStage: Math.min(state.currentStage + 1, 4) })),
  addWater: () => set((state) => ({ waterScoops: Math.min(state.waterScoops + 1, 3) })),
  setMixed: (status) => set({ isMixed: status }),
  setResting: (status) => set({ isResting: status }),
  setCanvasRevealed: (status) => set({ isCanvasRevealed: status }),
}));