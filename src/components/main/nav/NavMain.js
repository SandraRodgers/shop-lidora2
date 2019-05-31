import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { openBag } from "../../../ducks/reducer";

//styled components
import Nav from "../../styled/Nav";
import Column from "../../styled/Column";
import SecondaryLink from "../../styled/SecondaryLink";

//imported assets
import flower from "../../../assets/flower.png";

//components
import HiddenNav from "./HiddenNav";
import Hamburger from "./Hamburger";
import SideMenu from "./SideMenu";
import Bag from "../bag/Bag";

//css
import "./NavMain.css";

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
      sideMenu: false,
      scroll: false
    };
  }

  nav = React.createRef();

  showSideMenu = () => {
    this.setState({ sideMenu: !this.state.sideMenu });
  };

  showMenu = () => {
    this.setState({ hiddenMenu: !this.state.hiddenMenu });
  };

  render() {
    console.log(this.state.scrolling);
    return (
      <div
        className="NM-container"
     
      >
        <Bag open={this.props.bagIsOpen} />
        <Nav>
          <SideMenu open={this.state.sideMenu} />
          <Column>
            <Hamburger
              onClick={this.showSideMenu}
              showSideMenu={this.showSideMenu}
              className="NM-Hamburger"
            />

            <SecondaryLink
              to="/shop"
              onMouseOver={this.showMenu}
              primary="true"
            >
              Products
            </SecondaryLink>
          </Column>
          <Column>
            <SecondaryLink to="/styleguide" primary="true">
              Style Guide
            </SecondaryLink>
          </Column>
          <Column>
            <SecondaryLink to="/custom" primary="true">
              Custom
            </SecondaryLink>
          </Column>
          <SecondaryColumn>
            <SecondaryLink nothidden="true" to="/">
              <img alt="flower" style={{ height: "10vh" }} src={flower} />
            </SecondaryLink>
          </SecondaryColumn>
          <Column>
            <SecondaryLink to="/user/account" primary="true">
              Account
            </SecondaryLink>
          </Column>
          <Column>
            <SecondaryLink to="/contact" primary="true">
              Contact
            </SecondaryLink>
          </Column>
          <Column nothidden="true">
            <SecondaryLink
              to={this.props.location.pathname}
              onClick={() => this.props.openBag()}
              primary="true"
            >
              Bag
            </SecondaryLink>
          </Column>
        </Nav>

        <HiddenNav open={this.state.hiddenMenu} onMouseOut={this.showMenu} />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(
  connect(
    mapStateToProps,
    { openBag: openBag }
  )(NavMain)
);
