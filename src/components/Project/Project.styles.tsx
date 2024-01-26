import { PosType } from "@/data/data.types";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled.div<{ pos: PosType }>(
  ({ pos: { top, left, bottom, right } }) => css`
    position: absolute;
    top: ${top};
    left: ${left};
    right: ${right};
    bottom: ${bottom};
    border-bottom: #6f6f6fba dashed 1px;
    width: 15%;
    padding-bottom: 0.5%;
    cursor: pointer;
  `
);

export const ProjectName = styled.h2`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  color: #6f6f6f;
  text-transform: uppercase;
`;
