import React, { Component } from "react";
import axios from "axios";

import { Form, Input, Image, Select, FormSubmit } from "../../styled/Form";
import "../create-products/form.css";
import placeholder from "../../../assets/img-placeholder.jpg";

class FormStyles extends Component {
  constructor() {
    super();
    this.state = {
      style: "",
      img: "",
      current: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const { style, img, current } = this.state;
    e.preventDefault();
    this.createFabric(style, img, current);
  };

  createFabric = () => {
    const {
        style, img, current
    } = this.state;
    axios
      .post("/api/style/styles", {
        style, img, current
      })
      .then(response => {
          console.log(response)
        return this.setState(
          {
            style: "",
            img: "",
            current: true
          },
          () => alert("Your style has been created")
        );
      });
  };

  render() {
    return (
      <div className="form-component-container">
        <div className="form-title">Add styles to style guide</div>
        <Form>
          <Image
            src={this.state.img === "" ? placeholder : this.state.img}
          />
          <div className="form-input-div">
            <div className="form-category-name">
              Style Description:
       
              <Input
                value={this.state.style}
                type="text"
                name="style"
                placeholder="Enter a description of the style"
                onChange={this.handleChange}
              />
            </div>
      
            <div className="form-category-name">
              Image:
              <Input
                value={this.state.img}
                type="text"
                name="img"
                placeholder="Enter an image url"
                onChange={this.handleChange}
              />
            </div>
          </div>
      
      
          <div className="form-category-name">
            Current:
            <Select
              value={this.state.current}
              name="current"
              onChange={this.handleChange}
             
            >
              <option>Is the style currently available?</option>
              <option>True</option>
              <option>False</option>
         
            </Select>
          </div>
        
          <FormSubmit onClick={this.handleSubmit}>Submit</FormSubmit>
        </Form>
      </div>
    );
  }
}

export default FormStyles;
