import { AppStoreState, PreloadUrlConfig } from "@/utils/types";
import { create } from "zustand";

const useStore = create<AppStoreState>((set) => ({
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
  imageUrls: {},
  setImageUrls: (imageUrls: PreloadUrlConfig) => set({ imageUrls }),
}));

export default useStore;
