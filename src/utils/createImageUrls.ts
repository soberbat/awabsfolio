import { data } from "@/data/data";

type PreloadUrlConfig = { [key: string]: any[] };

export default () => {
  const preloadUrlConfig: PreloadUrlConfig = {};

  data.forEach(({ mediaPath, media }) => {
    const images = media.map((mediaObj, i) => {
      if ("images" in mediaObj) {
        return [...Array(mediaObj.images.length)].map(
          (_, index) => `/${mediaPath}/${i + 1}.${index + 1}.jpeg`
        );
      } else {
        return `/${mediaPath}/${i + 1}.jpeg`;
      }
    });

    preloadUrlConfig[mediaPath] = images;
  });

  return preloadUrlConfig;
};
