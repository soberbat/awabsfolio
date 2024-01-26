import React from "react";
import * as S from "./PageBackground.styles";

interface IPageBackground {
  className?: string;
}

const PageBackground = ({ className }: IPageBackground) => {
  return (
    <S.Container className={className}>
      <S.ColorOverlay />
      <S.BackgroundImage />
    </S.Container>
  );
};

export default PageBackground;
