import React, { Component } from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'

import { connect } from "react-redux";
import {
  getFlashsale,
  updateProduct,
  hideMenu,
  getUserSession
} from "../../../ducks/reducer";

import { Form, Input, Image, Select, FormSubmit } from "../../styled/Form";
import "../create-products/form.css";
import placeholder from "../../../assets/img-placeholder.jpg";

class EditFlashsale extends Component {
  constructor() {
    super();
    this.state = {
      productInfo: [],
      name: "",
      price: 0,
      size: "",
      fabric: "",
      image: "",
      description: "",
      category: "",
      productid: 0,
      id: 0,
      sold: false,
      redirect: false
    };
  }

    ////need to get this working
  checkUser = () => {
    if(this.props.user.isadmin === false)
    this.setState({redirect: true}
    )
  }

  componentDidMount() {
    this.props.getUserSession()
    this.checkUser()
    axios
      .get(`/api/product/${this.props.match.params.id}`)
      .then(response => {
        console.log(response.data)
        this.setState({ productInfo: response.data });
        //we get the productid from the component and set state so that productInfo contains that product (object)
      })
      .then(() => {
        console.log(this.state.productInfo)
       

        if (this.state.productInfo && this.state.productInfo[0] && this.state.productInfo[0].category === "flashsale") {
          this.props.getFlashsale(this.state.productInfo[0].flashid).then(()=>{
            
              let sold;
              if(this.props.currentProduct[0].sold === false){sold = 'false'}else{
                  sold = 'true'
              }
            this.setState({
              category: "flashsale",
              productid: this.state.productInfo[0].productid,
              name: this.props.currentProduct[0].name,
              price: this.props.currentProduct[0].price,
              size: this.props.currentProduct[0].size,
              fabric: this.props.currentProduct[0].fabric,
              image: this.props.currentProduct[0].image,
              description: this.props.currentProduct[0].description,
              sold: sold,
              id: this.props.currentProduct[0].flashid
            });
          })
        
        }
      });
  }


  componentWillUnmount() {
    this.props.updateProduct();
  }

  handleChange = e => {
    console.log('size',this.state.size)
    console.log('sold',this.state.sold)
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
      console.log(this.state.size)
      console.log(this.state.sold)
    const {
      name,
      price,
      size,
      fabric,
      image,
      description,
      category,
      sold
    } = this.state;
    e.preventDefault();
    this.editFlash(
        name,
        price,
        size,
        fabric,
        image,
        description,
        category,
        sold
    );
  };

  editFlash = () => {
    const {
      name,
      price,
      size,
      fabric,
      image,
      description,
      category,
      sold
    } = this.state;
    axios
      .put(`/api/admin/product/${this.state.id}`, {
        name,
        price,
        size,
        fabric,
        image,
        description,
        category,
        sold
      })
      .then(response => {
        console.log(response);
        return this.setState(
          {
            name: "",
            price: 0,
            size: "",
            fabric: "",
            image: "",
            description: "",
            sold: ""
          },
          () => alert("Your product has been edited")
        );
      });
  };

  render() {
    if(this.state.redirect ===true){
      return <Redirect push to="/" />
  }

    return (
      <div className="form-component-container">
        <div className="form-title">Edit Product information</div>
        <Form onSubmit={this.handleSubmit}>
          <Image
            src={this.state.image === "" ? placeholder : this.state.image}
          />
          <div className="form-input-div">
            <div className="form-category-name">
              Product Name:
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
          
         
          </div>
          <FormSubmit onClick={this.handleSubmit}>Submit</FormSubmit>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
   
    getFlashsale,
    updateProduct,
    hideMenu,
    getUserSession
  }
)(EditFlashsale);
