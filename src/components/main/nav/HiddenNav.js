import React from "react";
import styled from "styled-components";
import {withRouter} from 'react-router-dom'

import "./HiddenNav.css";

import HiddenNavBar from "../../styled/HiddenNavBar";
import LilacLink from "../../styled/LilacLink";

//redux
import { connect } from "react-redux";
import { showMenu, hideMenu } from "../../../ducks/reducer";

const Placeholder = styled.div`
  color: rgb(240, 240, 240);
  cursor: none;
  &:hover {
    color: rgb(240, 240, 240);
  }
`;

//This is the products menu that displays when you mouse-over "Products" in the top nav-bar

class HiddenNav extends React.Component {
  render() {

    return (
      <div  >
        <HiddenNavBar open={this.props.open}    >
          <div  className="HNB-clothing-div">
            <LilacLink to={this.props.location.pathname}>Clothing</LilacLink>
            <LilacLink to={"/shop/dresses"}  primary = "true">
              Dresses
            </LilacLink>
            <LilacLink  to={"/shop/shorts"} primary = "true">
              Shorts
            </LilacLink>
            <LilacLink  to={"/shop/shirts"} primary = "true">
              Shirts
            </LilacLink>
            <LilacLink  primary = "true" to={"/shop/bloomers"}>
              Bloomers
            </LilacLink>
            <LilacLink  to={"/shop/skirts"} primary = "true">
              Skirts
            </LilacLink>
            <LilacLink  to={"/shop/vests"} primary = "true">
              Vests
            </LilacLink>
            
          </div>
          <div className="HNB-accessories-div">
            <LilacLink to={this.props.location.pathname}>Accessories</LilacLink>
            <LilacLink  to={"/shop/bonnets"} primary = "true">
              Bonnets
            </LilacLink>
            <LilacLink  to={"/shop/bowties"} primary = "true">
              Bowties
            </LilacLink>
            <LilacLink
              
              to={"/shop/suspenders"}
              primary = "true"
            >
              Suspenders
            </LilacLink>
            <LilacLink  to={"/shop/hairbows"} primary = "true">
              Hairbows
            </LilacLink>
            <LilacLink  to={"/shop/headbands"} primary = "true">
              Headbands
            </LilacLink>
            <Placeholder primary = "true">placeholder</Placeholder>
          </div>
          <div className="HNB-baby-div">
            <LilacLink to={this.props.location.pathname}>Baby</LilacLink>
            <LilacLink  to={"/shop/bibdanas"} primary = "true">
              Bibdanas
            </LilacLink>
            <LilacLink
              
              to={"/shop/burpcloths"}
              primary = "true"
            >
              Burp Cloths
            </LilacLink>
            <LilacLink  to={"/shop/droolpads"} primary = "true">
              Drool Pads
            </LilacLink>
            <Placeholder primary = "true">placeholder</Placeholder>
            <Placeholder primary = "true">placeholder</Placeholder>
            <LilacLink to={"/shop/flashsale"}  primary = "true">Flash Sale!</LilacLink>
          </div>
        </HiddenNavBar>
      </div>
    );
  }
}

// export default withRouter(HiddenNav);

const mapStateToProps = state => state;

const MyComponent = connect(
  mapStateToProps,
  { showMenu: showMenu, hideMenu: hideMenu }
)(HiddenNav);
export default withRouter(MyComponent);