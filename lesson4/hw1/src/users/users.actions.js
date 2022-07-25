export const GO_PREV = 'GOPREV';
export const GO_NEXT = 'GONEXT';

export const goPrev = () => {
  return {
    type: GO_PREV,
  };
};
export const goNext = () => {
  return {
    type: GO_NEXT,
  };
};
