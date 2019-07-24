import React, { Component } from "react";

import BagItem from "./BagItem";

//react-router-dom
import {Link} from 'react-router-dom'

//redux
import { connect } from "react-redux";
import { openBag, getUserSession } from "../../../ducks/reducer";

//styled components
import BagSideMenu from "../../styled/BagSideMenu";

//assets
import bagIcon from "../../../assets/shopping-bag.png";

//css
import "./Bag.css";

class Bag extends Component {
 
  componentDidMount() {
    this.props.getUserSession();
    
  }

  componentDidUpdate(prevProps){
    
    if(this.props.user && this.props.user.cart){
    for(let i=0; i<this.props.user.cart.length; i++){
      if(this.props.user && this.props.user.cart[i].flashid){
        if (prevProps.user.cart !== this.props.user.cart) {
              this.props.getUserSession()}
      }
    }}
  }

 

  render() {
let fixedTotal;
if(this.props.user && this.props.user.total){
 fixedTotal = this.props.user.total.toFixed(2)}
    return (
      <div className="bag-container">
        <BagSideMenu className="BAG-SM-component" open={this.props.open}>
          <div className="BAG-top-icons">
            <img alt="bag-icon" className="BAG-bag-icon" src={bagIcon} />
            <div
              className="BAG-close-button"
              onClick={() => this.props.openBag()}
            >
              CLOSE
            </div>
          </div>
          <div className="BAG-item-components">
            {this.props.user && this.props.user.cart &&
              this.props.user.cart.map((product, index) => {
                return <BagItem key={product.productid} product={product} index={index} productid={product.productid} />;
              })}
            <div>
              {this.props.user && <h3>Total: ${fixedTotal} </h3>}
              <Link to='/checkout/one'><button className="BAG-checkout-button">CHECKOUT</button></Link>
            </div>
          </div>
        </BagSideMenu>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { openBag: openBag, getUserSession: getUserSession }
)(Bag);
