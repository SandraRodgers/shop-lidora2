import styled from "styled-components";

const Paragraph = styled.div`
  font-size: 3.5vh;
  color: rgb(69, 67, 63);
  padding: 6vh;
  margin-left: 5vw;
  width: 30vw;
  @media (max-width: 1000px) {
    font-size: 3vh;
  }
  @media (max-width: 900px) {
  }
  @media (max-width: 800px) {
    width: 75%;
    margin-left: 5vw;
    padding: 0vw;
  }
  @media (max-width: 700px) {
  }
  @media (max-width: 600px) {
  }
  @media (max-width: 500px) {
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export default Paragraph;
