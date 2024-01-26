import React, { useCallback, useEffect, useState } from "react";
import * as S from "./WorksPage.styles";
import Project from "../Project/Project";
import ProjectWindow from "../ProjectWindow/ProjectWindow";
import useStore from "@/store/AppStore";
import { data } from "@/data/data";
import { PROJECT_PAGE_INVISIBLE } from "@/utils/config";

const WorksPage = () => {
  const [activeProject, setActiveProject] = useState<number>(0);
  const [isProjectMounted, setIsProjectMounted] = useState(false);
  const { setIsProjectVisible, setIsWorksPageVisible, lastEndingAnimation } =
    useStore();

  const onClick = useCallback((projectID: number) => {
    setIsProjectMounted(true);
    setIsProjectVisible(true);
    setActiveProject(projectID);
  }, []);

  const onNavigationClick = () => setIsWorksPageVisible(false);

  useEffect(() => {
    if (lastEndingAnimation === PROJECT_PAGE_INVISIBLE) {
      setIsProjectMounted(false);
    }
  }, [lastEndingAnimation]);

  return (
    <S.PageContainer>
      <S.ProjectsContainer>
        {data.map(({ name, id, pos }) => (
          <Project key={id} pos={pos} name={name} onClick={() => onClick(id)} />
        ))}
      </S.ProjectsContainer>

      {isProjectMounted && (
        <ProjectWindow activeProject={data[activeProject]} />
      )}

      <S.Back onClick={onNavigationClick}>
        <S.Pointer />
      </S.Back>

      <S.Background className="" />
    </S.PageContainer>
  );
};

export default WorksPage;
