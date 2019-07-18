import React, { Component } from "react";
import axios from "axios";

import { Form, Input, Image, Select, FormSubmit } from "../../styled/Form";
import "../create-products/form.css";
import placeholder from "../../../assets/img-placeholder.jpg";

class FormFabrics extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      img: "",
      current: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const { name, img, current } = this.state;
    e.preventDefault();
    this.createFabric(name, img, current);
  };

  createFabric = () => {
    const {
        name, img, current
    } = this.state;
    axios
      .post("/api/style/fabrics", {
        name, img, current
      })
      .then(response => {
          console.log(response)
        return this.setState(
          {
            name: "",
            img: "",
            current: true
          },
          () => alert("Your fabric has been created")
        );
      });
  };

  render() {
    return (
      <div className="form-component-container">
        <div className="form-title">Add fabrics to style guide</div>
        <Form>
          <Image
            src={this.state.img === "" ? placeholder : this.state.img}
          />
          <div className="form-input-div">
            <div className="form-category-name">
              Fabric Name:
       
              <Input
                value={this.state.name}
                type="text"
                name="name"
                placeholder="Enter a fabric name"
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

export default FormFabrics;
