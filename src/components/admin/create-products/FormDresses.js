import React, { Component } from "react";

import { Form, Input, Image, Select, FormSubmit } from "../../styled/Form";
import "./form.css";

class FormDresses extends Component {
  constructor() {
    super();
    this.state = {
      productName: "",
      category: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="form-component-container">
        <Form  onSubmit={this.handleSubmit}>
          <Image />
          <div className="form-input-div">
            <div className="form-category-name">
              Product Name:
              <Input 
                value={this.state.productName}
                type="text"
                name="productName"
                placeholder=""
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input-div">
              <div className="form-category-name">
                Category:
                <Select>
                  <option>Dress</option>
                  <option>Standard - rounded neckline</option>
                  <option>Standard - high back</option>
                  <option>Standard - finished with snaps</option>
                  <option>Thin Strap</option>
                  <option>Peter Pan Collar</option>
                  <option>Halter Style</option>
                  <option>Other</option>
                </Select>
              </div>

              <div className="form-category-name">
                Product:
                <Select>
                  <option>Choose an option</option>
                  <option>Standard - rounded neckline</option>
                  <option>Standard - high back</option>
                  <option>Standard - finished with snaps</option>
                  <option>Thin Strap</option>
                  <option>Peter Pan Collar</option>
                  <option>Halter Style</option>
                  <option>Other</option>
                </Select>
              </div>
            </div>
          </div>
          <FormSubmit>Submit</FormSubmit>
        </Form>
        
      </div>
    );
  }
}

export default FormDresses;
