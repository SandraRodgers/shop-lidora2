import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import axios from 'axios'

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
    this.state = {
      customerAddressId: 0,
      lineone: '',
      linetwo: '',
      city: '',
      state: '',
      zipcode: '',
      country: ''
    };
    this.getCurrentAddress= this.getCurrentAddress.bind(this)
  }

  componentDidMount() {
    this.props.getUserSession();
    this.getCurrentAddress()
  }

  
  // componentDidUpdate(prevProps) {
  //   this.props.user && this.props.user.cart && console.log(prevProps.user.cart, this.props.user.cart)
  //   if (this.props.user && this.props.user.cart) {
  //     for (let i = 0; i < this.props.user.cart.length; i++) {
  //       if (this.props.user.cart[i].flashid) {
  //         if (prevProps.user.cart !== this.props.user.cart) {
  //           this.props.getUserSession();
  //         }
  //       }
  //     }
  //   }
  // }

  getCurrentAddress(){
    axios.get(`/api/previousAddress/${this.props.user.customerid}`).then((response) =>{
      console.log(response.data)
    let currentAddress = [];
    for (let i = 0; i < response.data.length; i++) {
      if (response.data[i].current === true) {
        currentAddress.push(response.data[i]);
        console.log(currentAddress);

        this.setState({
          customerAddressId: response.data[i].customer_address_id,
          lineone: response.data[i].line_one,
          linetwo: response.data[i].line_two,
          city: response.data[i].city,
          state: response.data[i].state,
          zipcode: response.data[i].zipcode,
          country: response.data[i].country})}}})
  }

  render() {
    console.log(this.state);

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
            <div className='checkout-previous-shipping-address-container'>
                <div className='checkout-previous-shipping-header'>Previous Shipping Address</div>
                <div>Would you like to use your previous shipping address?</div>
                <div className='checkout-checkbox-div'><input className=' checkout-checkbox' type='checkbox'/><div>Yes, use this address:</div></div>
                <div className='checkout-previous-address'>
                <div>{this.state.lineone} {this.state.linetwo}</div>
                <div>{this.state.city} {this.state.state}</div>
                <div>{this.state.zipcode}</div></div>
            </div>
            <div className='checkout-previous-shipping-address-container'>
                <div className='checkout-previous-shipping-header'> Shipping Address</div>
                <div className='checkout-shipping-address-div'>
                  <input placeholder='Name' className='checkout-shipping-address-1'/>
                  <input placeholder='Address line one' className='checkout-shipping-address-1' />
                  <input placeholder='Address line two' className='checkout-shipping-address-1'/>
                  <input placeholder='Apartment, suite, etc. (Optional)' className='checkout-shipping-address-1'/>
                  <input placeholder='City'  className='checkout-shipping-address-1'/>
                  <div className='checkout-shipping-address-2-div'>  <input placeholder='State'  className='checkout-shipping-address-2'/>  <input className='checkout-shipping-address-2'  placeholder='Zipcode'/></div>
                </div>
               
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
