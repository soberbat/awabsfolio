import { mediaLarge } from "@/utils/media";
import { motion } from "framer-motion";
import styled from "styled-components";
import css from "styled-jsx/css";

export const DescriptionContainer = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
})`
  width: 100%;
  display: flex;
  height: 100%;
  padding: 10% 10%;
  justify-content: flex-end;
  flex-direction: column;

  ${mediaLarge(css`
    padding: unset;
    width: 23.5%;
    gap: 2rem;
    padding: 2%;
    padding-bottom: 7%;
  `)}
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 0.5rem;
  text-align: justify;

  ${mediaLarge(css`
    font-size: 0.95rem;
    text-align: unset;
  `)}
`;

export const Commenter = styled.span`
  font-size: 0.4rem;

  ${mediaLarge(css`
    font-size: unset;
  `)}
`;

export const CommenterTitle = styled.span`
  text-transform: uppercase;
  font-size: 0.4rem;

  ${mediaLarge(css`
    font-size: 0.54rem;
  `)}
`;

export const CommenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-weight: 400;
`;
