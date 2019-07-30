import styled from "styled-components";

const BagSideMenu = styled.div`
   flex-direction: column;
    ${"" /* justify-content: space-around; */}
  

    position: fixed;
    margin-left: 50vw;
    height: 100vh;
    z-index: 5;
    ${'' /* width: 100%; */}
    opacity: ${props => (props.open ? "1" : "0")};
    background: rgb(240, 240, 240);
    max-height: ${props => (props.open ? "100%" : "0")};
    overflow: hidden;
   

  @media (max-width: 1030px) {
   
  }
  @media (max-width: 900px) {

  }
  @media (max-width: 800px) {
    margin-left: 20vw;
  }
  @media (max-width: 700px) {
   
  }
  @media (max-width: 600px) {
  }
  @media (max-width: 500px) {

  }
  @media (max-width: 400px) {
  
  }
`;

export default BagSideMenu;
