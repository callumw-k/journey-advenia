import styled from "@emotion/styled";

export const CentreContentSmall = styled.div`
  margin: 0 auto;
  max-width: 900px;
  width: 90%;
`;

export const CentreContentMedium = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  width: 90%;
`;

export const CentreContentLarge = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 90%;
`;

export const colours = {
  primary: "#BFD9E3",
  secondary: "#FBF1E1",
  third: "#FFA325",
  footer: "#21374a",
};

export const breakpoints = {
  sm: "@media (min-width: 768px)",
  md: "@media (min-width: 998px)",
  max_sm: "@media (max-width: 768px)",
  max_md: "@media (max-width: 998px)",
};

export function viewportGenerator(width, max_min) {
  return `@media (${max_min}-width: ${width}px)`;
}
