import React, { Component } from "react";
import axios from "axios";

import { Form, Input, Image, Select, FormSubmit } from "../../styled/Form";
import "./form.css";
import placeholder from "../../../assets/img-placeholder.jpg";

class FormDresses extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      style: "",
      sleeves: "",
      length: "",
      size: "",
      fabric: "",
      image: "",
      customize: "",
      description: "",
      location: "",
      favorite: '',
      category: "dresses"
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const {
      name,
      price,
      style,
      sleeves,
      length,
      size,
      fabric,
      image,
      customize,
      description,
      location, 
      favorite
    } = this.state;
    e.preventDefault();
    this.createDress(
      name,
      price,
      style,
      sleeves,
      length,
      size,
      fabric,
      image,
      customize,
      description,
      location,
      favorite
    );
  };

  createDress = () => {
    const {
      name,
      price,
      style,
      sleeves,
      length,
      size,
      fabric,
      image,
      customize,
      description,
      location,
      category,
      favorite
    } = this.state;
    axios
      .post("/api/admin/addDress", {
        name,
        price,
        style,
        sleeves,
        length,
        size,
        fabric,
        image,
        customize,
        description,
        location,
        favorite
      })
      .then(() => axios.post("/api/admin/createProduct", {category}))
      .then(response => {
        return this.setState(
          {
            name: "",
            price: 0,
            style: "",
            sleeves: "",
            length: "",
            size: "",
            fabric: "",
            image: "",
            customize: "",
            description: "",
            location: "",
            favorite: ""
          },
          () => alert("Your product has been created")
        );
      });
  };

  render() {
    return (
      <div className="form-component-container">
      <div className="form-title">Add a dress to store inventory</div>
        <Form onSubmit={this.handleSubmit}>
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
              Style:
              <Select
                value={this.state.style}
                name="style"
                onChange={this.handleChange}
              >
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
            <div className="form-category-name">
              Sleeves:
              <Select
                value={this.state.sleeves}
                name="sleeves"
                onChange={this.handleChange}
              >
                <option>Choose an option</option>
                <option>Sleeveless</option>
                <option>Flutter sleeves</option>
                <option>Lace sleeves</option>
                <option>Cap sleeves</option>
                <option>Other</option>
              </Select>
            </div>
            <div className="form-category-name">
              Length:
              <Select
                value={this.state.length}
                name="length"
                onChange={this.handleChange}
              >
                <option>Choose an option</option>
                <option>Dress Length</option>
                <option>Tunic Length</option>
                <option>Other</option>
              </Select>
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
                <option>Dresses Main Page</option>
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
            <div className="form-category-name">
              Front Page:
              <Select
                value={this.state.favorite}
                name="favorite"
                onChange={this.handleChange}
              >
                <option>On front page of store?</option>
                <option>Yes</option>
                <option>No</option>
                {/* <option>Closet</option> */}
              </Select>
            </div>
            

          </div>
          <FormSubmit onClick={this.handleSubmit}>Submit</FormSubmit>
        </Form>
      </div>
    );
  }
}

export default FormDresses;
