import React, { Component } from "react";
import axios from "axios";

import "./custom.css";

import bonnetgirl from "../../../assets/bonnetgirl.jpg";

class Custom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sendMessage = () => {
    axios
      .post("/nodemailer/customOrder", {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
      .then(() => {
        this.setState({ name: "", email: "", message: "" });
      });
  };

  render() {
    console.log(this.state.message);
    return (
      <div className="custom-component">
        <div className="custom-main-div">
          <img className="custom-main-image" src={bonnetgirl} />
          <div className="custom-text-div">
            <div className="custom-title">Customize</div>
            <div className="custom-instructions">
              Special requests and custom orders are highly encouraged. Please
              fill out the form and I will follow up with you soon to help you
              plan the special item or to answer any questions you might have.{" "}
            </div>
            <div className="custom-row-1-inputs">
              <input
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                className="custom-input-name"
                placeholder="first and last name"
              />
              <input
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                className="custom-input-email"
                placeholder="email"
              />
            </div>
            <div className="custom-row-1-inputs">
              <textarea
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                className="custom-input-textarea"
                rows="5"
                cols="60"
                placeholder="message"
              />
              {/* <input className='custom-input-name' placeholder='first and last name'/>
    <input className='custom-input-email' placeholder='email'/> */}
            </div>

            <button
              //   onClick={this.addToCart}
              className="custom-order-button"
              onClick={this.sendMessage}
            >
              SUBMIT REQUEST
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Custom;
