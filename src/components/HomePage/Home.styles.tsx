import { motion } from "framer-motion";
import styled from "styled-components";
import PageBackground from "../PageBackground/PageBackground";
import { mediaLarge } from "@/utils/media";
import css from "styled-jsx/css";

export const Container = styled(motion.div)`
  width: 100vw;
  height: 100dvh;
  display: inline-block;
  color: black;
`;

export const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4%;

  ${mediaLarge(css`
    justify-content: flex-start;
  `)}
`;

export const Name = styled.h1`
  font-weight: 400;
  border-bottom: 1px solid black;

  ${mediaLarge(css`
    border: none;
  `)}
`;

export const Tab = styled.div`
  cursor: pointer;
  font-weight: 300;
`;

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin-top: 2%;

  ${mediaLarge(css`
    width: 25%;
  `)}
`;

export const Background = styled(PageBackground)`
  > div {
    background-size: 75%;
    background-position-x: 100%;
    background-repeat: no-repeat;
    background-color: white;
    background-image: url("/images/main-bg.png");
  }
`;
