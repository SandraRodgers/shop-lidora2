import React from "react";
import styled, { css } from "styled-components";

import SecondaryLink from "../../styled/SecondaryLink";

const HiddenNavBar = styled.nav`
  display: flex;
  justify-content: space-around;

  height: 40vh;

  opacity: ${props => (props.open ? "1" : "0")};
  background: rgb(240, 240, 240);
  max-height: ${props => (props.open ? "100%" : "0")};
  overflow: hidden;
  transition: linear 0.2s;
`;


const LilacLink = styled(SecondaryLink)`
cursor: default;
font-family: Cousine;
font-weight: ${props => (props.primary ? 500 : 900)}
 color: rgb(74, 72, 96);
font-size: ${props => (props.primary ? "2vh" : "2.5vh")};
  &:hover {
    color: ${props => (props.primary ? "rgb(191, 97, 166)" : "rgb(74, 72, 96)")}
  }
  &:after {
    border-bottom: none;
  }
`;

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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "5vh",
              justifyContent: "space-between",
              paddingBottom: "5vh"
            }}
          >
            <LilacLink>Clothing</LilacLink>
            <LilacLink primary>Dresses</LilacLink>
            <LilacLink primary>Shorts</LilacLink>
            <LilacLink primary>Bloomers</LilacLink>
            <LilacLink primary>Skirts</LilacLink>
            <LilacLink primary>Vests</LilacLink>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "5vh",
              justifyContent: "space-between",
              paddingBottom: "5vh"
            }}
          >
            <LilacLink>Accessories</LilacLink>
            <LilacLink primary>Bonnets</LilacLink>
            <LilacLink primary>Bowties</LilacLink>
            <LilacLink primary>Suspenders</LilacLink>
            <LilacLink primary>Hairbows</LilacLink>
            <LilacLink primary>Headbands</LilacLink>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "5vh",
              justifyContent: "space-between",
              paddingBottom: "5vh"
            }}
          >
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
