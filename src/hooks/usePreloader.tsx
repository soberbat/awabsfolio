import { useEffect, useRef, useState } from "react";
import Preloader from "@/utils/Preloader";

const usePreloder = () => {
  const [isPreloaded, setisPreloaded] = useState<boolean>(false);
  const [fileUrls, setfileUrls] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const preloader = useRef<Preloader | null>(null);

  const handleRequestEnd = (fileUrl: string) => {
    setisPreloaded(true);
    setfileUrls(fileUrl);
  };

  const handleProgress = (progress: number) => {
    setProgress(progress);
  };

  useEffect(() => {
    preloader.current = new Preloader({ handleRequestEnd, handleProgress });
  }, []);

  return { isPreloaded, fileUrls, progress };
};

export default usePreloder;
