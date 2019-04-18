import React from "react";
import styled from "styled-components";

import "./HiddenNav.css";

import HiddenNavBar from "../../styled/HiddenNavBar";
import LilacLink from "../../styled/LilacLink";

const Placeholder = styled.div`
  color: rgb(240, 240, 240);
  cursor: none;
  &:hover {
    color: rgb(240, 240, 240);
  }
`;

export default class HiddenNav extends React.Component {
  render() {
    return (
      <div>
        <HiddenNavBar open={this.props.open}>
          <div className="HNB-clothing-div">
            <LilacLink>Clothing</LilacLink>
            <LilacLink to={"/shop/dresses"} onClick={this.props.open} primary>
              Dresses
            </LilacLink>
            <LilacLink onClick={this.props.open} to={"/shop/shorts"} primary>
              Shorts
            </LilacLink>
            <LilacLink onClick={this.props.open} primary to={"/shop/bloomers"}>
              Bloomers
            </LilacLink>
            <LilacLink onClick={this.props.open} to={"/shop/skirts"} primary>
              Skirts
            </LilacLink>
            <LilacLink onClick={this.props.open} to={"/shop/vests"} primary>
              Vests
            </LilacLink>
          </div>
          <div className="HNB-accessories-div">
            <LilacLink>Accessories</LilacLink>
            <LilacLink onClick={this.props.open} to={"/shop/bonnets"} primary>Bonnets</LilacLink>
            <LilacLink onClick={this.props.open} to={"/shop/bowties"} primary>Bowties</LilacLink>
            <LilacLink onClick={this.props.open} to={"/shop/suspenders"} primary>Suspenders</LilacLink>
            <LilacLink onClick={this.props.open} to={"/shop/hairbows"} primary>Hairbows</LilacLink>
            <LilacLink onClick={this.props.open} to={"/shop/headbands"} primary>Headbands</LilacLink>
          </div>
          <div className="HNB-baby-div">
            <LilacLink>Baby</LilacLink>
            <LilacLink onClick={this.props.open} to={"/shop/bibdanas"} primary>Bibdanas</LilacLink>
            <LilacLink onClick={this.props.open} to={"/shop/burpcloths"} primary>Burp Cloths</LilacLink>
            <LilacLink onClick={this.props.open} to={"/shop/droolpads"} primary>Drool Pads</LilacLink>
            <Placeholder primary>placeholder</Placeholder>
            <Placeholder primary>placeholder</Placeholder>
          </div>
        </HiddenNavBar>
      </div>
    );
  }
}
