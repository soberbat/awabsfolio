/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback, useState } from "react";
import {
  Container,
  CornerDescription,
  Description,
  Info,
  InnerContainer,
  ProjectName,
} from "./ProjectWindow.styles";
import ProjectGallery from "../ProjectGallery/ProjectGallery";
import { DataType, data } from "../../data/data";
import useStore from "@/store/AppStore";

interface IProjectWindow {
  activeProject: DataType;
}

const defaultImage = 0;

const ProjectWindow = ({ activeProject }: IProjectWindow) => {
  const { name, workInfo, description, media, mediaPath } = activeProject;
  const [activeImage, setactiveImage] = useState(defaultImage);
  const { setIsProjectVisible } = useStore();
  const isInfoVisible = activeImage < 1;

  const handleClick = useCallback(() => {
    if (activeImage === media.length - 1) {
      setIsProjectVisible(false);
    }
    setactiveImage((prev) => (prev < media.length - 1 ? prev + 1 : prev));
  }, [activeImage]);

  return (
    <Container>
      <InnerContainer>
        {isInfoVisible && (
          <>
            <ProjectName>{name}</ProjectName>
            <CornerDescription>
              {workInfo.map((info) => (
                <Info key={info}>{info}</Info>
              ))}
              <Description>{description}</Description>
            </CornerDescription>
          </>
        )}

        <ProjectGallery
          mediaPath={mediaPath}
          onImageClick={handleClick}
          images={media}
          activeImage={activeImage}
        />
      </InnerContainer>
    </Container>
  );
};

export default ProjectWindow;
