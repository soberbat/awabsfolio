import styled from "styled-components";
import { motion } from "framer-motion";
import { IContainer } from "../Layout/Layout.styles";

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

// export const FixedContainer = styled(motion.div).attrs<IContainer>(
//   ({ isProjectVisible, isWorksVisible }) => ({
//     animate: {
//       y: isProjectVisible ? "-100%" : 0,
//       x: isWorksVisible ? "-50%" : 0,
//     },
//     transition: { type: "spring", stiffness: 170, damping: 30 },
//   })
// )<IContainer>`
//   position: fixed;
//   display: flex;
//   top: 0;
//   left: 0%;
//   width: auto;
//   height: auto;
// `;

export const TopRow = styled.div`
  width: 100%;
  display: flex;
`;
