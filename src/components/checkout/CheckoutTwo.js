import React, { Component } from "react";
import { withRouter } from "react-router-dom";
//assets
import Logo from "../../assets/logo.png";
import Arrow from "../../assets/arrow2.svg";

//css
import "../checkout/checkout.css";

//redux
import { connect } from "react-redux";
import { getUserSession, getCurrentAddress } from "../../ducks/reducer";

class CheckoutTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caliTax: 0,
      sdTax: 0,
      total: 0,
      currentAddress: []
    };
  }

  componentDidMount() {
    this.props.getUserSession();
    this.getCurrentAddress();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentAddress !== this.props.currentAddress) {
      let currentAddress = [];
      if (this.props.currentAddress)
        for (let i = 0; i < this.props.currentAddress.length; i++) {
          if (this.props.currentAddress[i].current === true) {
            currentAddress.push(this.props.currentAddress[i]);

            this.setState(
              {
                currentAddress: [this.props.currentAddress[i]]
              },
              () => {
                this.props.currentAddress.splice(
                  0,
                  1,
                  this.state.currentAddress[0]
                );
              }
            );
          }
        }
    }
    if(prevState.currentAddress !== this.state.currentAddress){
      this.calculateCATax()
    }
  }

  getCurrentAddress = () => {
    this.props.getCurrentAddress(this.props.user.customerid).then(() => {
      let currentAddress = [];
      if (this.props.currentAddress)
        for (let i = 0; i < this.props.currentAddress.length; i++) {
          if (this.props.currentAddress[i].current === true) {
            currentAddress.push(this.props.currentAddress[i]);
            this.setState({
              currentAddress: [this.props.currentAddress[i]]
            });
          }
        }
    });
  };

  calculateCATax = () => {
    let SDZips = [91901, 91902, 91903, 91905, 91906, 91908, 91909, 91910, 91911, 91912, 91913, 91914, 91915, 91916, 91917, 91919, 91921, 91931, 91932, 91933, 91934, 91935, 91941, 91942, 91943, 91944, 91945, 91946, 91947, 91948, 91950, 91951, 91962, 91963, 91976, 91977, 91978, 91979, 91980, 91987, 91990, 92003, 92004, 92007, 92008, 92009, 92013, 92014]

    if (this.state.currentAddress[0].state === "CA") {
      let caliTax = (this.props.user.total * .0725)
      this.setState({caliTax: caliTax })
      let withCATax= (this.props.user.total * .0725) + this.props.user.total
      console.log(withCATax)
    } else {
      console.log("no california tax");
    }

    if(this.state.currentAddress[0].zipcode){}
  };

  render() {
    console.log(this.state.currentAddress);
    return (
      <div className="checkout-one-container">
        <div className="checkout-one-column-1">
          <img alt="logo" className="checkout-one-column-1-logo" src={Logo} />
          <div className="checkout-column-1-steps">
            <div>Cart</div>
            <img alt="arrow" className="checkout-column1-arrow" src={Arrow} />
            <div>Information</div>
            <img alt="arrow" className="checkout-column1-arrow" src={Arrow} />
            <div className="checkout-column-1-info">Payment</div>
          </div>
          <div className="checkout-previous-shipping-address-container">
            <div className="checkout-previous-shipping-header">Payment</div>
            <div>
              Shop Lidora uses PayPal to ensure that all transactions are secure
              and encrypted. After clicking "Complete Order", you will be
              redirected to PayPal to complete your purchases securely.{" "}
            </div>
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
                          {product.name} x {product.quantity}
                        </div>
                        <div>${product.price}</div>
                      </div>
                    </div>
                  </div>
                );
              })}

            <div className="checkout-one-tax-div">
              Tax: Applied at next step
            </div>
            <div className="checkout-one-total">
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
  { getUserSession: getUserSession, getCurrentAddress: getCurrentAddress }
)(CheckoutTwo);
export default withRouter(MyComponent);
