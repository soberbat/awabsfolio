import React from "react";
import * as S from "./AboutPage.styles";
import useStore from "@/store/AppStore";

const AboutPage = () => {
  const { setIsAboutPageVisible } = useStore();
  const onClick = () => setIsAboutPageVisible(false);

  return (
    <S.Container onClick={onClick}>
      <S.HeadlineContainer>
        <S.Highlighted>
          Awab AlSaati, <S.Date>(b.1997)</S.Date>
        </S.Highlighted>
        <S.Title>architect/researcher from Damascus, based in Istanbul</S.Title>
      </S.HeadlineContainer>
      <S.Background className="" />
    </S.Container>
  );
};

export default AboutPage;
