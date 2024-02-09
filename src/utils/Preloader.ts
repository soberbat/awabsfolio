import { IPreloader, PreloadUrlConfig, Resolve } from "./types";
import createImageUrls from "./createImageUrls";

class Preloader {
  handleRequestEnd;
  handleProgress;
  urlsToPreload: PreloadUrlConfig;
  preloadedSources: PreloadUrlConfig;
  loadedImages = 0;
  imageCount = 60;
  progress = 0;

  constructor({ handleRequestEnd, handleProgress }: IPreloader) {
    this.handleRequestEnd = handleRequestEnd;
    this.handleProgress = handleProgress;
    this.urlsToPreload = createImageUrls();
    this.preloadedSources = {};
    this.preloadAll();
  }

  addPrefix = (url: string) => `/images/works${url}`;

  onLoad = (resolve: Resolve, xhr: XMLHttpRequest) => {
    this.loadedImages++;

    const percantage = this.loadedImages / this.imageCount;
    this.handleProgress(Math.ceil(percantage * 100));

    if (this.loadedImages === this.imageCount) {
      this.handleRequestEnd(this.preloadedSources);
    }

    resolve(URL.createObjectURL(xhr.response));
  };

  preload = (url: string) => {
    return new Promise((resolve: Resolve, _) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => this.onLoad(resolve, xhr);

      xhr.open("GET", url, true);
      xhr.responseType = "blob";
      xhr.send(null);
    });
  };

  preloadAll = async () => {
    for (const key in this.urlsToPreload) {
      this.preloadedSources[key] = await Promise.all(
        this.urlsToPreload[key].map(async (url) => {
          if (Array.isArray(url)) {
            return await Promise.all(
              url.map(async (url) => await this.preload(this.addPrefix(url)))
            );
          }

          return await this.preload(this.addPrefix(url));
        })
      );
    }
  };
}

export default Preloader;
