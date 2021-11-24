import React from "react";
import styled from "@emotion/styled";
import NavLinks from "./navlinks";
import { breakpoints, CentreContentLarge, colours } from "./helpers";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { css } from "@emotion/react";

const Wrapper = styled.footer`
  background-color: ${colours.footer};

  color: white;
  padding: 4rem 0 1rem;
`;

const Inner = styled(CentreContentLarge)`
  display: grid;
  justify-content: left;

  ${breakpoints.sm} {
    justify-content: space-between;
    grid-template-columns: repeat(3, max-content);
  }

  h3,
  a {
    color: white;
    font-family: "Montserrat";
  }

  a {
    color: #c8c8c8;
    padding: 0.25rem 0;
  }

  & > :not(:last-child) {
    ${breakpoints.max_sm} {
      margin-bottom: 3rem;
    }
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const iconStyles = css`
  width: 30px;
  height: 30px;
  margin-right: 0.5rem;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Inner>
        <div>
          <h3>Aiden Kinder</h3>
          <a href={"mailto:business@aidenkinder.com"}>
            business@aidenkinder.com
          </a>
          <p> </p>
        </div>
        <LinkWrapper>
          <h3>Useful Links</h3>
          <NavLinks footer={true} />
        </LinkWrapper>
        <div>
          <h3>Socials</h3>
          <a href="https://www.facebook.com/aidenkinder.author/">
            <FaFacebookF css={iconStyles} />
          </a>
          <a href="https://www.instagram.com/aiden_kinder/">
            <FaInstagram css={iconStyles} />
          </a>
        </div>
      </Inner>
      <p
        css={css`
          text-align: center;
          margin-top: 4rem;
          font-size: 14px;
        `}
      >
        Website built by{" "}
        <a
          css={css`
            color: white;
          `}
          href="https://callumwk.com"
        >
          Callum Wellwood-Kane
        </a>
      </p>
    </Wrapper>
  );
}
