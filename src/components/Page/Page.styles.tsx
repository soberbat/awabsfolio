import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: pink;
  display: inline-block;
`;

export const ProjectsContainer = styled.div`
  background-image: url("/images/works/works-bg.JPG");
  width: 100%;
  height: 100vh;
  position: relative;
  background-position: center;
  background-size: cover;
  opacity: 1;
`;

export const TopRow = styled.div`
  width: 100%;
  display: flex;
`;
