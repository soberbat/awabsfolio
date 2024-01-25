import { create } from "zustand";

interface AppState {
  isWorksPageVisible: boolean;
  setIsWorksPageVisible: (val: boolean) => void;
  isProjectVisible: boolean;
  setIsProjectVisible: (val: boolean) => void;
  isAboutPageVisible: boolean;
  setIsAboutPageVisible: (val: boolean) => void;
  isBlogPageVisible: boolean;
  setIsBlogPageVisible: (val: boolean) => void;
  lastEndingAnimation: string;
  setLastEndingAnimation: (val: string) => void;
}

const useStore = create<AppState>((set) => ({
  isWorksPageVisible: false,
  setIsWorksPageVisible: (val) => set({ isWorksPageVisible: val }),
  isProjectVisible: false,
  setIsProjectVisible: (val) => set({ isProjectVisible: val }),
  isAboutPageVisible: false,
  setIsAboutPageVisible: (val) => set({ isAboutPageVisible: val }),
  isBlogPageVisible: false,
  setIsBlogPageVisible: (val) => set({ isBlogPageVisible: val }),
  lastEndingAnimation: "",
  setLastEndingAnimation: (val) => set({ lastEndingAnimation: val }),
}));

export default useStore;
