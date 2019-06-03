import React, { Component } from "react";

//redux
import { connect } from "react-redux";
import {getUserSession, removeFromCart} from "../../../ducks/reducer"

import deleteX from "../../../assets/deleteX.png";

//css
import "./Bag.css";

class BagItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
  
    return (
     this.props.user && <div className="BAGITEM-container">
        <img
          alt="bag item"
          className="BAG-ITEM-img"
          src={this.props.product.image}
        />
        <div className="BAG-product-details-container">
          <div className="BAG-product-details-top-part">
            <div className="BAG-name-and-delete-row">
              <div className="BAG-ITEM-name"> {this.props.product.name}</div>
              <img onClick={()=>this.props.removeFromCart(this.props.product.name)}  className="BAG-ITEM-delete" alt="delete" src={deleteX} />
            </div>
            <div>{this.props.product.size}</div>
          </div>
          <div className="BAG-name-and-delete-row">
            <div>{this.props.product.style}</div>
            <div>${this.props.product.price}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {  getUserSession: getUserSession, removeFromCart: removeFromCart }
)(BagItem);