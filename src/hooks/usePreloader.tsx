import { useEffect, useRef, useState } from "react";
import Preloader from "@/utils/Preloader";
import { PreloadUrlConfig } from "@/utils/types";
import useStore from "@/store/AppStore";

const usePreloder = () => {
  const [isPreloaded, setisPreloaded] = useState<boolean>(false);
  const { setImageUrls } = useStore();
  const [progress, setProgress] = useState(0);
  const preloader = useRef<Preloader | null>(null);

  const handleRequestEnd = (imageUrls: PreloadUrlConfig) => {
    setImageUrls(imageUrls);
    setisPreloaded(true);
  };

  const handleProgress = (progress: number) => {
    setProgress(progress);
  };

  useEffect(() => {
    preloader.current = new Preloader({ handleRequestEnd, handleProgress });
  }, []);

  return { isPreloaded, progress };
};

export default usePreloder;
