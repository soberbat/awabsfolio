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

  constructor({ handleRequestEnd, handleProgress }: IPreloader) {
    this.handleRequestEnd = handleRequestEnd;
    this.handleProgress = handleProgress;
    this.urls = createImageUrls();

    console.log(this.urls);
    this.preloadImages();
  }

  onLoad = (resolve: Resolve, xhr: XMLHttpRequest) => {
    resolve(URL.createObjectURL(xhr.response));
  };

  onProgress = (event: any) => {
    const progress = event.loaded / event.total;
    this.handleProgress(progress);
  };

  startLoading = (url: string) => {
    return new Promise((resolve: Resolve, _) => {
      const xhr = new XMLHttpRequest();

      xhr.onload = () => this.onLoad(resolve, xhr);
      xhr.onprogress = this.onProgress;

      xhr.open("GET", url, true);
      xhr.responseType = "blob";
      xhr.send(null);
    });
  };

  preloadImages = () => {
    this.urls["saray-arkası"].map(async (url) => {
      const videoUrl = await this.startLoading(`/images/works/${url}`);
      console.log(videoUrl);
    });
  };

  // getFileUrl = async () => {
  //   const videoUrl = await this.startLoading();
  //   this.handleRequestEnd(videoUrl);
  // };
}

export default Preloader;
