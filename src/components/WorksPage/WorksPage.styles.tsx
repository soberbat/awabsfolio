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
    background-image: url("/images/works-bg.jpg");
  }
`;

export const Back = styled.div`
  position: absolute;
  top: 2%;
  left: 1%;
  z-index: 2;
  cursor: pointer;
`;

export const Pointer = styled.img.attrs({
  src: "/images/pointer.png",
})`
  width: 80%;
  height: 80%;
`;
