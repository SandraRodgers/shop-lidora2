import React, { Component } from "react";

import { Form, Input, Image, Select, FormSubmit } from "../../styled/Form";
import "./form.css";
import placeholder from '../../../assets/img-placeholder.jpg'

class FormDresses extends Component {
  constructor() {
    super();
    this.state = {
      productName: "",
      category: "",
      price: 0,
      fabric: '',
      image: '',
      customize:'',
      description:''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changePosition = () => {
    this.setState({ position: "relative" });
  };

  render() {
    return (
      <div className="form-component-container">
        <Form onSubmit={this.handleSubmit}>
          <Image src={this.state.image=== ''? placeholder : this.state.image}  />
          <div className="form-input-div">
            <div className="form-category-name">
              Product Name:
              <Input
                value={this.state.productName}
                type="text"
                name="productName"
                placeholder="Enter a product name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-category-name">
              Style:
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
            <div className="form-category-name">
              Sleeves:
              <Select>
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
              <Select>
                <option>Choose an option</option>
                <option>Dress Length</option>
                <option>Tunic Length</option>
                <option>Other</option>
              </Select>
            </div>
            <div className="form-category-name">
              Size:
              <Select>
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
              <Select>
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
          </div>
          <FormSubmit>Submit</FormSubmit>
        </Form>
      </div>
    );
  }
}

export default FormDresses;
