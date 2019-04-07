import styled from "styled-components"
import Link from "./Link"

const SecondaryLink = styled(Link)`
  font-size: 3vh;
  font-family: Zilla Slab;
  font-weight: 400;
  &:after {
    border-bottom: solid 1px rgb(255, 255, 255);
  }
  &:hover {
    font-weight: 900;
  }
  
@media (max-width: 1000px) {
    display: ${props => props.notHidden ? 'inline': 'none'}
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

}
`;

export default SecondaryLink