import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getDress } from "../../../ducks/reducer";
import "./product.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: []
    };
  }

  componentDidMount() {
    axios
      .get(`/api/product/${this.props.match.params.id}`)
      .then(response => {
        console.log(this.props.match.params.id)
        this.setState({ productInfo: response.data });
        //we get the productid from the component and set state so that productInfo contains that product (object)
      })
      .then(() => {
        if (this.state.productInfo[0].category === "dresses") {
          this.props.getDress(this.state.productInfo[0].dressesid);
        }
      });
    axios.get('/api/auth/user').then(response => {
      console.log(response.data)
    })
  }

  render() {
    
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
              <p className="product-title">
                {this.props.currentProduct[0].name}
              </p>
            )}
            {this.props.currentProduct[0] && (
              <div className="product-description">
                {this.props.currentProduct[0].description}
              </div>
            )}

            {this.props.currentProduct[0] && (
              <p className="product-price-div">
                Price:{" "}
                <div className="product-price">
                  ${this.props.currentProduct[0].price}
                </div>{" "}
              </p>
            )}
            {this.props.currentProduct[0] && (
              <p className="product-size-options">
                <div className="product-size-heading">Size: </div>

                <select style={{zIndex: toggleBag}} className="product-select">
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
              </p>
            )}
            
            {/* {this.props.currentProduct[0] && 
            <button
              class="snipcart-add-item"
              data-item-id={this.props.match.params.id}
              data-item-name={this.props.currentProduct[0].name}
              data-item-price={this.props.currentProduct[0].price}
              // data-item-weight="20"
              // data-item-url="http://myapp.com/products/bacon"
              data-item-description={this.props.currentProduct[0].description}
            >
              Add to bag
            </button>} */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getDress: getDress }
)(Product);
