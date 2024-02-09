import React, { useCallback } from "react";
import * as S from "./ProjectGallery.styles";
import Comment from "../Comment/Comment";
import { DataType } from "@/data/data.types";
import useStore from "@/store/AppStore";

interface IProjectGallery {
  images: DataType["media"];
  mediaPath: string;
  onImageClick: () => void;
  activeImage: number;
}

const ProjectGallery = ({
  images,
  mediaPath,
  activeImage,
  onImageClick,
}: IProjectGallery) => {
  const imageSources = useStore().imageUrls[mediaPath];

  return (
    <S.Container onClick={onImageClick}>
      <S.InnerContainer>
        {images.map((image, idx) => {
          const src = imageSources[idx];
          const isVisible = idx === activeImage;
          const isSingleImage = "pos" in image;
          const shouldShowComment = isVisible && image.description;

          return !isSingleImage ? (
            <S.MultipleImageContainer>
              {image.images.map(({ pos, description, objFit }, subIdx) => {
                const src = imageSources[idx][subIdx!];

                return (
                  <S.MultipleImage
                    isVisible={isVisible}
                    pos={pos}
                    key={idx}
                    src={src}
                    size={image.size}
                  />
                );
              })}
            </S.MultipleImageContainer>
          ) : (
            <>
              <S.Image
                isVisible={isVisible}
                pos={image.pos}
                objFit={image.objFit}
                key={idx}
                src={src}
              />

              {shouldShowComment && <Comment />}
            </>
          );
        })}
      </S.InnerContainer>
    </S.Container>
  );
};

export default ProjectGallery;
