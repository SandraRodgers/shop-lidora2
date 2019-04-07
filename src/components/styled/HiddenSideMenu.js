import styled from "styled-components";

const HiddenSideMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  height: 80vh;
  width: 30%;
  opacity: ${props => (props.open ? "1" : "0")};
  background: rgb(240,240,240);
  max-height: ${props => (props.open ? "100%" : "0")};
  overflow: hidden;
  transition: ease-in-out 0.2s;
  @media (max-width: 1000px) {
        display: flex;
  }
`;

export default HiddenSideMenu