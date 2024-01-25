import React from "react";
import {
  BackgroundImage,
  ColorOVerlay,
  Container,
} from "./PageBackground.styles";

interface IPageBackground {
  className?: string;
}

const PageBackground = ({ className }: IPageBackground) => {
  return (
    <Container className={className}>
      <ColorOVerlay />
      <BackgroundImage />
    </Container>
  );
};

export default PageBackground;
