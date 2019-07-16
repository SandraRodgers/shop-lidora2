import React, { Component } from "react";


//redux
import { connect } from "react-redux";
import { getUserSession, getCurrentAddress } from "../../ducks/reducer";

import PaypalButton from "./PaypalButton"

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    ////paypal//////////////////////////////////////////////////////////////////////////////////////

    const CLIENT = {
      sandbox: process.env.REACT_APP_payPalKeySANDBOX
    };

    const onSuccess = payment => console.log("Successful payment!", payment);

    const onError = error =>
      console.log(error);

    const onCancel = data => console.log("Cancelled payment!", data);

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    const newDate = year + "-" + month + "-" + day;

    return (
      <div>
      
        <PaypalButton
          client={CLIENT}
          env={"sandbox"}
          commit={true}
          currency={"USD"}
          total={this.props.total}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
          date={newDate}
          coupon ={this.props.coupon}
          productids={this.props.productids}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { getUserSession: getUserSession, getCurrentAddress: getCurrentAddress }
)(Payment);
