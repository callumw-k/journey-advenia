import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { breakpoints, CentreContentSmall, colours } from "../../helpers";

import { StaticImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  background-image: linear-gradient(
    ${colours.primary},
    ${colours.secondary} 60%
  );
`;

const Inner = styled(CentreContentSmall)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  p {
    text-align: center;
  }
`;

export default function Hero() {
  console.log(
    "Callum and Jamo was here. And leave a review. Subscribe to Whiskey Wombat"
  );

  return (
    <Wrapper>
      <Inner>
        <h1
          css={css`
            text-align: center;
            margin-bottom: 0;
          `}
        >
          Follow Your Destiny.
        </h1>
        <StaticImage
          src="../../../images/book.jpg"
          alt="Cover of Journey Advenia."
          placeholder="blurred"
          css={css`
            margin: 3rem auto;
            width: 85%;
            box-shadow: 0px 24px 19px -10px rgba(0, 0, 0, 0.25);
            ${breakpoints.sm} {
              max-width: 500px;
            }
          `}
        />

        <p>
          In this spirited debut fantasy, three unlikely companions begin a
          daring journey across a land rich in mystery and wonder.{" "}
        </p>
        <p>
          An uplifting adventure written for the older half of young adults,
          this is a story that will empower readers with hope for the future.
        </p>
        <a
          css={css`
            padding: 0.75rem 1.5rem;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            text-decoration: none;
            background-color: ${colours.third};
            color: white;
            margin-bottom: 1rem;
            font-weight: bold;
            display: inline-block;
          `}
          href={
            "https://www.amazon.com.au/Journey-Advenia-Aiden-Kinder/dp/0648988910"
          }
        >
          PAPERBACK
        </a>
        <a
          css={css`
            padding: 0.75rem 1.5rem;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            text-decoration: none;
            background-color: ${colours.third};
            color: white;
            font-weight: bold;
            display: inline-block;
          `}
          href={"https://www.amazon.com.au/dp/B08WRZ376H"}
        >
          AMAZON E-BOOK
        </a>
      </Inner>
    </Wrapper>
  );
}
