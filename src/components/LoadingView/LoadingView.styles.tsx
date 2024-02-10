import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div).attrs({
  exit: { opacity: 0, filter: "blur(10px)" },
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  color: #6f6f6f;
  z-index: 1;
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  position: relative;
`;

export const Progress = styled.div`
  font-size: 5rem;
  padding: 1% 2%;
`;

export const Percentage = styled.h1`
  display: inline-block;
  font-size: 1.3rem;
  font-weight: 900;
`;

export const ProgressBar = styled(motion.div)`
  height: 0.4%;
  background-color: #6f6f6f;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: scaleX(0);
  transform-origin: left;
`;
