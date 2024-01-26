import React from "react";
import * as S from "./BlogPage.styles";
import useStore from "@/store/AppStore";

const BlogPage = () => {
  const { setIsBlogPageVisible } = useStore();
  const handleClick = () => setIsBlogPageVisible(false);

  return (
    <S.Container onClick={handleClick}>
      <S.PageInnerContainer>
        <S.ComingSoonWrapper>
          <S.Title>Coming Soon</S.Title>
        </S.ComingSoonWrapper>
        <S.Background className="" />
      </S.PageInnerContainer>
    </S.Container>
  );
};

export default BlogPage;
