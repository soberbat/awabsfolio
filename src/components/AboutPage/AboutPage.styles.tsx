import { motion } from "framer-motion";
import styled from "styled-components";
import { PageContainer } from "../WorksPage/WorksPage.styles";
import PageBackground from "../PageBackground/PageBackground";
import { mediaLarge } from "@/utils/media";
import css from "styled-jsx/css";

export const Container = styled(PageContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Background = styled(PageBackground)`
  span {
    opacity: 0.1;
  }
  div {
    background-image: url("/images/about-bg.png");
  }
`;

export const HeadlineContainer = styled.div`
  position: relative;
  z-index: 1;
  color: black;
  line-height: 1.6rem;
  text-align: center;

  ${mediaLarge(css`
    margin-left: 2%;
    text-align: unset;
  `)}
`;

export const Date = styled.span`
  font-weight: 300;
`;

export const Highlighted = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const Title = styled.span`
  display: inline-block;
  width: 60%;
  font-size: 1.1rem;
  font-weight: 300;
`;
