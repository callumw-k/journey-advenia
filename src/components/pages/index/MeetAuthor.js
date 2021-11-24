import React from "react";
import styled from "@emotion/styled";
import { CentreContentSmall, colours } from "../../helpers";
import { css } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  padding: 2rem 0;
`;
const Inner = styled(CentreContentSmall)`
  & > p {
    text-align: center;
  }
`;
export default function MeetAuthor() {
  return (
    <Wrapper>
      <Inner>
        <h2
          css={css`
            text-align: center;
          `}
        >
          Meet the Author.
        </h2>
        <hr
          css={css`
            width: 50px;
            border: 2px solid ${colours.third};
            display: block;
            margin: 2rem auto;
          `}
        />

        <StaticImage
          src="../../../images/aiden.jpg"
          alt="Aiden Kinder holding Journey Advenia."
          quality="90"
          css={css`
            width: 80%;
            display: block;
            max-width: 500px;
            margin: 0 auto 2rem;
          `}
        />
        <p>
          Aiden Kinder is an Australian author based in Victoria. In Grade
          Three, he discovered he was good at writing, and for lack of any other
          skills, decided to try and do that for a living.{" "}
        </p>
        <p>
          He is notable for building orphanages, saving the poor, and being very
          handsome.
        </p>
        <p>Journey Advenia is his first novel.</p>
      </Inner>
    </Wrapper>
  );
}
