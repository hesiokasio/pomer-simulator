// src/store/useSimulatorStore.ts
import { create } from 'zustand';

// ۱. آرایه رنگ‌ها را اینجا قرار می‌دهیم تا در کل اپلیکیشن در دسترس باشد
export const POWDER_THEMES = [
  { id: 'lightGray', hex: '#cccccc', name: 'طوسی', colors: { light: '#f4f4f4', shadow: '#e8e8e8', dot: '#cccccc', highlight: '#ffffff' } },
  { id: 'darkGray', hex: '#666666', name: 'طوسی تیره', colors: { light: '#8c8c8c', shadow: '#737373', dot: '#595959', highlight: '#a6a6a6' } },
  { id: 'green', hex: '#a8cba8', name: 'سبز', colors: { light: '#eaf4ea', shadow: '#d5e8d5', dot: '#b3d4b3', highlight: '#ffffff' } },
  { id: 'blue', hex: '#a8c0cb', name: 'آبی', colors: { light: '#eaf1f4', shadow: '#d5e2e8', dot: '#b3cdd4', highlight: '#ffffff' } },
  { id: 'beige', hex: '#d4c4a7', name: 'بژ', colors: { light: '#f4eee0', shadow: '#e8dfcd', dot: '#d4c4a7', highlight: '#ffffff' } },
  { id: 'white', hex: '#ffffff', name: 'سفید', colors: { light: '#ffffff', shadow: '#f4f4f4', dot: '#e6e6e6', highlight: '#ffffff' } },
];

interface SimulatorState {
  currentStage: number;       // مرحله فعلی (۱ تا ۴)
  waterScoops: number;        // تعداد پیمانه‌های آب ریخته شده (۰ تا ۳)
  isMixed: boolean;           // آیا خمیر کاملاً هم‌زده شده؟
  isResting: boolean;         // آیا در تایم استراحت شیمیایی هستیم؟
  isCanvasRevealed: boolean;  // آیا کاربر کاشی را کامل تمیز کرده؟
  
  // ۲. متغیر مربوط به تمِ رنگی انتخاب شده
  activeTheme: typeof POWDER_THEMES[0];

  // اکشن‌ها
  nextStage: () => void;
  addWater: () => void;
  setMixed: (status: boolean) => void;
  setResting: (status: boolean) => void;
  setCanvasRevealed: (status: boolean) => void;
  
  // ۳. اکشن برای تغییر رنگ
  setActiveTheme: (theme: typeof POWDER_THEMES[0]) => void;
}

export const useSimulatorStore = create<SimulatorState>((set) => ({
  currentStage: 1,
  waterScoops: 0,
  isMixed: false,
  isResting: false,
  isCanvasRevealed: false,
  
  // ۴. تنظیم طوسی به عنوان رنگ پیش‌فرض در شروع کار
  activeTheme: POWDER_THEMES[0],

  nextStage: () => set((state) => ({ currentStage: Math.min(state.currentStage + 1, 4) })),
  addWater: () => set((state) => ({ waterScoops: Math.min(state.waterScoops + 1, 3) })),
  setMixed: (status) => set({ isMixed: status }),
  setResting: (status) => set({ isResting: status }),
  setCanvasRevealed: (status) => set({ isCanvasRevealed: status }),
  
  // ۵. تابع تغییر رنگ
  setActiveTheme: (theme) => set({ activeTheme: theme }),
}));