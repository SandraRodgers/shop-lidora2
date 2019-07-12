import React, { Component } from "react";
import axios from "axios";

import { Form, Input, Select, FormSubmit } from "../../styled/Form";
import "../create-products/form.css";

class CouponForm extends Component {
  constructor() {
    super();
    this.state = {
      code: "",
      discount: 0.0,
      type: "",
      expired: false,
      coupon: []
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const { code, discount, type, expired } = this.state;
    e.preventDefault();
    this.createCoupon(code, discount, type, expired);
  };

  createCoupon = () => {
    const { code, discount, type, expired } = this.state;
    axios
      .post("/api/admin/coupon", {
        code,
        discount,
        type,
        expired
      })
      .then(response => {
        console.log(response.data);
        return this.setState(
          {
            coupon: response.data,
            code: "",
            discount: 0.0,
            type: "",
            expired: false
          },

          () =>
            alert(
              `Created coupon. Code: ${this.state.coupon[0].code}, Discount: ${
                this.state.coupon[0].discount
              }, Type: ${this.state.coupon[0].type}`
            )
        );
      });
  };



  render() {
    return (
      <div className="form-component-container">
        <div className="form-title">Create Coupon</div>
        <Form>
          <div className="form-input-div">
            <div className="coupon-form-instructions-container">
              <div className="coupon-form-instructions">
                Enter a unique combination of letters, numbers, and/or symbols:
              </div>
            </div>
            <div className="form-category-name">
              Coupon Code:
              {/* The inputs don't work if I change the z-index to make them lower than the fixed navbar (NavMain css)  */}
              <Input
                value={this.state.code}
                type="text"
                name="code"
                placeholder="Enter letters, numbers, and/or symbols"
                onChange={this.handleChange}
              />
            </div>
            <div className="coupon-form-instructions-container">
              <div className="coupon-form-instructions">
                Enter a percentage in decimal form (for example .15 for fifteen
                percent) OR a dollar value discount (for example 1.00 for one
                dollar.):
              </div>
            </div>
            <div className="form-category-name">
              Discount:
              <Input
                value={this.state.discount}
                type="text"
                name="discount"
                placeholder="Enter a discount in decimal point form"
                onChange={this.handleChange}
              />
            </div>
            <div className="coupon-form-instructions-container">
              <div className="coupon-form-instructions">
                Identify whether the coupon will take off a percentage of the
                total cost (percentage discount) or will subtract a dollar
                amount off the total cost (dollar amount discount):
              </div>
            </div>
            <div className="form-category-name">
              Type of coupon:
              <Select
                value={this.state.type}
                name="type"
                onChange={this.handleChange}
              >
                <option>Choose an option</option>
                <option>Percentage</option>
                <option>Dollar Amount</option>
              </Select>
            </div>
          </div>

          <FormSubmit onClick={this.handleSubmit}>Submit</FormSubmit>
        </Form>
      </div>
    );
  }
}

export default CouponForm;
