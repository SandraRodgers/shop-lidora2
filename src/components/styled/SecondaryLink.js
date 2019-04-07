import styled from "styled-components"
import Link from "./Link"

const SecondaryLink = styled(Link)`
  font-size: 3vh;
  font-family: Zilla Slab;
  font-weight: 400;
  &:after {
    border-bottom: solid 1px rgb(255, 255, 255);
  }
  &:hover {
    font-weight: 900;
  }
`;

export default SecondaryLink