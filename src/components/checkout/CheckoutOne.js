import React, { Component } from "react";

import { withRouter, Link } from "react-router-dom";
import axios from "axios";

//assets
import Logo from "../../assets/logo.png";
import Arrow from "../../assets/arrow2.svg";

//css
import "../checkout/checkout.css";

//redux
import { connect } from "react-redux";
import { getUserSession, getCurrentAddress, holdCoupon } from "../../ducks/reducer";

class CheckoutOne extends Component {
  constructor() {
    super();
    this.state = {
      currentAddress: [],
      customerAddressId: 0,
      name: "",
      lineone: "",
      linetwo: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      current: false,
      toggle: false,
      couponCode: "",
      coupon: [],
      prevTotal:0,
      total: 0,
      addressComplete: false,
      discount: 0,
      time: ''
    };
    this.getCurrentAddress = this.getCurrentAddress.bind(this);
    this.addAddress = this.addAddress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleAddress = this.toggleAddress.bind(this);
    this.getCoupon = this.getCoupon.bind(this);
    this.applyCoupon = this.applyCoupon.bind(this);
  }

  componentDidMount() {
    this.props.getUserSession().then(() => {
      this.setState({ prevTotal: this.props.user.total, total: this.props.user.total });
    });
    this.getCurrentAddress();
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user && this.props.user.cart) {
      for (let i = 0; i < this.props.user.cart.length; i++) {
        if (this.props.user.cart[i].flashid) {
          if (prevProps.user.cart !== this.props.user.cart) {
            this.props.getUserSession();
          }
        }
      }
    }
    if (this.props.user && this.props.user.total) {
      if (prevState.total !== this.state.total) {
        this.setState({ total: this.props.user.total });
      }
    }

}



// let time = Math.floor(Date.now()/1000 - this.props.user.cart[i].time/1000 

 timeConvert=(num)=>{ 
 let hours = Math.floor(num / 60);  
 let minutes = num % 60;
  minutes = minutes.toString()
if(minutes.length===1){
  minutes = '0'+minutes
}
 return  hours + ":" + minutes   }   


  getCurrentAddress() {
    this.props.getCurrentAddress(this.props.user.customerid).then(() => {
      let currentAddress = [];
      if (this.props.currentAddress)
        for (let i = 0; i < this.props.currentAddress.length; i++) {
          if (this.props.currentAddress[i].current === true) {
            currentAddress.push(this.props.currentAddress[i]);
            

            this.setState({
              currentAddress: [this.props.currentAddress[i]],
              customerAddressId: this.props.currentAddress[i]
                .customer_address_id,
              name: this.props.currentAddress[i].name,
              lineone: this.props.currentAddress[i].line_one,
              linetwo: this.props.currentAddress[i].line_two,
              city: this.props.currentAddress[i].city,
              state: this.props.currentAddress[i].state,
              zipcode: this.props.currentAddress[i].zipcode,
              addressComplete: true
            }, ()=>{this.props.currentAddress.splice(0,1, this.state.currentAddress[0])});
          }
        }
    });
  }

  addAddress() {
    console.log(
      this.props.user.customerid,
      this.state.name.length,
      this.state.lineone.length,
      this.state.linetwo.length,
      this.state.city.length,
      this.state.state.length,
      this.state.zipcode.length
    );
    if ( this.state.lineone.length===0 || this.state.city.length===0  || this.state.state.length===0  || this.state.zipcode.length===0 ){
      alert('Address Form Incomplete')
    }
    else if (this.state.toggle === true || this.state.currentAddress.length === 0) {
      axios.post(`/api/shippingAddress`, {
        customerid: this.props.user.customerid,
        name: this.state.name,
        lineone: this.state.lineone,
        linetwo: this.state.linetwo,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode
      }).then(()=>{this.getCurrentAddress()})
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  toggleAddress() {
    this.setState({ toggle: !this.state.toggle }, () => {
      if (this.state.toggle === true) {
        this.setState({
          customerAddressId: "",
          name: "",
          lineone: "",
          linetwo: "",
          city: "",
          state: "",
          zipcode: "",
          country: ""
        });
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
        });
      }
    });
  }

  getCoupon() {
    axios
      .get(`/api/checkout/coupon/${this.state.couponCode}`)
      .then(response => {
        this.setState({ coupon: response.data }, () => {
          if (this.state.coupon.length === 0) {
            alert("Code Not Found");
          } else if (this.state.coupon[0].expired === true) {
            alert("Coupon Expired");
          } else {
            this.applyCoupon();
          }
        });
      });
  }


  applyCoupon() {
    axios
      .post("/api/checkout/coupon", {
        discount: this.state.coupon[0].discount,
        type: this.state.coupon[0].type,
        code: this.state.coupon[0].code
      })
      .then(() => {
        this.holdCoupon()
        // this.props.getUserSession();
        // alert("Discount Applied");
      });
  }

  holdCoupon=()=>{
    console.log(this.state.coupon[0])
    this.props.holdCoupon(this.state.coupon[0])
      this.props.getUserSession();
      alert("Discount Applied");
    
    }

  holdDiscount = (discount) => {
    this.setState({discount: discount})
  }
  

  render() {

    let fixedTotal;
    if (this.props.user && this.props.user.total) {
      fixedTotal = this.props.user.total.toFixed(2);
    }

// let discount = this.state.prevTotal - fixedTotal
// if(this.state.prevTotal !== fixedTotal){
// this.holdDiscount(discount)
// }
     
    
    
    let link;
    if(this.state.addressComplete === true){
      link = "/checkout/two"
    } else{
      link = this.props.location.pathname
    }




    return (
      <div className="checkout-one-container">
        <div className="checkout-one-column-1">
          <img alt="logo" className="checkout-one-column-1-logo" src={Logo} />
          <div className="checkout-column-1-steps">
            <div>Cart</div>
            <img alt="arrow" className="checkout-column1-arrow" src={Arrow} />
            <div className="checkout-column-1-info">Information</div>
            <img alt="arrow" className="checkout-column1-arrow" src={Arrow} />
            <div>Payment</div>
          </div>
          {this.state.currentAddress.length && this.state.toggle === false ? (
            <div className="checkout-previous-shipping-address-container">
              <div className="checkout-previous-shipping-header">
                Previous Shipping Address
              </div>
              <div>Would you like to use your previous shipping address?</div>
              <div className="checkout-checkbox-div">
                <input className=" checkout-checkbox" type="checkbox" />
                <div>Yes, use this address:</div>
              </div>
              <div className="checkout-previous-address">
                <div>{this.state.name} </div>
                <div>
                  {this.state.lineone} {this.state.linetwo}
                </div>
                <div>
                  {this.state.city} {this.state.state}
                </div>
                <div>{this.state.zipcode}</div>
              </div>
              <div className="checkout-checkbox-div">
                <input
                  onClick={this.toggleAddress}
                  className=" checkout-checkbox"
                  type="checkbox"
                />
                <div>No, use a different address:</div>
              </div>
            </div>
          ) : null}

          <div className="checkout-previous-shipping-address-container">
            <div className="checkout-shipping-header"> Shipping Address</div>
            <div className="checkout-shipping-address-div">
              <input
                onChange={this.handleChange}
                value={this.state.name}
                name="name"
                placeholder="Name"
                className="checkout-shipping-address-1"
              />
              <input
                onChange={this.handleChange}
                value={this.state.lineone}
                name="lineone"
                placeholder="Address"
                className="checkout-shipping-address-1"
              />

              <input
                onChange={this.handleChange}
                value={this.state.linetwo}
                name="linetwo"
                placeholder="Apartment, suite, etc. (Optional)"
                className="checkout-shipping-address-1"
              />
              <input
                onChange={this.handleChange}
                value={this.state.city}
                name="city"
                placeholder="City"
                className="checkout-shipping-address-1"
              />
              <div className="checkout-shipping-address-2-div">
                {" "}
                {/* <input
                  onChange={this.handleChange}
                  value={this.state.state}
                  name="state"
                  placeholder="State"
                  className="checkout-shipping-address-2"
                />{" "} */}
                <select
                  onChange={this.handleChange}
                  value={this.state.state}
                  name="state"
                  placeholder="State"
                  className="checkout-shipping-address-2-select"
                >
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
                <input
                  onChange={this.handleChange}
                  value={this.state.zipcode}
                  name="zipcode"
                  className="checkout-shipping-address-2"
                  placeholder="Zipcode"
                />
              </div>
            </div>
          </div>
          <div className="checkout-one-payment-button-div">
            <Link  to={link}>
              <button
                className="checkout-one-payment-button"
                onClick={this.addAddress}
              >
                Continue to Payment
              </button>
            </Link>
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
                      <img
                        alt="product"
                        className="checkout-one-items-list-images"
                        src={product.image}
                      />
                      <div className=" checkout-one-items-list-name-quantity">
                        <div
                          className="checkout-one-items-list-font"
                          style={{ fontWeight: "900" }}
                        >
                        
                          {product.name} x {product.quantity} {product.time ? <div>  {
                        this.timeConvert(Math.floor(Date.now()/1000 - product.time/1000 ))}</div>: null}
                        </div>
                        <div>${product.price}</div>
                  
                      </div>
                      
                    </div>
                    
                  </div>
                );
              })}

            <div className="checkout-one-coupon-div">
              <input
                onChange={this.handleChange}
                name="couponCode"
                value={this.state.couponCode}
                className="checkout-one-coupon-input"
                placeholder="Coupon Code"
              />{" "}
              <button onClick={this.getCoupon}>Apply</button>{" "}
            </div>
            <div className="checkout-one-tax-div">
              Tax: Applied at next step
            </div>
            <div className="checkout-one-total">
              {this.props.user && <h3>Total: ${fixedTotal} </h3>}
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
  { getUserSession: getUserSession, getCurrentAddress: getCurrentAddress, holdCoupon: holdCoupon }
)(CheckoutOne);
export default withRouter(MyComponent);
