import React from "react";
import styled, { css } from "styled-components";

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
            <LilacLink primary>Dresses</LilacLink>
            <LilacLink primary>Shorts</LilacLink>
            <LilacLink primary>Bloomers</LilacLink>
            <LilacLink primary>Skirts</LilacLink>
            <LilacLink primary>Vests</LilacLink>
          </div>
          <div className="HNB-accessories-div">
            <LilacLink>Accessories</LilacLink>
            <LilacLink primary>Bonnets</LilacLink>
            <LilacLink primary>Bowties</LilacLink>
            <LilacLink primary>Suspenders</LilacLink>
            <LilacLink primary>Hairbows</LilacLink>
            <LilacLink primary>Headbands</LilacLink>
          </div>
          <div className="HNB-baby-div">
            <LilacLink>Baby</LilacLink>
            <LilacLink primary>Bibdanas</LilacLink>
            <LilacLink primary>Burp Cloths</LilacLink>
            <LilacLink primary>Drool Pads</LilacLink>
            <Placeholder primary>placeholder</Placeholder>
            <Placeholder primary>placeholder</Placeholder>
          </div>
        </HiddenNavBar>
      </div>
    );
  }
}
