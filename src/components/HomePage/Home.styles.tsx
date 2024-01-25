import { motion } from "framer-motion";
import styled from "styled-components";
import PageBackground from "../PageBackground/PageBackground";

export const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
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
  padding: 4%;
`;

export const Name = styled.h1`
  font-weight: 400;
`;

export const Tab = styled.div`
  cursor: pointer;
  font-weight: 300;
`;

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 25%;
  margin-top: 2%;
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
