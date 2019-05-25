import React from "react";
import styled from "styled-components";

//redux
import { connect } from "react-redux";
import {openBag} from "../../../ducks/reducer"

//styled components
import Nav from "../../styled/Nav";
import Column from "../../styled/Column";
import SecondaryLink from "../../styled/SecondaryLink"

//imported assets
import flower from "../../../assets/flower.png";

//components
import HiddenNav from "./HiddenNav"
import Hamburger from "./Hamburger"
import SideMenu from "./SideMenu"

//css
import "./NavMain.css"

const SecondaryColumn = styled(Column)`
  &:hover {
    background: rgb(255, 255, 255);
  }
`;

///This component is the TOP NAVBAR

class NavMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          hiddenMenu: false,
            sideMenu: false
          
        };
      }
      showSideMenu = () => {
        this.setState({ sideMenu: !this.state.sideMenu });
      };

      showMenu = () => {
        this.setState({ hiddenMenu: !this.state.hiddenMenu });
      };
  
    
      
    render() {
    console.log(this.props.bagIsOpen)
    return (
      <div className='NM-container'>
         
        <Nav>
        <SideMenu open={this.state.sideMenu}/>
          <Column >
         
          <Hamburger onClick={this.showSideMenu}
              showSideMenu={this.showSideMenu} className="NM-Hamburger"/>
             
            <SecondaryLink  onMouseOver={this.showMenu} primary>Products</SecondaryLink>
          </Column>
          <Column>
            <SecondaryLink primary>Style Guide</SecondaryLink>
          </Column>
          <Column>
            <SecondaryLink primary>Custom</SecondaryLink>
          </Column>
          <SecondaryColumn>
            <SecondaryLink notHidden to="/">
              <img alt="flower"   style={{ height: "10vh" }} src={flower} />
            </SecondaryLink>
          </SecondaryColumn>
          <Column>
            <SecondaryLink primary>Account</SecondaryLink>
          </Column>
          <Column>
            <SecondaryLink primary>Contact</SecondaryLink>
          </Column>
          <Column  notHidden>
            <SecondaryLink  onClick={()=>this.props.openBag()} primary >Bag</SecondaryLink>
          </Column>
        </Nav>
        <HiddenNav  open={this.state.hiddenMenu} onMouseOut={this.showMenu} />
     
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { openBag: openBag }
)(NavMain);
