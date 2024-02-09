import createImageUrls from "./createImageUrls";

export interface IPreloader {
  handleRequestEnd: (videoUrl: string) => void;
  handleProgress: (progress: number) => void;
}

type Resolve = (videoUrl: string) => void;

class Preloader {
  handleRequestEnd;
  handleProgress;
  urls;
  loadedImages = 0;
  imageCount = 0;
  progress = 0;

  constructor({ handleRequestEnd, handleProgress }: IPreloader) {
    this.handleRequestEnd = handleRequestEnd;
    this.handleProgress = handleProgress;
    this.urls = createImageUrls()["saray-arkası"];
    this.imageCount = this.urls.length;
    this.preloadImages();
  }

  onLoad = (resolve: Resolve, xhr: XMLHttpRequest) => {
    resolve(URL.createObjectURL(xhr.response));
    this.loadedImages++;
    this.handleProgress((this.loadedImages / this.imageCount) * 100);
  };

  startLoading = (url: string) => {
    return new Promise((resolve: Resolve, _) => {
      const xhr = new XMLHttpRequest();

      xhr.onload = () => this.onLoad(resolve, xhr);
      // xhr.onprogress = this.onProgress;

      xhr.open("GET", url, true);
      xhr.responseType = "blob";
      xhr.send(null);
    });
  };

  preloadImages = () => {
    this.urls.forEach(async (url) => {
      const videoUrl = await this.startLoading(`/images/works/${url}`);
    });
  };

  // getFileUrl = async () => {
  //   const videoUrl = await this.startLoading();
  //   this.handleRequestEnd(videoUrl);
  // };
}

export default Preloader;
