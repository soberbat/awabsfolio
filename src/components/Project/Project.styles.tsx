import { PosType } from "@/data/data.types";
import { mediaLarge } from "@/utils/media";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled.div<{ pos: PosType }>(
  ({ pos: { top, left, bottom, right } }) => css`
    border-bottom: #6f6f6fba dashed 1px;
    width: 55%;
    padding-bottom: 0.5%;
    cursor: pointer;

    ${mediaLarge(css`
      width: 15%;
      position: absolute;
      top: ${top};
      left: ${left};
      right: ${right};
      bottom: ${bottom};
    `)}
  `
);

export const ProjectName = styled.h2`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  color: #6f6f6f;
  text-transform: uppercase;

  ${mediaLarge(css`
    font-size: 1.3rem;
  `)}
`;
