import React from "react";
import { Container, ProjectName } from "./Project.styles";
import { PosType } from "@/data/data";

interface IProject {
  name: string;
  onClick: () => void;
  pos: PosType;
}

const Project = ({ name, onClick, pos }: IProject) => {
  return (
    <Container pos={pos} onClick={() => onClick()}>
      <ProjectName>{name}</ProjectName>
    </Container>
  );
};

export default Project;
