import React from "react";
import {
  Container,
  InnerContainer,
  Percentage,
  Progress,
  ProgressBar,
} from "./LoadingView.styles";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

interface ILoadingView {
  progress: number;
}

const LoadingView = ({ progress }: ILoadingView) => {
  const motionValProgres = useMotionValue(0);
  motionValProgres.set(progress);

  const scaleX = useSpring(useTransform(motionValProgres, [0, 100], [0, 1]), {
    stiffness: 10,
    damping: 15,
  });

  return (
    <Container>
      <InnerContainer>
        <Progress>
          {progress}
          <Percentage>%</Percentage>
        </Progress>
        <ProgressBar style={{ scaleX }} />
      </InnerContainer>
    </Container>
  );
};

export default LoadingView;
