import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
//assets
import Logo from "../../assets/logo.png";
import Arrow from "../../assets/arrow2.svg"

//css
import "../checkout/checkout.css";

//redux
import { connect } from "react-redux";
import { getUserSession } from "../../ducks/reducer";



class CheckoutTwo extends Component {


    componentDidMount() {
        this.props.getUserSession();

      
      }
    render(){
      let toggleBag;

      this.props.bagIsOpen === true ? (toggleBag = -1) : (toggleBag = 1);
        return (
            <div className="checkout-one-container">
             <div className="checkout-one-column-1">
            <img alt='logo' className='checkout-one-column-1-logo' src={Logo}/>
            <div className='checkout-column-1-steps'>
                <div>Cart</div>
                <img alt='arrow' className='checkout-column1-arrow' src={Arrow}/>
                <div>Information</div>
                <img alt='arrow' className='checkout-column1-arrow' src={Arrow}/>
                <div className='checkout-column-1-info'>Payment</div>
            </div>
            <div className='checkout-previous-shipping-address-container'>
                <div className='checkout-previous-shipping-header'>Payment</div>
                <div>Shop Lidora uses PayPal to ensure that all transactions are secure and encrypted. After clicking "Complete Order", you will be redirected to PayPal to complete your purchases securely. </div>
             
             
             
            </div>

            </div>
            <div className="checkout-one-column-2">     
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
                );})}
              {/* 

            <div className='checkout-one-coupon-div'
            >
              <input className='checkout-one-coupon-input'
              
                placeholder="Coupon Code"
              />
              <button>Apply</button>{" "}
            </div>
 */}

            <div className= 'checkout-one-tax-div'  >
              Tax: Applied at next step
            </div>
            <div className='checkout-one-total' >
              {this.props.user && <h3>Total: ${this.props.user.total} </h3>}
          
            </div>
          </div>
        </div>

            </div>
        )
    }
}

const mapStateToProps = state => state;

const MyComponent = connect(
  mapStateToProps,
  {  getUserSession: getUserSession }
)(CheckoutTwo);
export default withRouter(MyComponent);