import styled from "styled-components";

const BagSideMenu = styled.div`
   flex-direction: column;
    ${"" /* justify-content: space-around; */}
  
   
    position: fixed;
    margin-left: 60vw;
    height: 100vh;
    z-index: 1;
    width: 40%;
    opacity: ${props => (props.open ? "1" : "0")};
    background: rgb(240, 240, 240);
    max-height: ${props => (props.open ? "100%" : "0")};
    overflow: hidden;
    transition: 2s;

  @media (max-width: 1030px) {
   
  }
  @media (max-width: 900px) {
    width: 35%;
  }
  @media (max-width: 800px) {
    width: 40%;
  }
  @media (max-width: 700px) {
    width: 43%;
  }
  @media (max-width: 600px) {
    width: 46%;
  }
  @media (max-width: 500px) {
    width: 50%;
  }
  @media (max-width: 400px) {
    width: 60%;
  }
`;

export default BagSideMenu;
