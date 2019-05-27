import styled from "styled-components";
import SecondaryLink from "./SecondaryLink"




const LilacLink = styled(SecondaryLink)`
cursor: default;
font-family: Cousine;
font-weight: ${props => (props.primary ? "500" : "900")};
 color: rgb(74, 72, 96);
font-size: ${props => (props.primary ? "2vh" : "2.5vh")};
  &:hover {
    color: ${props => (props.primary ? "rgb(191, 97, 166)" : "rgb(74, 72, 96)")}
  }
  &:after {
    border-bottom: none;
  }
`;

export default LilacLink