import { Link } from "react-router-dom";
import styled from "styled-components";

export default styled(Link)`
  text-decoration: none;

  ${'' /* color: rgb(74, 72, 96); */}
  color: ${props => (props.red ? 'rgb(207, 8, 8)': "rgb(74, 72, 96)")};
  ${'' /* z-index: 2; */}
  font-size: 3.5vh;
  font-family: Junge;
  ${'' /* z-index: 1; */}
  font-weight: 900;

  &:hover { color: ${props =>
    props.primary ? "rgb(255,255,255)" : "rgb(74, 72, 96)"};}
    ${'' /* &:hover { color: ${props =>
    props.red ? "rgb(255,99,71)" : "rgb(74, 72, 96)"};} */}
  &:after {
    content: "";
    display: block;
    border-bottom: solid 1.5px rgb(74, 72, 96);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  ${'' /* &:after  {border-bottom: ${props => props.red ? 'solid 1.5px rgb(255,99,71)' :'solid 1.5px rgb(74, 72, 96)'}}  */}
 
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
