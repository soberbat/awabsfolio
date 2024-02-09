import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  padding: 1% 2%;
`;

export const Progress = styled.div`
  font-size: 5rem;
`;

export const Percentage = styled.h1`
  display: inline-block;
  font-size: 1.3rem;
`;
