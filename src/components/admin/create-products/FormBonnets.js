import React, { Component } from "react";
import axios from "axios";

import { Form, Input, Image, Select, FormSubmit } from "../../styled/Form";
import "./form.css";
import placeholder from "../../../assets/img-placeholder.jpg";

class FormBonnets extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      image: "",
      price: 0,
      description: "",
      fabric: "",
      customize: "",
      location: "",
      category: "bonnets"
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const {
      name,
      price,
      fabric,
      customize,
      image,
      description,
      location
    } = this.state;
    e.preventDefault();
    this.createBonnet(
      name,
      price,
      fabric,
      customize,
      image,
      description,
      location
    );
  };

  createBonnet = () => {
    const {
      name,
      price,
      fabric,
      customize,
      image,
      description,
      location,
      category
    } = this.state;
    axios
      .post("/api/admin/addBonnet", {
        name,
        price,
        customize,
        fabric,
        image,
        description,
        location
      })
      .then(() => axios.post("/api/admin/createProduct", { category }))
      .then(response => {
        return this.setState(
          {
            name: "",
            price: 0,
            fabric: "",
            image: "",
            customize: "",
            description: "",
            location: ""
          },
          () => alert("Your product has been created")
        );
      });
  };

  render() {
    return (
      <div className="form-component-container">
        <div className="form-title">Add a bonnet to store inventory</div>
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
            Customize:
            <Input
              value={this.state.customize}
              type="text"
              name="customize"
              placeholder="Describe customization options"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-category-name">
            Location:
            <Select
              value={this.state.location}
              name="location"
              onChange={this.handleChange}
            >
              <option>Choose an option</option>
              <option>Bonnets Main Page</option>
              <option>Seasonal Collection</option>
              <option>Closet</option>
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
          <FormSubmit onClick={this.handleSubmit}>Submit</FormSubmit>
        </Form>
      </div>
    );
  }
}

export default FormBonnets;
