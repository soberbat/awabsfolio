import React from "react";
import { Container, Percentage, Progress } from "./LoadingView.styles";

interface ILoadingView {
  progress: number;
}
const LoadingView = ({ progress }: ILoadingView) => {
  return (
    <Container>
      <Progress>
        {progress}
        <Percentage>%</Percentage>
      </Progress>
    </Container>
  );
};

export default LoadingView;
