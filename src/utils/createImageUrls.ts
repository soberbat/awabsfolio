import { data } from "@/data/data";
import { PreloadUrlConfig } from "./types";

export default () => {
  const preloadUrlConfig: PreloadUrlConfig = {};

  data.forEach(({ mediaPath, media }) => {
    const images = media.map((mediaObj, index) => {
      if ("images" in mediaObj) {
        return [...Array(mediaObj.images.length)].map(
          (_, idx) => `/${mediaPath}/${index + 1}.${idx + 1}.jpeg`
        );
      } else {
        return `/${mediaPath}/${index + 1}.jpeg`;
      }
    });

    preloadUrlConfig[mediaPath] = images;
  });

  return preloadUrlConfig;
};
