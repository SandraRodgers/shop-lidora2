import styled from "styled-components";

export const Form = styled.form`
  padding-top: 5vh;
  margin-top: 25vh;
  width: 70vw;
  min-height: 100vh;
  display: flex;
  border: 2px solid lightgray;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: blue;

  margin-bottom: 5vh;
`;

export const Input = styled.input`
  background: ${props => (props.clicked ? "rgb(240,240,240)" : "white")};
  position: relative;

  width: 45vw;
  
  height: 4vh;
  border: 2px solid lightgray;
  background-color: white;
  font-size: 2.5vh;
`;

export const Select = styled.select`
  background-color: white;
  width: 45vw;
  position: relative;
  height: 4vh;
  font-size: 2.5vh;
  background-color: white;
  border: 2px solid lightgray;
`;

export const Image = styled.img`
  height: 30vh;
  width: 25vh;
  border-style: solid;
  border-color: lightgray;
  background-color: white;
`;

export const FormSubmit = styled.button`
  width: 20vh;
  font-family: "Zilla Slab";
  position: relative;
  height: 5vh;
  background-color: #3ca6cd;
  font-size: 2.5vh;
  color: #f0f0f0;
  font-weight: 600;
  margin-top: 3vh;
  margin-bottom: 5vh;
`;
