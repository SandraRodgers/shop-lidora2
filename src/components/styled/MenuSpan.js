import styled from "styled-components";

const MenuSpan = styled.span`
    
    display: block;
    display: none;
    position: absolute;
    height: 4px;
    width: 70%;
    background-color: rgb(74, 72, 96);
    &:hover{background-color: rgb(74, 72, 96);}
    
    border-radius: 9px;
    opacity: 1;
    left: 0;
    
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
    &:nth-child(1) {
        top: ${props => (props.open ? "13px" : "0px")};
        -webkit-transform: ${props =>
          props.open ? "rotate(135deg)" : "rotate(0deg)"};
        -moz-transform: ${props =>
          props.open ? "rotate(135deg)" : "rotate(0deg)"};
        -o-transform: ${props =>
          props.open ? "rotate(135deg)" : "rotate(0deg)"};
        transform: ${props =>
          props.open ? "rotate(135deg)" : "rotate(0deg)"};}

    &:nth-child(2) {
        opacity: ${props => (props.open ? "0" : "1")};
        top: ${props => (props.open ? "0px" : "10px")};
        left: ${props => (props.open ? "-60px" : "0px")};
    }
    &:nth-child(3); {
        top: ${props => (props.open ? "13px" : "19px")};
        -webkit-transform: ${props =>
          props.open ? "rotate(-135deg)" : "rotate(0deg)"};
        -moz-transform: ${props =>
          props.open ? "rotate(-135deg)" : "rotate(0deg)"};
        -o-transform: ${props =>
          props.open ? "rotate(-135deg)" : "rotate(0deg)"};
        transform: ${props =>
          props.open ? "rotate(-135deg)" : "rotate(0deg)"};}
    }
    @media (max-width: 1030px) {
        display: block;
  }
  @media (max-width: 500px) {
    margin-left: 5vw;
  }
  `;

export default MenuSpan;
