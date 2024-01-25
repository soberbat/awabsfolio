import React, { useCallback, useEffect, useState } from "react";
import {
  PageContainer,
  ProjectsContainer,
  Background,
  Triangle,
  Back,
  BackInnerContainer,
  TriangleBorder,
} from "./WorksPage.styles";
import Project from "../Project/Project";
import ProjectWindow from "../ProjectWindow/ProjectWindow";
import useStore from "@/store/AppStore";
import { data } from "@/data/data";

const ProjectPageInvisible = "ProjectPageInvisible";

const WorksPage = () => {
  const [activeProject, setActiveProject] = useState<number>(0);
  const [isProjectMounted, setIsProjectMounted] = useState(false);
  const { setIsProjectVisible, setIsWorksPageVisible, lastEndingAnimation } =
    useStore();

  useEffect(() => {
    if (lastEndingAnimation === ProjectPageInvisible) {
      setIsProjectMounted(false);
    }
  }, [lastEndingAnimation]);

  const onClick = useCallback((projectID: number) => {
    setIsProjectMounted(true);
    setIsProjectVisible(true);
    setActiveProject(projectID);
  }, []);

  const onNavigationClick = useCallback(() => setIsWorksPageVisible(false), []);

  return (
    <PageContainer>
      <ProjectsContainer>
        {data.map(({ name, id, pos }) => (
          <Project key={id} pos={pos} name={name} onClick={() => onClick(id)} />
        ))}
      </ProjectsContainer>

      {isProjectMounted && (
        <ProjectWindow activeProject={data[activeProject]} />
      )}

      <Back onClick={onNavigationClick}>
        <BackInnerContainer>
          <Triangle />
          <TriangleBorder />
        </BackInnerContainer>
      </Back>

      <Background />
    </PageContainer>
  );
};

export default WorksPage;
