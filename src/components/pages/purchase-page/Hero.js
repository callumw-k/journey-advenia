import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { breakpoints, CentreContentMedium } from "../../helpers";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Description from "./components/Description";
import Checkout from "./Checkout";
import { StaticImage } from "gatsby-plugin-image";

const Wrapper = styled(CentreContentMedium)``;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoints.md} {
    flex-direction: row;
    margin: 4rem 0;
  }
`;

const InnerContent = styled.div`
  max-width: 500px;
  margin: 0 auto;

  ${breakpoints.max_md} {
    margin: 2rem auto;
  }
`;

const imgStyles = css`
  margin: 3rem auto 0;

  ${breakpoints.md} {
    margin: 0 2rem 0 0;
  }

  max-width: 500px;
  width: 100%;
`;

export default function Hero() {
  return (
    <Wrapper>
      <h1
        css={css`
          text-align: center;
          margin-top: 4rem;
        `}
      >
        Journey Advenia
      </h1>
      <ContentWrapper>
        <StaticImage
          css={imgStyles}
          src="../../../images/book.jpg"
          alt="Buy Journey Advenia"
        />
        <InnerContent>
          <Description />
          <Checkout />
        </InnerContent>
      </ContentWrapper>
    </Wrapper>
  );
}
