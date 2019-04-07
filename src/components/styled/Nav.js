
import styled from "styled-components";

const Nav = styled.nav`
width: 100%;
height: 15vh;
background: ${props =>
  props.primary ? "rgb(255, 228, 250)" : "rgb(255,255,255)"};
display: flex;
justify-content: center;
align-items: center;

`

export default Nav