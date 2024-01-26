import { ImgSize, PadType } from "@/data/data.types";
import styled, { css } from "styled-components";

interface IImage {
  isVisible: boolean;
  src: string;
  pos: Partial<PadType>;
  objFit?: string;
}

interface IMultipleImage {
  size?: ImgSize;
}
export const Image = styled.img<IImage>(
  ({ isVisible, src, pos, objFit }) => css`
    opacity: ${isVisible ? 1 : 0};
    transition: all ease-in-out 0.4s;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding-left: ${pos.paddingLeft};
    padding-right: ${pos.paddingRight};
    padding-top: ${pos.paddingTop};
    padding-bottom: ${pos.paddingBottom};
    object-fit: ${objFit ?? "cover"};
    background-image: url(src);
    background-color: ${objFit ? "white" : ""};
    cursor: pointer;
  `
);

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const InnerContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
`;

export const MultipleImageContainer = styled.div`
  display: flex;
  gap: 3rem;
  padding: 3%;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
`;

export const MultipleImage = styled(Image)<IMultipleImage & IImage>(
  ({ size }) => css`
    position: relative;
    width: ${size?.width ?? "40%"};
    height: ${size?.height ?? "80%"};
  `
);

export const DescriptionContainer = styled.div`
  width: 23.5%;
  display: flex;
  height: 100%;
  padding: 2%;
  align-items: end;
  padding-bottom: 10%;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 0.95rem;
`;

export const Commenter = styled.span``;

export const CommenterContainer = styled.div``;
