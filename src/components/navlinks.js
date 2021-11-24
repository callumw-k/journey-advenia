import React from "react";

import styled from "@emotion/styled";

import { Link } from "gatsby";

const NavLink = styled(Link)`
  color: black;
  line-height: 1.4;
  text-decoration: none;
  padding: 0.5rem;
  &.current-page {
    text-decoration: underline;
  }
`;

function PrivacyLink(props) {
  return (
    <NavLink activeClassName={"current-page"} to={"/privacy-policy"}>
      Privacy Policy
    </NavLink>
  );
}

export default function NavLinks(props) {
  return (
    <React.Fragment>
      <NavLink activeClassName={"current-page"} to={"/"}>
        Home
      </NavLink>
      <NavLink activeClassName={"current-page"} to={"/buy-the-book"}>
        Buy The Book
      </NavLink>
      {props.footer ? <PrivacyLink /> : null}
    </React.Fragment>
  );
}
