import styled from "styled-components";
import { PageContainer } from "../WorksPage/WorksPage.styles";
import PageBackground from "../PageBackground/PageBackground";
import { InnerContainer } from "../HomePage/Home.styles";

export const Container = styled(PageContainer)`
  cursor: pointer;
`;

export const Background = styled(PageBackground)`
  > div {
    background-image: url("/images/works-bg.jpg");
  }
`;

export const PageInnerContainer = styled(InnerContainer)`
  justify-content: center;
`;

export const ComingSoonWrapper = styled.div``;

export const Title = styled.h1`
  color: #6f6f6f;
  font-weight: 500;
`;
