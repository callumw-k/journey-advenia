import styled from "@emotion/styled";
import { Link } from "gatsby";
import { colours } from "./helpers";

export const Button = styled(Link)`
  padding: 0.75rem 1.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-decoration: none;
  background-color: ${colours.third};
  color: white;
  font-weight: bold;
  display: inline-block;
`;
