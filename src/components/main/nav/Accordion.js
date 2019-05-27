import React from "react";
import "./Accordion.css";

//redux
import { connect } from "react-redux";
import {openBag} from "../../../ducks/reducer"

//styled-components
import LilacLink from "../../styled/LilacLink";

class Accordion extends React.Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render() {
    const { title, expand, onClick, content, nonLinks } = this.props;

    return (
      <div>
        <div
          className={expand ? "title is-expanded" : "title"}
          onClick={onClick}
        >
          {title === "Clothing" ? nonLinks[0] : null}
          {title === "Accessories" ? nonLinks[1] : null}
          {title === "Baby" ? nonLinks[2] : null}
          {title === "Style Guide" ? (
            <LilacLink to="/styleguide" className="Acc-heading-link" primary = "true" nothidden = "true">
              Style Guide
            </LilacLink>
          ) : null}
          {title === "Custom" ? (
            <LilacLink to="/custom" className="Acc-heading-link" primary = "true" nothidden = "true">
              Custom{" "}
            </LilacLink>
          ) : null}
          {title === "Account" ? (
            <LilacLink to="/user/account" className="Acc-heading-link" primary = "true" nothidden = "true">
              Account{" "}
            </LilacLink>
          ) : null}
          {title === "Contact" ? (
            <LilacLink to="/contact" className="Acc-heading-link" primary = "true" nothidden = "true">
              Contact{" "}
            </LilacLink>
          ) : null}
          {title === "Bag" ? (
            <LilacLink to="" className="Acc-heading-link" primary = "true" nothidden = "true">
              Bag{" "}
            </LilacLink>
          ) : null}
        </div>
        <div
          className={expand ? "content is-expanded" : "content"}
          onClick={onClick}
        >
          {content && (
            <div className="Acc-p">
              {content[0] === "Dresses" ? (
                <LilacLink
                  to={"/shop/dresses"}
                 
                  className="Acc-link"
                  primary = "true"
                  nothidden = "true"
                >
                  {content[0]}
                </LilacLink>
              ) : null}
              {content[1] === "Shorts" ? (
                <LilacLink
                  to={"/shop/shorts"}
                 
                  className="Acc-link"
                  primary = "true"
                  nothidden = "true"
                >
                  {content[1]}
                </LilacLink>
              ) : null}
              {content[2] === "Bloomers" ? (
                <LilacLink
                  to={"/shop/bloomers"}
                 
                  className="Acc-link"
                  primary = "true"
                  nothidden = "true"
                >
                  {content[2]}
                </LilacLink>
              ) : null}

              {content[3] === "Skirts" ? (
                <LilacLink
                  to={"/shop/skirts"}
                 
                  className="Acc-link"
                  primary = "true"
                  nothidden = "true"
                >
                  {content[3]}
                </LilacLink>
              ) : null}
              {content[4] === "Vests" ? (
                <LilacLink
                  to={"/shop/vests"}
                 
                  className="Acc-link"
                  primary = "true"
                  nothidden = "true"
                >
                  {content[4]}
                </LilacLink>
              ) : null}


      
              {content[0] === "Bonnets" ? (
                <LilacLink
                  to={"/shop/bonnets"}
                 
                  className="Acc-link"
                  primary = "true"
                  nothidden = "true"
                >
                  {content[0]}
                </LilacLink>
              ) : null}
              {content[1] === "Bowties" ? (
                <LilacLink
                  to={"/shop/bowties"}
                 
                  className="Acc-link"
                  primary = "true"
                  nothidden = "true"
                >
                  {content[1]}
                </LilacLink>
              ) : null}
              {content[2] === "Suspenders" ? (
                <LilacLink
                  to={"/shop/suspenders"}
                 
                  className="Acc-link"
                  primary = "true"
                  nothidden = "true"
                >
                  {content[2]}
                </LilacLink>
              ) : null}

              {content[3] === "Hairbows" ? (
                <LilacLink
                  to={"/shop/hairbows"}
                 
                  className="Acc-link"
                  primary = "true"
                  nothidden = "true"
                >
                  {content[3]}
                </LilacLink>
              ) : null}
              {content[4] === "Headbands" ? (
                <LilacLink
                  to={"/shop/headbands"}
                 
                  className="Acc-link"
                  primary = "true"
                  nothidden = "true"
                >
                  {content[4]}
                </LilacLink>
              ) : null}


{content[0] === "Bibdanas" ? (
                <LilacLink
                  to={"/shop/bibdanas"}
                 
                  className="Acc-link"
                  primary = "true"
                  nothidden = "true"
                >
                  {content[0]}
                </LilacLink>
              ) : null}
              {content[1] === "Burp Cloths" ? (
                <LilacLink
                  to={"/shop/burpcloths"}
                 
                  className="Acc-link"
                  primary = "true"
                  nothidden = "true"
                >
                  {content[1]}
                </LilacLink>
              ) : null}
              {content[2] === "Drool Pads" ? (
                <LilacLink
                  to={"/shop/droolpads"}
                 
                  className="Acc-link"
                  primary = "true"
                  nothidden = "true"
                >
                  {content[2]}
                </LilacLink>
              ) : null}

            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;


export default connect(
  mapStateToProps,
  { openBag: openBag }
)(Accordion);