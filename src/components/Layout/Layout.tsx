import React, { FC, ReactNode, useEffect } from "react";
import { Wrapper } from "./Layout.styles";
import useStore from "@/store/AppStore";
import { useAnimationControls, AnimationControls } from "framer-motion";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  const controls = useAnimationControls();
  const {
    isProjectVisible,
    isWorksPageVisible,
    isAboutPageVisible,
    isBlogPageVisible,
    setLastEndingAnimation,
  } = useStore();

  const handleAnimationStart = (animationName: string, isVisible: boolean) => {
    controls.start(
      isVisible ? `${animationName}Visible` : `${animationName}Invisible`
    );
  };

  useEffect(() => {
    handleAnimationStart("ProjectPage", isProjectVisible);
  }, [isProjectVisible]);

  useEffect(() => {
    handleAnimationStart("AboutPage", isAboutPageVisible);
  }, [isAboutPageVisible]);

  useEffect(() => {
    handleAnimationStart("WorksPage", isWorksPageVisible);
  }, [isWorksPageVisible]);

  useEffect(() => {
    handleAnimationStart("BlogPage", isBlogPageVisible);
  }, [isBlogPageVisible]);

  const onAnimationComplete = (definition: string) => {
    setLastEndingAnimation(definition);
  };

  return (
    <Wrapper onAnimationComplete={onAnimationComplete} animate={controls}>
      {children}
    </Wrapper>
  );
};

export default Layout;
