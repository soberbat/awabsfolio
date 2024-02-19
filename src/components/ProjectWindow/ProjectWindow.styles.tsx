import styled from "styled-components";
import motion from "framer-motion";
import { mediaLarge } from "@/utils/media";
import css from "styled-jsx/css";

export const Container = styled.div`
  height: 100%;
  width: 100vw;
  background-color: #f1f1f1;
  color: #6f6f6f;
  top: 0;
  left: 0;

  ${mediaLarge(css`
    height: 100vh;
  `)}
`;

export const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ProjectName = styled.h1`
  font-weight: 400;
  font-size: 1rem;
  width: max-content;
  padding: 3%;
  box-shadow: 3px 3px 10px 3px #5e5e5e57;
  position: relative;
  z-index: 1;
  background-color: #f1f1f1;

  ${mediaLarge(css`
    font-size: 1.3rem;
    width: 20%;
    background-color: transparent;
    padding: unset;
    padding-top: 3%;
    padding-left: 2vw;
    box-shadow: none;
  `)}
`;

export const CornerDescription = styled.div`
  position: absolute;
  left: 0;
  width: 240px;
  z-index: 1;
  bottom: 0;
  font-weight: 400;
  font-size: 0.6rem;
  background-color: #f1f1f1;
  padding: 1rem;
  box-shadow: 3px 3px 10px 3px #5e5e5e37;

  margin-bottom: 3%;
  padding-left: 2vw;
  > * {
    margin-bottom: 0.5vh;
    display: block;
  }

  ${mediaLarge(css`
    padding: 1rem;
    background-color: transparent;
    box-shadow: none;
    font-size: 0.9rem;
  `)}
`;

export const Info = styled.span``;

export const Description = styled.span`
  margin-top: 2vh;
`;

export const Image = styled.img``;

export const BackgroundContainer = styled.div``;
