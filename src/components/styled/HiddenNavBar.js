import styled from "styled-components";

const HiddenNavBar = styled.nav`
  display: flex;
  justify-content: space-around;

  height: 40vh;
  position: absolute;
  opacity: ${props => (props.open ? "1" : "0")};
  background: rgb(240, 240, 240);
  max-height: ${props => (props.open ? "100vh" : "0")};
  width: ${props => (props.open ? "100vw" : "0")};
  overflow: hidden;
  ${"" /* transition: linear 0.2s; */}
  @media (max-width: 1000px) {
    display: none;
  }
`;

export default HiddenNavBar;
