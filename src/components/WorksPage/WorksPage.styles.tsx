import { motion } from "framer-motion";
import styled from "styled-components";
import PageBackground from "../PageBackground/PageBackground";

export const PageContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: inline-block;
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const Background = styled(PageBackground)`
  div {
    background-image: url("/images/works-bg.JPG");
  }
`;

export const Back = styled.div`
  position: absolute;
  top: 2%;
  left: 1%;
  z-index: 2;
  cursor: pointer;
`;

export const Triangle = styled.div`
  rotate: -90deg;
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 40px solid black;
`;
export const TriangleBorder = styled(Triangle)`
  border-bottom-color: white;
  border-left-width: 19px;
  border-right-width: 19px;
  border-bottom-width: 38px;
`;

export const BackInnerContainer = styled.div`
  position: relative;
`;
