import { create } from 'zustand';

export const POWDER_THEMES = [
  { id: 'lightGray', hex: '#cccccc', name: 'طوسی', colors: { light: '#d5d5d5', shadow: '#bdbdbd', dot: '#cccccc', highlight: '#f9f9f9' } },
  { id: 'darkGray', hex: '#666666', name: 'طوسی تیره', colors: { light: '#8c8c8c', shadow: '#737373', dot: '#595959', highlight: '#a6a6a6' } },
  { id: 'green', hex: '#a8cba8', name: 'سبز', colors: { light: '#eaf4ea', shadow: '#d5e8d5', dot: '#b3d4b3', highlight: '#ffffff' } },
  { id: 'blue', hex: '#a8c0cb', name: 'آبی', colors: { light: '#eaf1f4', shadow: '#d5e2e8', dot: '#b3cdd4', highlight: '#ffffff' } },
  { id: 'beige', hex: '#d4c4a7', name: 'بژ', colors: { light: '#f4eee0', shadow: '#e8dfcd', dot: '#d4c4a7', highlight: '#ffffff' } },
  { id: 'white', hex: '#ffffff', name: 'سفید', colors: { light: '#ffffff', shadow: '#f4f4f4', dot: '#e6e6e6', highlight: '#ffffff' } },
];

interface SimulatorState {
  currentStage: number;
  waterScoops: number;
  isMixed: boolean;
  isResting: boolean;
  isCanvasRevealed: boolean;
  
  activeTheme: typeof POWDER_THEMES[0];

  nextStage: () => void;
  prevStage: () => void;
  resetSimulator: () => void;
  
  addWater: () => void;
  setMixed: (status: boolean) => void;
  setResting: (status: boolean) => void;
  setCanvasRevealed: (status: boolean) => void;
  
  setActiveTheme: (theme: typeof POWDER_THEMES[0]) => void;
}

export const useSimulatorStore = create<SimulatorState>((set) => ({
  currentStage: 1,
  waterScoops: 0,
  isMixed: false,
  isResting: false,
  isCanvasRevealed: false,
  activeTheme: POWDER_THEMES[0],

  nextStage: () => set((state) => {
    const targetStage = Math.min(state.currentStage + 1, 4);
    return {
      currentStage: targetStage,
      waterScoops: 0,
      isMixed: false,
      isResting: false,
      isCanvasRevealed: false
    };
  }),
  
  prevStage: () => set((state) => {
    const targetStage = Math.max(state.currentStage - 1, 1);
    return {
      currentStage: targetStage,
      waterScoops: 0,
      isMixed: false,
      isResting: false,
      isCanvasRevealed: false
    };
  }),

  resetSimulator: () => set({ 
    currentStage: 1, 
    waterScoops: 0,
    isMixed: false,
    isResting: false,
    isCanvasRevealed: false
  }),
  
  addWater: () => set((state) => ({ waterScoops: Math.min(state.waterScoops + 1, 3) })),
  setMixed: (status) => set({ isMixed: status }),
  setResting: (status) => set({ isResting: status }),
  setCanvasRevealed: (status) => set({ isCanvasRevealed: status }),
  setActiveTheme: (theme) => set({ activeTheme: theme }),
}));