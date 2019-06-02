import React, { Component } from "react";

import img from "../../../assets/flower.jpg"

//css
import "./Bag.css"

class BagItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      console.log(this.props.product)
    return <div className="BAGITEM-container">
        <img className='BAG-ITEM-img' src={this.props.product.image}/>
        <div className="BAG-product-details-container">
            <div className="BAG-product-details-top-part">
            <div className="BAG-name-and-delete-row"><div className="BAG-ITEM-name"> {this.props.product.name}</div><div>delete icon</div></div>
            <div>{this.props.product.size}</div></div>
            <div className="BAG-name-and-delete-row"><div>{this.props.product.style}</div><div>{this.props.product.price}</div></div>
        </div>
    </div>
  }
}
export default BagItem;
