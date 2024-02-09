export interface IPreloader {
  handleRequestEnd: (imageUrls: PreloadUrlConfig) => void;
  handleProgress: (progress: number) => void;
}

export type PreloadUrlConfig = { [key: string]: any[] };

export type Resolve = (imageUrl: string) => void;

export interface AppStoreState {
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
  imageUrls: PreloadUrlConfig;
  setImageUrls: (imageUrls: PreloadUrlConfig) => void;
}
