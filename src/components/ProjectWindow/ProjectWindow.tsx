import React, { useCallback, useState } from "react";
import * as S from "./ProjectWindow.styles";
import ProjectGallery from "../ProjectGallery/ProjectGallery";
import useStore from "@/store/AppStore";
import { DataType } from "@/data/data.types";

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
    <S.Container>
      <S.InnerContainer>
        {isInfoVisible && (
          <>
            <S.ProjectName>{name}</S.ProjectName>
            <S.CornerDescription>
              {workInfo.map((info) => (
                <S.Info key={info}>{info}</S.Info>
              ))}
              <S.Description>{description}</S.Description>
            </S.CornerDescription>
          </>
        )}

        <ProjectGallery
          mediaPath={mediaPath}
          onImageClick={handleClick}
          images={media}
          activeImage={activeImage}
        />
      </S.InnerContainer>
    </S.Container>
  );
};

export default ProjectWindow;
