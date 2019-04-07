import React, { Component } from "react";
import { connect } from "react-redux";

//css
import "./LandingMain.css";

//imported assets
import logo from "../../../assets/logo.png";
import coverpic from "../../../assets/shop-lidora.jpeg";

//styled components
import Link from "../../styled/Link";
import Paragraph from "../../styled/Paragraph";

class LandingMain extends Component {
  render() {
    return (
      <div className="LM-component">

        {/* LEFT COLUMN */}
        <div className="LM-left-column">
          <img className="LM-logo" alt="logo" src={logo} />
          <Paragraph>
            Fun and colors and all the fabrics of the rainbow. Shop Lidora
            clothing is handmade and each piece is one-of-a-kind. Shop the store
            for ready-made pieces or place your custom order.
          </Paragraph>
          <div className="LM-links">
            <Link to="/shop">Shop</Link>
            <Link to="/">Login</Link>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="LM-right-column">
          <img src={coverpic} className="LM-coverpic" />
        </div>
      </div>
    );
  }
}

export default LandingMain;
