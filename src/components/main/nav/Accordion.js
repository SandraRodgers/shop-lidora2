import React from "react";
import "./Accordion.css";
import LilacLink from "../../styled/LilacLink";

class Accordion extends React.Component {
  render() {
    const { title, expand, onClick, content, nonLinks } = this.props;
console.log(this.props.open)
    return (
      <div>
        <dt
          className={expand ? "title is-expanded" : "title"}
          onClick={onClick}
        >
          {title === "Clothing" ? nonLinks[0] : null}
          {title === "Accessories" ? nonLinks[1] : null}
          {title === "Baby" ? nonLinks[2] : null}
          {title === "Style Guide" ? (
            <LilacLink className="Acc-heading-link" primary notHidden>
              Style Guide
            </LilacLink>
          ) : null}
          {title === "Custom" ? (
            <LilacLink className="Acc-heading-link" primary notHidden>
              Custom{" "}
            </LilacLink>
          ) : null}
          {title === "Account" ? (
            <LilacLink className="Acc-heading-link" primary notHidden>
              Account{" "}
            </LilacLink>
          ) : null}
          {title === "Contact" ? (
            <LilacLink className="Acc-heading-link" primary notHidden>
              Contact{" "}
            </LilacLink>
          ) : null}
          {title === "Bag" ? (
            <LilacLink className="Acc-heading-link" primary notHidden>
              Bag{" "}
            </LilacLink>
          ) : null}
        </dt>
        <dd
          className={expand ? "content is-expanded" : "content"}
          onClick={onClick}
        >
          {content && (
            <div className="Acc-p">
              {content[0] === "Dresses" ? (
                <LilacLink
                  to={"/shop/dresses"}
                  onClick={this.props.open}
                  className="Acc-link"
                  primary
                  notHidden
                >
                  {content[0]}
                </LilacLink>
              ) : null}
              {content[1] === "Shorts" ? (
                <LilacLink
                  to={"/shop/shorts"}
                  onClick={this.props.open}
                  className="Acc-link"
                  primary
                  notHidden
                >
                  {content[1]}
                </LilacLink>
              ) : null}
              {content[2] === "Bloomers" ? (
                <LilacLink
                  to={"/shop/bloomers"}
                  onClick={this.props.open}
                  className="Acc-link"
                  primary
                  notHidden
                >
                  {content[2]}
                </LilacLink>
              ) : null}

              {content[3] === "Skirts" ? (
                <LilacLink
                  to={"/shop/skirts"}
                  onClick={this.props.open}
                  className="Acc-link"
                  primary
                  notHidden
                >
                  {content[3]}
                </LilacLink>
              ) : null}
              {content[4] === "Vests" ? (
                <LilacLink
                  to={"/shop/vests"}
                  onClick={this.props.open}
                  className="Acc-link"
                  primary
                  notHidden
                >
                  {content[4]}
                </LilacLink>
              ) : null}


      
              {content[0] === "Bonnets" ? (
                <LilacLink
                  to={"/shop/bonnets"}
                  onClick={this.props.open}
                  className="Acc-link"
                  primary
                  notHidden
                >
                  {content[0]}
                </LilacLink>
              ) : null}
              {content[1] === "Bowties" ? (
                <LilacLink
                  to={"/shop/bowties"}
                  onClick={this.props.open}
                  className="Acc-link"
                  primary
                  notHidden
                >
                  {content[1]}
                </LilacLink>
              ) : null}
              {content[2] === "Suspenders" ? (
                <LilacLink
                  to={"/shop/suspenders"}
                  onClick={this.props.open}
                  className="Acc-link"
                  primary
                  notHidden
                >
                  {content[2]}
                </LilacLink>
              ) : null}

              {content[3] === "Hairbows" ? (
                <LilacLink
                  to={"/shop/hairbows"}
                  onClick={this.props.open}
                  className="Acc-link"
                  primary
                  notHidden
                >
                  {content[3]}
                </LilacLink>
              ) : null}
              {content[4] === "Headbands" ? (
                <LilacLink
                  to={"/shop/headbands"}
                  onClick={this.props.open}
                  className="Acc-link"
                  primary
                  notHidden
                >
                  {content[4]}
                </LilacLink>
              ) : null}


{content[0] === "Bibdanas" ? (
                <LilacLink
                  to={"/shop/bibdanas"}
                  onClick={this.props.open}
                  className="Acc-link"
                  primary
                  notHidden
                >
                  {content[0]}
                </LilacLink>
              ) : null}
              {content[1] === "Burp Cloths" ? (
                <LilacLink
                  to={"/shop/burpcloths"}
                  onClick={this.props.open}
                  className="Acc-link"
                  primary
                  notHidden
                >
                  {content[1]}
                </LilacLink>
              ) : null}
              {content[2] === "Drool Pads" ? (
                <LilacLink
                  to={"/shop/droolpads"}
                  onClick={this.props.open}
                  className="Acc-link"
                  primary
                  notHidden
                >
                  {content[2]}
                </LilacLink>
              ) : null}

            </div>
          )}
        </dd>
      </div>
    );
  }
}

export default Accordion;
