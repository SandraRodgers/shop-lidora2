import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  getDress,
  getBonnet,
  getShort,
  getBloomer,
  getSkirt,
  getVest,
  getBibdana,
  getBowtie,
  getBurpcloth,
  getDroolpad,
  getHairbow,
  getHeadband,
  getSuspender,
  getUserSession,
  addToCart
} from "../../../ducks/reducer";
import "./product.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: []
    };
  }

  componentDidMount() {
    this.props.getUserSession();
    axios
      .get(`/api/product/${this.props.match.params.id}`)
      .then(response => {
        console.log(this.props.match.params.id);
        this.setState({ productInfo: response.data });
        //we get the productid from the component and set state so that productInfo contains that product (object)
      })
      .then(() => {
        console.log(this.state.productInfo);
        if (this.state.productInfo[0].category === "dresses") {
          this.props.getDress(this.state.productInfo[0].dressesid);
        }
        if (this.state.productInfo[0].category === "bonnets") {
          this.props.getBonnet(this.state.productInfo[0].bonnetsid);
        }
        if (this.state.productInfo[0].category === "shorts") {
          this.props.getShort(this.state.productInfo[0].shortsid);
        }
        if (this.state.productInfo[0].category === "bloomers") {
          this.props.getBloomer(this.state.productInfo[0].bloomersid);
        }
        if (this.state.productInfo[0].category === "skirts") {
          this.props.getSkirt(this.state.productInfo[0].skirtsid);
        }
        if (this.state.productInfo[0].category === "vests") {
          this.props.getVest(this.state.productInfo[0].vestsid);
        }

        if (this.state.productInfo[0].category === "bibdanas") {
          this.props.getBibdana(this.state.productInfo[0].bibdanasid);
        }

        if (this.state.productInfo[0].category === "bowties") {
          this.props.getBowtie(this.state.productInfo[0].bowtiesid);
        }

        if (this.state.productInfo[0].category === "burpcloths") {
          this.props.getBurpcloth(this.state.productInfo[0].burpclothsid);
        }

        if (this.state.productInfo[0].category === "droolpads") {
          this.props.getDroolpad(this.state.productInfo[0].droolpadsid);
        }

        if (this.state.productInfo[0].category === "hairbows") {
          this.props.getHairbow(this.state.productInfo[0].hairbowsid);
        }

        if (this.state.productInfo[0].category === "headbands") {
          this.props.getHeadband(this.state.productInfo[0].headbandsid);
        }

        if (this.state.productInfo[0].category === "suspenders") {
          this.props.getSuspender(this.state.productInfo[0].suspendersid);
        }
      });
  }

  render() {
    console.log(this.props.match);
    let toggleBag;

    this.props.bagIsOpen === true ? (toggleBag = -1) : (toggleBag = 1);
    console.log(this.props.bagIsOpen);
    return (
      <div>
        <div className="container">
          <div className="column1">
            {this.props.currentProduct[0] && (
              <img
                className="product-img"
                src={this.props.currentProduct[0].image}
                alt=""
              />
            )}
          </div>
          <div className="column2">
            {this.props.currentProduct[0] && (
              <div className="product-title">
                {this.props.currentProduct[0].name}
              </div>
            )}
            {this.props.currentProduct[0] && (
              <div className="product-description">
                {this.props.currentProduct[0].description}
              </div>
            )}

            {this.props.currentProduct[0] && (
              <div className="product-price-div">
                Price:{" "}
                <div className="product-price">
                  ${this.props.currentProduct[0].price}
                </div>{" "}
              </div>
            )}
            {this.props.currentProduct[0] && (
              <div className="product-size-options">
                <div className="product-size-heading">Size: </div>

                <select
                  style={{ zIndex: toggleBag }}
                  className="product-select"
                >
                  <option>Choose an option</option>
                  <option>3-6 months</option>
                  <option>6-9 months</option>
                  <option>9-12 months</option>
                  <option>12-18 months</option>
                  <option>18-24 months</option>
                  <option>2T</option>
                  <option>3T</option>
                  <option>4T</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </div>
            )}
            <div className="product-add-to-bag-button-container">
              {this.props.currentProduct[0] && (
                <button
                  onClick={() =>
                    this.props.addToCart(
                      this.props.currentProduct[0],
                      this.props.currentProduct[0].price
                    )
                  }
                  className="product-add-to-bag-button"
                >
                  ADD TO BAG
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    getDress: getDress,
    getBonnet: getBonnet,
    getShort: getShort,
    getBloomer: getBloomer,
    getSkirt: getSkirt,
    getVest: getVest,
    getUserSession: getUserSession,
    addToCart: addToCart,
    getBibdana: getBibdana,
    getBowtie: getBowtie,
    getBurpcloth: getBurpcloth,
    getDroolpad: getDroolpad,
    getHairbow: getHairbow,
    getHairband: getHeadband,
    getSuspender: getSuspender
  }
)(Product);
