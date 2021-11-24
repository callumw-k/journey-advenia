import React from "react";
import styled from "@emotion/styled";
import { MdStar } from "react-icons/md";
import { css } from "@emotion/react";

const Wrapper = styled.div``;
const Star = styled(MdStar)`
  fill: #ffce31;
  margin: 0 2px;
  width: 30px;
  height: 30px;
`;
const StarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 1.5rem;
`;

export default function Review({ quote }) {
  return (
    <Wrapper>
      <StarWrapper>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </StarWrapper>
      <p
        css={css`
          text-align: center;
        `}
      >
        {quote}
      </p>
    </Wrapper>
  );
}
