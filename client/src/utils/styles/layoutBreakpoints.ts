const getMinWidth = (width: number) => `(min-width: ${width}px)`;

export const breakPoints = {
  lg: getMinWidth(992),
  md: getMinWidth(768),
  sm: getMinWidth(576),
  xl: getMinWidth(1200)
};
