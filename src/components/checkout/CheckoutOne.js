import React, { Component } from "react";

import { withRouter, Link } from "react-router-dom";
import axios from 'axios'

//assets
import Logo from "../../assets/logo.png";
import Arrow from "../../assets/arrow2.svg"

//css
import "../checkout/checkout.css";

//redux
import { connect } from "react-redux";
import { getUserSession } from "../../ducks/reducer";

class CheckoutOne extends Component {
  constructor() {
    super();
    this.state = {
      currentAddress:[],
      customerAddressId: 0,
      name: '',
      lineone: '',
      linetwo: '',
      city: '',
      state: '',
      zipcode: '',
      country: '',
      current: false,
      toggle: false
    };
    this.getCurrentAddress= this.getCurrentAddress.bind(this)
    this.addAddress = this.addAddress.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.toggleAddress = this.toggleAddress.bind(this)
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
          currentAddress: [response.data[i]],
          customerAddressId: response.data[i].customer_address_id,
          name: response.data[i].name,
          lineone: response.data[i].line_one,
          linetwo: response.data[i].line_two,
          city: response.data[i].city,
          state: response.data[i].state,
          zipcode: response.data[i].zipcode
          })}}})
  }

  addAddress(){
    if(this.state.toggle===true){
    axios.post(`/api/shippingAddress`, {customerid: this.props.user.customerid,name:this.state.name, lineone: this.state.lineone, linetwo: this.state.linetwo, city: this.state.city, state: this.state.state,zipcode: this.state.zipcode})} else{
      console.log(this.state.currentAddress)}
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})}

  toggleAddress(){
    this.setState({toggle: !this.state.toggle}, ()=> {
      if(this.state.toggle === true){
        this.setState({
          customerAddressId: '',
          name: '',
          lineone: '',
          linetwo: '',
          city: '',
          state: '',
          zipcode: '',
          country: ''
      })
    } else {
      this.setState({
        customerAddressId: this.state.currentAddress[0].customer_address_id,
        name: this.state.currentAddress[0].name,
        lineone: this.state.currentAddress[0].line_one,
        linetwo: this.state.currentAddress[0].line_two,
        city: this.state.currentAddress[0].city,
        state: this.state.currentAddress[0].state,
        zipcode: this.state.currentAddress[0].zipcode,
        country: this.state.currentAddress[0].country
      })
    }
  
  
  })
    
  }

  render() {
  

    return (
      <div className="checkout-one-container">

      
        <div className="checkout-one-column-1">
            <img alt='logo' className='checkout-one-column-1-logo' src={Logo}/>
            <div className='checkout-column-1-steps'>
                <div>Cart</div>
                <img alt='arrow' className='checkout-column1-arrow' src={Arrow}/>
                <div className='checkout-column-1-info'>Information</div>
                <img alt='arrow' className='checkout-column1-arrow' src={Arrow}/>
                <div>Payment</div>
            </div>
            {this.state.currentAddress.length && this.state.toggle===false?
            <div className='checkout-previous-shipping-address-container'>
                <div className='checkout-previous-shipping-header'>Previous Shipping Address</div>
                <div>Would you like to use your previous shipping address?</div>
                <div className='checkout-checkbox-div'><input className=' checkout-checkbox' type='checkbox'/><div>Yes, use this address:</div></div>
                <div className='checkout-previous-address'>
                <div>{this.state.name} </div>
                <div>{this.state.lineone} {this.state.linetwo}</div>
                <div>{this.state.city} {this.state.state}</div>
                <div>{this.state.zipcode}</div></div>
                <div className='checkout-checkbox-div'><input onClick={this.toggleAddress} className=' checkout-checkbox' type='checkbox'/><div>No, use a different address:</div></div>
            </div>: null}
            
            <div className='checkout-previous-shipping-address-container'>
                <div className='checkout-shipping-header'> Shipping Address</div>
                <div className='checkout-shipping-address-div'>
                  <input onChange={this.handleChange} value = {this.state.name} name = 'name' placeholder='Name' className='checkout-shipping-address-1'/>
                  <input onChange={this.handleChange} value ={this.state.lineone} name = 'lineone'  placeholder='Address' className='checkout-shipping-address-1' />
                  
                  <input onChange={this.handleChange} value = {this.state.linetwo} name = 'linetwo'  placeholder='Apartment, suite, etc. (Optional)' className='checkout-shipping-address-1'/>
                  <input onChange={this.handleChange} value = {this.state.city} name = 'city'  placeholder='City'  className='checkout-shipping-address-1'/>
                  <div className='checkout-shipping-address-2-div'>  <input onChange={this.handleChange} value = {this.state.state} name = 'state'  placeholder='State'  className='checkout-shipping-address-2'/>  <input onChange={this.handleChange} value = {this.state.zipcode} name = 'zipcode'  className='checkout-shipping-address-2'  placeholder='Zipcode'/></div>
                </div>
               
            </div>
            <div className= 'checkout-one-payment-button-div'>
            <Link to='/checkout/two'><button className='checkout-one-payment-button' onClick={this.addAddress}>Continue to Payment</button></Link></div>
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
  {  getUserSession: getUserSession }
)(CheckoutOne);
export default withRouter(MyComponent);
