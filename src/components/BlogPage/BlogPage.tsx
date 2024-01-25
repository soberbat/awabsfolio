import React from "react";
import {
  Background,
  ComingSoonWrapper,
  Container,
  PageInnerContainer,
  Title,
} from "./BlogPage.styles";
import useStore from "@/store/AppStore";

const BlogPage = () => {
  const { setIsBlogPageVisible } = useStore();
  const handleClick = () => setIsBlogPageVisible(false);
  return (
    <Container onClick={handleClick}>
      <PageInnerContainer>
        <ComingSoonWrapper>
          <Title>Coming Soon</Title>
        </ComingSoonWrapper>
        <Background className="" />
      </PageInnerContainer>
    </Container>
  );
};

export default BlogPage;
