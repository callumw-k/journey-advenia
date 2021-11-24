import React from "react";
import "normalize.css";
import { Global, css } from "@emotion/react";
import Navbar from "./navbar";
import Footer from "./footer";
import styled from "@emotion/styled";
import "@fontsource/pt-serif";
import "@fontsource/montserrat";
import { GlobalStyles } from "./globalStyles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const mainStyle = css`
  flex: 1 0 auto;
`;

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Global styles={GlobalStyles} />
      <Wrapper>
        <Navbar />
        <main css={mainStyle}>{children}</main>
        <Footer />
      </Wrapper>
    </React.Fragment>
  );
}
