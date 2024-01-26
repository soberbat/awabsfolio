export type ObjectFitProperty =
  | "fill"
  | "contain"
  | "cover"
  | "none"
  | "scale-down";
export interface MediaImage {
  pos: PadType;
  description?: string;
  objFit?: ObjectFitProperty;
}

export interface Images {
  images: MediaImage[];
  description?: string;
  size?: ImgSize;
}

export interface ImgSize {
  width: string;
  height: string;
}
export interface DataType {
  id: number;
  pos: PosType;
  mediaPath: string;
  workInfo: string[];
  description: string;
  name: string;
  media: (MediaImage | Images)[];
}

export type PadType = {
  paddingRight?: string;
  paddingLeft?: string;
  paddingTop?: string;
  paddingBottom?: string;
};

export type PosType = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};
