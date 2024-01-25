import React, { FC, ReactNode, useEffect } from "react";
import { Wrapper } from "./Layout.styles";
import useStore from "@/store/AppStore";
import { useAnimationControls } from "framer-motion";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  const {
    isProjectVisible,
    isWorksPageVisible,
    isAboutPageVisible,
    isBlogPageVisible,
    setLastEndingAnimation,
  } = useStore();

  const controls = useAnimationControls();

  useEffect(() => {
    controls.start(
      isProjectVisible ? "ProjectPageVisible" : "ProjectPageInvisible"
    );
  }, [isProjectVisible]);

  useEffect(() => {
    controls.start(
      isAboutPageVisible ? "AboutPageVisible" : "AboutPageInvisible"
    );
  }, [isAboutPageVisible]);

  useEffect(() => {
    controls.start(
      isWorksPageVisible ? "WorksPageVisible" : "WorksPageInvisible"
    );
  }, [isWorksPageVisible]);

  useEffect(() => {
    console.log("---run");
    controls.start(isBlogPageVisible ? "BlogPageVisible" : "BlogPageInvisible");
  }, [isBlogPageVisible]);

  const onAnimationComplete = (e) => {
    setLastEndingAnimation(e);
  };

  return (
    <Wrapper onAnimationComplete={onAnimationComplete} animate={controls}>
      {children}
    </Wrapper>
  );
};

export default Layout;
