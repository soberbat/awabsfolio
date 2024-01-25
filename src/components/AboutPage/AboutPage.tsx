import React from "react";
import {
  Background,
  Container,
  HeadlineContainer,
  Highlighted,
  Title,
  Date,
} from "./AboutPage.styles";
import useStore from "@/store/AppStore";

const AboutPage = () => {
  const { setIsAboutPageVisible } = useStore();
  const onClick = () => setIsAboutPageVisible(false);
  return (
    <Container onClick={onClick}>
      <HeadlineContainer>
        <Highlighted>
          Awab AlSaati, <Date>(b.1997)</Date>
        </Highlighted>
        <Title>architect/researcher from Damascus, based in Istanbul</Title>
      </HeadlineContainer>
      <Background />
    </Container>
  );
};

export default AboutPage;
