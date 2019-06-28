import styled from "styled-components";

const HiddenSideMenu = styled.div`
  display: none;

  @media (max-width: 1030px) {
    flex-direction: column;
    margin-left: 5vw;
    ${"" /* justify-content: space-around; */}
    height: 100vh;
    display: block;
    position: fixed;
    z-index: 1;
    width: 95%;
    opacity: ${props => (props.open ? "1" : "0")};
    background: rgb(240, 240, 240);
    max-height: ${props => (props.open ? "100%" : "0")};
    overflow: hidden;
    transition: ease-in-out 0.2s;
  }
  @media (max-width: 900px) {

  }
  @media (max-width: 800px) {

  }
  @media (max-width: 700px) {
 
  }
  @media (max-width: 600px) {
    width: 75%;
    margin-left: 0;


  @media (max-width: 500px) {
   
  }
  @media (max-width: 400px) {
 
  }
`;

export default HiddenSideMenu;
