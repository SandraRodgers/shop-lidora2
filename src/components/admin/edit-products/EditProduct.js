import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";
import {
  getDress,
  getBonnet,
  getShort,
  getBloomer,
  getSkirt,
  getVest,
  getBibdana,
  getBowtie,
  getBurpcloth,
  getDroolpad,
  getHairbow,
  getHeadband,
  getSuspender,
  getFlashsale,
  getUserSession,
  addToCart,
  updateProduct,
  hideMenu
} from "../../../ducks/reducer";

import { Form, Input, Image, Select, FormSubmit } from "../../styled/Form";
import "../create-products/form.css";
import placeholder from "../../../assets/img-placeholder.jpg";

class EditDress extends Component {
  constructor() {
    super();
    this.state = {
      productInfo: [],
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
      category: "",
      favorite: "",
      productid: 0
    };
  }

  componentDidMount() {
    axios
      .get(`/api/product/${this.props.match.params.id}`)
      .then(response => {
        console.log(response.data)
        this.setState({ productInfo: response.data });
        //we get the productid from the component and set state so that productInfo contains that product (object)
      })
      .then(() => {
        console.log(this.state.productInfo)
        if (this.state.productInfo[0].category === "dresses") {
          this.props.getDress(this.state.productInfo[0].dressesid).then(()=>{
            this.setState({
              category: "dresses",
              productid: this.state.productInfo[0].productid,
              name: this.props.currentProduct[0].name,
              price: this.props.currentProduct[0].price,
              style: this.props.currentProduct[0].style,
              sleeves: this.props.currentProduct[0].sleeves,
              length: this.props.currentProduct[0].length,
              fabric: this.props.currentProduct[0].fabric,
              image: this.props.currentProduct[0].image,
              customize: this.props.currentProduct[0].customize,
              description: this.props.currentProduct[0].description,
              location: this.props.currentProduct[0].location,
              favorite: this.props.currentProduct[0].favorite
            });
          })
        
        }
        if (this.state.productInfo[0].category === "bonnets") {
          this.props.getBonnet(this.state.productInfo[0].bonnetsid).then(()=>{
            this.setState({
              category: "bonnets",
              productid: this.state.productInfo[0].productid,
              name: this.props.currentProduct[0].name,
              price: this.props.currentProduct[0].price,
              fabric: this.props.currentProduct[0].fabric,
              image: this.props.currentProduct[0].image,
              customize: this.props.currentProduct[0].customize,
              description: this.props.currentProduct[0].description,
              location: this.props.currentProduct[0].location,
              favorite: this.props.currentProduct[0].favorite
            });
          })
        }

        if (this.state.productInfo[0].category === "shorts") {
          this.props.getShort(this.state.productInfo[0].shortsid).then(()=>{
            this.setState({
              category: "shorts",
              productid: this.state.productInfo[0].productid,
              name: this.props.currentProduct[0].name,
              price: this.props.currentProduct[0].price,
              fabric: this.props.currentProduct[0].fabric,
              image: this.props.currentProduct[0].image,
              customize: this.props.currentProduct[0].customize,
              description: this.props.currentProduct[0].description,
              location: this.props.currentProduct[0].location,
              favorite: this.props.currentProduct[0].favorite
            });
          })
        }
        if (this.state.productInfo[0].category === "bloomers") {
          this.props.getBloomer(this.state.productInfo[0].bloomersid).then(()=>{
            this.setState({
              category: "bloomers",
              productid: this.state.productInfo[0].productid,
              name: this.props.currentProduct[0].name,
              price: this.props.currentProduct[0].price,
              fabric: this.props.currentProduct[0].fabric,
              image: this.props.currentProduct[0].image,
              customize: this.props.currentProduct[0].customize,
              description: this.props.currentProduct[0].description,
              location: this.props.currentProduct[0].location,
              favorite: this.props.currentProduct[0].favorite
            });
          })
        
        }
        if (this.state.productInfo[0].category === "skirts") {
          this.props.getSkirt(this.state.productInfo[0].skirtsid).then(()=>{
            this.setState({
              category: "skirts",
              productid: this.state.productInfo[0].productid,
              name: this.props.currentProduct[0].name,
              price: this.props.currentProduct[0].price,
              fabric: this.props.currentProduct[0].fabric,
              image: this.props.currentProduct[0].image,
              customize: this.props.currentProduct[0].customize,
              description: this.props.currentProduct[0].description,
              location: this.props.currentProduct[0].location,
              favorite: this.props.currentProduct[0].favorite
            });
          })
        }

        if (this.state.productInfo[0].category === "vests") {
          this.props.getVest(this.state.productInfo[0].vestsid).then(()=>{
            this.setState({
              category: "vests",
              productid: this.state.productInfo[0].productid,
              name: this.props.currentProduct[0].name,
              price: this.props.currentProduct[0].price,
              fabric: this.props.currentProduct[0].fabric,
              image: this.props.currentProduct[0].image,
              customize: this.props.currentProduct[0].customize,
              description: this.props.currentProduct[0].description,
              location: this.props.currentProduct[0].location,
              favorite: this.props.currentProduct[0].favorite
            });
          })
       
        }

        if (this.state.productInfo[0].category === "bibdanas") {
          this.props.getBibdana(this.state.productInfo[0].bibdanasid).then(()=>{
            this.setState({
              category: "bibdanas",
              productid: this.state.productInfo[0].productid,
              name: this.props.currentProduct[0].name,
              price: this.props.currentProduct[0].price,
              fabric: this.props.currentProduct[0].fabric,
              image: this.props.currentProduct[0].image,
              customize: this.props.currentProduct[0].customize,
              description: this.props.currentProduct[0].description,
              location: this.props.currentProduct[0].location,
              favorite: this.props.currentProduct[0].favorite
            });
          })
          
        }

        if (this.state.productInfo[0].category === "bowties") {
          this.props.getBowtie(this.state.productInfo[0].bowtiesid).then(()=>{
            this.setState({
              category: "bowties",
              productid: this.state.productInfo[0].productid,
              name: this.props.currentProduct[0].name,
              price: this.props.currentProduct[0].price,
              fabric: this.props.currentProduct[0].fabric,
              image: this.props.currentProduct[0].image,
              customize: this.props.currentProduct[0].customize,
              description: this.props.currentProduct[0].description,
              location: this.props.currentProduct[0].location,
              favorite: this.props.currentProduct[0].favorite
            });
          })
       
        }

        if (this.state.productInfo[0].category === "burpcloths") {
          this.props.getBurpcloth(this.state.productInfo[0].burpclothsid).then(()=>{
            this.setState({
              category: "burpcloths",
              productid: this.state.productInfo[0].productid,
              name: this.props.currentProduct[0].name,
              price: this.props.currentProduct[0].price,
              fabric: this.props.currentProduct[0].fabric,
              image: this.props.currentProduct[0].image,
              customize: this.props.currentProduct[0].customize,
              description: this.props.currentProduct[0].description,
              location: this.props.currentProduct[0].location,
              favorite: this.props.currentProduct[0].favorite
            });
          })
         
        }

        if (this.state.productInfo[0].category === "droolpads") {
          this.props.getDroolpad(this.state.productInfo[0].droolpadsid).then(()=>{
            this.setState({
              category: "droolpads",
              productid: this.state.productInfo[0].productid,
              name: this.props.currentProduct[0].name,
              price: this.props.currentProduct[0].price,
              fabric: this.props.currentProduct[0].fabric,
              image: this.props.currentProduct[0].image,
              customize: this.props.currentProduct[0].customize,
              description: this.props.currentProduct[0].description,
              location: this.props.currentProduct[0].location,
              favorite: this.props.currentProduct[0].favorite
            });
          })
        
        }

        if (this.state.productInfo[0].category === "hairbows") {
          this.props.getHairbow(this.state.productInfo[0].hairbowsid).then(()=>{
            this.setState({
              category: "hairbows",
              productid: this.state.productInfo[0].productid,
              name: this.props.currentProduct[0].name,
              price: this.props.currentProduct[0].price,
              fabric: this.props.currentProduct[0].fabric,
              image: this.props.currentProduct[0].image,
              customize: this.props.currentProduct[0].customize,
              description: this.props.currentProduct[0].description,
              location: this.props.currentProduct[0].location,
              favorite: this.props.currentProduct[0].favorite
            });
          })
        
        }

        if (this.state.productInfo[0].category === "headbands") {
          this.props.getHeadband(this.state.productInfo[0].headbandsid).then(()=>{
            this.setState({
              category: "headbands",
              productid: this.state.productInfo[0].productid,
              name: this.props.currentProduct[0].name,
              price: this.props.currentProduct[0].price,
              fabric: this.props.currentProduct[0].fabric,
              image: this.props.currentProduct[0].image,
              customize: this.props.currentProduct[0].customize,
              description: this.props.currentProduct[0].description,
              location: this.props.currentProduct[0].location,
              favorite: this.props.currentProduct[0].favorite
            });
          })
       
        }

        if (this.state.productInfo[0].category === "suspenders") {
          this.props.getSuspender(this.state.productInfo[0].suspendersid).then(()=>{
            this.setState({
              category: "suspenders",
              productid: this.state.productInfo[0].productid,
              name: this.props.currentProduct[0].name,
              price: this.props.currentProduct[0].price,
              fabric: this.props.currentProduct[0].fabric,
              image: this.props.currentProduct[0].image,
              customize: this.props.currentProduct[0].customize,
              description: this.props.currentProduct[0].description,
              location: this.props.currentProduct[0].location,
              favorite: this.props.currentProduct[0].favorite
            });
          })
       
        }

        if (this.state.productInfo[0].category === "flashsale") {
          this.props.getFlashsale(this.state.productInfo[0].flashid).then(()=>{
            this.setState({
              category: "flashsale",
              productid: this.state.productInfo[0].productid,
              name: this.props.currentProduct[0].name,
              price: this.props.currentProduct[0].price,
              fabric: this.props.currentProduct[0].fabric,
              image: this.props.currentProduct[0].image,
              customize: this.props.currentProduct[0].customize,
              description: this.props.currentProduct[0].description,
              location: this.props.currentProduct[0].location,
              favorite: this.props.currentProduct[0].favorite
            });
          })
        
        }
      });
  }


  componentWillUnmount() {
    this.props.updateProduct();
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
      category,
      favorite
    } = this.state;
    e.preventDefault();
    this.editDress(
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
      favorite,
      category
    );
  };

  editDress = () => {
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
      favorite,
      category
    } = this.state;
    axios
      .put(`/api/admin/product/${this.state.productid}`, {
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
        favorite,
        category
      })
      .then(response => {
        console.log(response);
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
          () => alert("Your product has been edited")
        );
      });
  };

  render() {
    console.log(this.state.productid);
    console.log(this.props.currentProduct && this.props.currentProduct[0] );
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


{this.state.category === 'dresses' ? 
            <div>
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
            </div> </div>
            
            : null}

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
           
              </Select>
            </div>
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
    getDress,
    getBonnet,
    getShort,
    getBloomer,
    getSkirt,
    getVest,
    getUserSession,
    addToCart,
    getBibdana,
    getBowtie,
    getBurpcloth,
    getDroolpad,
    getHairbow,
    getHeadband,
    getSuspender,
    getFlashsale,
    updateProduct,
    hideMenu
  }
)(EditDress);
