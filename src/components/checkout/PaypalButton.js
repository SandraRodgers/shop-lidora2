import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import scriptLoader from "react-async-script-loader";

class PaypalButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showButton: false,
      redirect: false
    };

    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    if (isScriptLoaded && isScriptLoadSucceed) {
      this.setState({ showButton: true });
    }
  }


  componentDidUpdate(prevProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;
    if (
      isScriptLoaded !== prevProps.isScriptLoaded &&
      isScriptLoadSucceed !== prevProps.isScriptLoadSucceed
    ) {
      this.setState({ showButton: true });
    }
  }

  render() {
    console.log(this.props);
    const paypal = window.paypal;
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;
    const PayPalButton =
      isScriptLoaded && isScriptLoadSucceed
        ? paypal.Button.driver("react", { React, ReactDOM })
        : null;

    const {
      total,
      currency,
      env,
      commit,
      client,
      onSuccess,
      onError,
      onCancel
    } = this.props;

    const { showButton } = this.state;
    const style = {
      layout: "horizontal",
      tagline: "false",
      // color:   'blue',
      shape: "rect",
      label: "paypal",
      // class:"paypal-button",
      height: 30
    };

    const payment = () =>
      paypal.rest.payment.create(env, client, {
        transactions: [
          {
            amount: {
              total,
              currency
            }
          }
        ]
      });

    const onAuthorize = (data, actions) =>
      actions.payment.execute().then(() => {
        const payment = {
          paid: true,
          cancelled: false,
          payerID: data.payerID,
          paymentID: data.paymentID,
          paymentToken: data.paymentToken,
          returnUrl: data.returnUrl
        }
        .then(
          axios
            .post("/api/checkout/order", {
              amount: this.props.total,
              paymentChoice: "paypal",
              orderDate: this.props.date,
              shippedDate: null,
              fulfilled: false,
              productIds: this.props.productIds
            })
            .then(alert("Payment Successful"))
            .then(() => this.setState({ redirect: true }))
        );

        onSuccess(payment);
      });
    return (
      <div className = 'checkout-paypal-button-div'>
        {showButton && (
          <PayPalButton

            env={this.props.env}
            client={client}
            commit={commit}
            payment={payment}
            onAuthorize={onAuthorize}
            onCancel={onCancel}
            onError={onError}
            style={style}
          />
        )}
      </div>
    );
  }
}

export default scriptLoader("https://www.paypalobjects.com/api/checkout.js")(
  PaypalButton
);
