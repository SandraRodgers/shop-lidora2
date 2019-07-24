import React, { Component } from "react";
import axios from "axios";

import { Form, Input, Image, Select, FormSubmit } from "../../styled/Form";
import "./form.css";
import placeholder from "../../../assets/img-placeholder.jpg";

class FormFlashsale extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      size: "",
      description: "",
      fabric: "",
      image: "",
      sold: false,
      category: "flashsale"

    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
      console.log('submit hit')
    const {
      name,
      price,
      size,
      description,
      fabric,
      image,
      sold
    } = this.state;
    e.preventDefault();
    this.createFlashsale(
        name,
        price,
        size,
        description,
        fabric,
        image,
        sold
    );
  };

  createFlashsale = () => {

  console.log(this.state)
    const {
        name,
        price,
        size,
        description,
        fabric,
        image,
        sold,
        category
    } = this.state;
    axios
      .post("/api/admin/flashsale", {
        name,
        price,
        size,
        description,
        fabric,
        image,
        sold
      })
      .then(() => axios.post("/api/admin/createProduct", { category }))
      .then(response => {
        return this.setState(
          {
            name: "",
            price: 0,
            size: "",
            description: "",
            fabric: "",
            image: "",
            sold: false
          },
          () => alert("Your product has been created")
        );
      });
  };

  render() {
    return (
      <div className="form-component-container">
        <div className="form-title">Add flashsale item </div>
        <Form>
          <Image
            src={this.state.image === "" ? placeholder : this.state.image}
          />
          <div className="form-input-div">
            <div className="form-category-name">
              Product Name:
              {/* The inputs don't work if I change the z-index to make them lower than the fixed navbar (NavMain css)  */}
              <Input
                value={this.state.name}
                type="text"
                name="name"
                placeholder="Enter a product name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-category-name">
              Price:
              <Input
                value={this.state.price}
                type="text"
                name="price"
                placeholder="Enter a price"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-category-name">
              Fabric:
              <Input
                value={this.state.fabric}
                type="text"
                name="fabric"
                placeholder="Enter a fabric name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-category-name">
              Image:
              <Input
                value={this.state.image}
                type="text"
                name="image"
                placeholder="Enter an image url"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-category-name">
              Size:
              <Select
                value={this.state.size}
                name="size"
                onChange={this.handleChange}
              >
                <option>Choose an option</option>
                <option>3-6 months</option>
                <option>6-9 months</option>
                <option>9-12 months</option>
                <option>12-18 months</option>
                <option>18-24 months</option>
                <option>2T</option>
                <option>3T</option>
                <option>4T</option>
                <option>5</option>
                <option>6</option>
                <option>Other</option>
              </Select>
            </div>
      
          <div className="form-category-name">
            Description:
            <Input
              value={this.state.description}
              type="text"
              name="description"
              placeholder="Write an appealing description"
              onChange={this.handleChange}
            />
          </div>

  <div className="form-category-name">
            Sold:
            <Select
                value={this.state.sold}
                name="sold"
                onChange={this.handleChange}
              >
                <option>{this.state.sold}</option>
                <option>true</option>
                <option>false</option>
               
              </Select>
           
          </div>
          <div>(Select 'false' to display in store immediately; select true to put into closet)</div>

          <FormSubmit onClick={this.handleSubmit}>Submit</FormSubmit>
        </Form>
      </div>
    );
  }
}

export default FormFlashsale;
