import React, { Component } from "react";

import { withRouter } from "react-router-dom";

//assets
import Logo from "../../assets/logo.png";
import Arrow from "../../assets/arrow2.svg"

//css
import "../checkout/checkout.css";

//redux
import { connect } from "react-redux";
import { openBag, getUserSession } from "../../ducks/reducer";

class CheckoutOne extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.getUserSession();
  }

  componentDidUpdate(prevProps) {
    if (this.props.user && this.props.user.cart) {
      for (let i = 0; i < this.props.user.cart.length; i++) {
        if (this.props.user.cart[i].flashid) {
          if (prevProps.user.cart !== this.props.user.cart) {
            this.props.getUserSession();
          }
        }
      }
    }
  }

  render() {
    console.log(this.props);

    return (
      <div className="checkout-one-container">
        <div className="checkout-one-column-1">
            <img className='checkout-one-column-1-logo' src={Logo}/>
            <div className='checkout-column-1-steps'>
                <div>cart</div>
                <img className='checkout-column1-arrow' src={Arrow}/>
                <div className='checkout-column-1-info'>information</div>
                <img className='checkout-column1-arrow' src={Arrow}/>
                <div>payment</div>
            </div>
        </div>
        <div className="checkout-one-column-2">
          {" "}
       
          <div className="BAG-item-components">
            {this.props.user &&
              this.props.user.cart &&
              this.props.user.cart.map((product, index) => {
                return (
                  <div key={index}>
                    <div className="checkout-one-items-list">
                      <img alt='product'
                        className="checkout-one-items-list-images"
                        src={product.image}
                      />
                      <div className=" checkout-one-items-list-name-quantity">
                        <div className="checkout-one-items-list-font" style={{ fontWeight: "900" }}>
                          {product.name} x {product.quantity}
                        </div>
                        <div>${product.price}</div>
                      </div>
                    </div>
                  </div>
                );
              })}

            <div className='checkout-one-coupon-div'
            
            >
              <input className='checkout-one-coupon-input'
              
                placeholder="Coupon Code"
              />{" "}
              <button>Apply</button>{" "}
            </div>
            <div className= 'checkout-one-tax-div'  >
              Tax: Applied at next step
            </div>
            <div className='checkout-one-total' >
              {this.props.user && <h3>Total: ${this.props.user.total} </h3>}
          
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const MyComponent = connect(
  mapStateToProps,
  { openBag: openBag, getUserSession: getUserSession }
)(CheckoutOne);
export default withRouter(MyComponent);
