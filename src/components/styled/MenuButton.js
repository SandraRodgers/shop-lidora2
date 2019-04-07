import styled from "styled-components";


  const MenuButton = styled.div`
   display: none;
    width: 45px;
    height: 35px;
    position: relative;
    margin: 50vw auto;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
    background-color: white;
  &:hover{opacity: .5}
    @media (max-width: 1000px) {
        display: block;
  }

  `;

  export default MenuButton