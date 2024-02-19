import { mediaLarge } from "@/utils/media";
import styled from "styled-components";
import css from "styled-jsx/css";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: -1;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  z-index: 1;
  background-repeat: no-repeat;
  background-position-x: 10%;
  ${mediaLarge(css`
    background-position-x: 0%;
  `)}
`;

export const ColorOverlay = styled.span`
  background-color: white;
  opacity: 0.85;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;
