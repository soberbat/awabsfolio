import { evaluateTransform } from "@/utils/evaluateTransform";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div).attrs({
  variants: {
    WorksPageVisible: { x: evaluateTransform(2) },
    WorksPageInvisible: { x: evaluateTransform(1) },
    AboutPageVisible: { x: "0%" },
    AboutPageInvisible: { x: evaluateTransform(1) },
    ProjectPageVisible: { y: "-50%" },
    ProjectPageInvisible: { y: 0 },
    BlogPageVisible: { y: "-50%" },
    BlogPageInvisible: { y: 0 },
  },
  initial: { x: evaluateTransform(1) },
  transition: { type: "spring", duration: 0.7, bounce: 0, delay: 0.1 },
})`
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
