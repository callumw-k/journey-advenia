import React from "react";
import Review from "../../review";
import styled from "@emotion/styled";
import { CentreContentSmall } from "../../helpers";

const Wrapper = styled(CentreContentSmall)`
  padding: 2rem 0;

  & > :not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export default function MobileHomeReview() {
  return (
    <Wrapper>
      <Review
        quote={`“ A riveting and thrilling read, from an author wise beyond his years. ”`}
      />
      <Review quote={`" A refreshing take on fantasy. "`} />
      <Review quote={`" A wonderful read for fantasy lovers. "`} />
      <Review quote={`" Shines with all the charm of a classic adventure. "`} />
    </Wrapper>
  );
}
