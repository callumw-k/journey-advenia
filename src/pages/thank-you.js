import React from "react";
import styled from "@emotion/styled";
import { CentreContentSmall } from "../components/helpers";
import Layout from "../components/layout";
import { css } from "@emotion/react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import SEO from "../components/seo";

const Wrapper = styled(CentreContentSmall)`
  text-align: center;
  margin: 4rem auto;
`;

const imgStyles = css`
  margin-top: 2rem;
`;

export default function ThankYou() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "dog.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 520, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title={"Thank you!"} />}
      <Wrapper>
        <h1
          css={css`
            margin-bottom: 2rem;
          `}
        >
          Thank you for your purchase!
        </h1>
        <p>Your copy of Journey Advenia is on its way. </p>
        <p>
          (Printing usually takes 5 business days. Delivery usually takes 1-3
          business days.)
        </p>
        <p>
          {" "}
          If you have any questions about your order, please contact{" "}
          <a href="mailto:support@aidenkinder.com">support@aidenkinder.com</a>
        </p>
        <Img
          alt={"Aiden's dog reading Journey Advenia."}
          css={imgStyles}
          fluid={data.file.childImageSharp.fluid}
        />
      </Wrapper>
    </Layout>
  );
}
