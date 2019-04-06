import { Link } from "react-router-dom";
import styled from "styled-components";

export default styled(Link)`
  text-decoration: none;
  color: #6d4878;
  font-size: 3.5vh;
  font-family: Lora;
  font-weight: 900;
  &:after {
    content: "";
    display: block;
    border-bottom: solid 1.5px #6d4878;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
  @media (max-width: 1000px) {
    font-size: 3vh;
  }
  @media (max-width: 900px) {
  }
  @media (max-width: 800px) {
  }
  @media (max-width: 700px) {
  }
  @media (max-width: 600px) {
  }
  @media (max-width: 500px) {
  }
  @media (max-width: 400px) {
    font-size: 3vh;
  }
`;
