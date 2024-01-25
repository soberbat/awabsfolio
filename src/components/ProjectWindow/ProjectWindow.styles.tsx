import styled from "styled-components";
import motion from "framer-motion";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f1f1f1;
  color: #6f6f6f;
`;

export const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ProjectName = styled.h1`
  font-weight: 400;
  font-size: 1.3rem;
  width: 20%;
  padding-top: 3%;
  padding-left: 2vw;
  position: relative;
  z-index: 1;
`;

export const CornerDescription = styled.div`
  position: absolute;
  left: 0;
  width: 240px;
  z-index: 1;
  bottom: 0;
  font-weight: 400;
  font-size: 0.9rem;

  margin-bottom: 3%;
  padding-left: 2vw;
  > * {
    margin-bottom: 0.5vh;
    display: block;
  }
`;

export const Info = styled.span``;

export const Description = styled.span`
  margin-top: 2vh;
`;

export const Image = styled.img``;

export const BackgroundContainer = styled.div``;
