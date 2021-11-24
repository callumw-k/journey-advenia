import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { breakpoints, CentreContentSmall, colours } from "./helpers";
import { MdMenu } from "react-icons/md";
import NavLinks from "./navlinks";

const Wrapper = styled.header`
  background-color: ${colours.primary};
  padding: 1rem 0;
  transition-property: height;
  transition-duration: 100ms;
`;

const Inner = styled(CentreContentSmall)`
  display: flex;
  flex-direction: column; // set the two divs to stack on top of each other, so the menu icon and header are above each other.
  ${breakpoints.sm} {
    // on desktop, set them side by side and push them the full length apart.
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${breakpoints.max_sm} {
    // in desktop mode push the content far apart.
    justify-content: space-between;
  }
`;

const NavLinkWrapper = styled.nav`
  ${breakpoints.max_sm} {
    height: ${(props) => (props.isActive ? `${43 * 2}px` : "0")};
  }
  transition-property: height;
  transition-duration: 100ms;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  ${breakpoints.sm} {
    flex-direction: row;
  }

  * {
    ${breakpoints.max_sm} {
      opacity: ${(props) => (props.isActive ? `100%` : "0")};
      transition: 400ms ease-in opacity;
      transition-delay: 100ms;
    }
  }
`;

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      isActive: false,
    };
  }

  onClick() {
    let inverse = this.state.isActive;
    this.setState({ isActive: !inverse });
  }

  render() {
    return (
      <Wrapper isActive={this.state.isActive}>
        <Inner>
          <ContentWrapper>
            <h1
              css={css`
                font-size: 24px;
              `}
            >
              Aiden Kinder
            </h1>
            <MdMenu
              onClick={this.onClick}
              css={css`
                width: 35px;
                height: 35px;
                color: #222;
                ${breakpoints.sm} {
                  display: none;
                }
              `}
            />
          </ContentWrapper>

          <NavLinkWrapper isActive={this.state.isActive}>
            <NavLinks footer={false} />
          </NavLinkWrapper>
        </Inner>
      </Wrapper>
    );
  }
}
