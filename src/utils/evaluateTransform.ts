const pageNumber = 3;
export const evaluateTransform = (offset: number) => {
  return `-${(100 / pageNumber) * offset}%`;
};
