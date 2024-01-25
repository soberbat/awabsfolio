/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line react/jsx-key
import React, { useCallback } from "react";
import { DataType } from "@/data/data";
import {
  Container,
  Description,
  DescriptionContainer,
  Image,
  InnerContainer,
  MultipleImage,
  MultipleImageContainer,
} from "./ProjectGallery.styles";
import Comment from "../Comment/Comment";

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
  const getSrc = useCallback(
    (idx: number, isSingleImage: boolean, subIdx?: number) => {
      const indexIncremented = idx + 1;
      const subIdxIncremented = subIdx! + 1;
      const subText = !isSingleImage ? `.${subIdxIncremented}` : "";
      return `/images/works/${mediaPath}/${indexIncremented}${subText}.jpeg`;
    },
    [mediaPath]
  );

  return (
    <Container onClick={onImageClick}>
      <InnerContainer>
        {images.map((image, idx) => {
          const src = getSrc(idx, true);
          const isVisible = idx === activeImage;
          const isSingleImage = "pos" in image;

          return !isSingleImage ? (
            <MultipleImageContainer>
              {image.images.map(({ pos, description, objFit }, subIdx) => {
                const src = getSrc(idx, false, subIdx);

                return (
                  <MultipleImage
                    isVisible={isVisible}
                    pos={pos}
                    key={idx}
                    src={src}
                    size={image.size}
                  />
                );
              })}
            </MultipleImageContainer>
          ) : (
            <>
              <Image
                isVisible={isVisible}
                pos={image.pos}
                objFit={image.objFit}
                key={idx}
                src={src}
              />

              {isVisible && image.description && <Comment />}
            </>
          );
        })}
      </InnerContainer>
    </Container>
  );
};

export default ProjectGallery;
