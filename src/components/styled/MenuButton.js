import styled from "styled-components";


  const MenuButton = styled.div`
   display: none;
    width: 45px;
    height: 35px;
    
    z-index: 10;
    margin: 50vw auto;
    transform: rotate(0deg);
    transition:  0.5s ease-in-out;
    background: ${props => (props.clicked ? "rgb(240,240,240)" : "white")};
    cursor: pointer;
    ${'' /* background-color: white; */}
  &:hover{opacity: .5}
  
    @media (max-width: 1030px) {
        display: block;
     
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
    margin-left: 0vw;
   
  }
  @media (max-width: 400px) {
  height: 25px;
  width: 10vw;
  }

  `;

  export default MenuButton