import { css } from "@emotion/react";
import { breakpoints } from "./helpers";

export const GlobalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  /*          * + * {
    margin-top: 1rem;
  }*/

  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 18px;
    line-height: 1.4;
    height: 100%;
  }

  /* remove margin for main div that Gatsby mounts to */

  > div {
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #222;
    line-height: 1.1;
    font-family: "PT Serif", "serif";
    margin-bottom: 1rem;
    /*            + * {
      margin-top: 0.5rem;
    }*/
  }
  p,
  a,
  button {
    font-family: "Montserrat", "sans-serif";
  }

  p {
    font-size: 16px;
    ${breakpoints.sm} {
      font-size: 18px;
    }
    margin-bottom: 1rem;
  }

  strong {
    color: #222;
  }
  li {
    margin-top: 0.25rem;
  }
`;
