import styled from "styled-components";

const Column = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5vh;
  font-family: Lora;
 
  color: rgb(255, 228, 250);
  &:hover {
    color: rgb(74, 72, 96);
  }

  &:hover {
    background: rgb(125, 190, 216);
    transition:  250ms ease-in-out;
    
  }
`;

export default Column