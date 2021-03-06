import React, { Component } from "react";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";



import {
  getDress,
  getBonnet,
  getShort,
  getBloomer,
  getSkirt,
  getShirt,
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
  hideMenu,
  getLocationKey
} from "../../../ducks/reducer";
import "./product.css";


class Product extends Component {
  constructor(props ) {
    super(props);
    this.state = {
      productInfo: [],
      size: "",
      category: "",
      redirect: false,
      quantity: 1,
      productid: 0
    };
    this.holdSize = this.holdSize.bind(this);
    this.holdQuantity = this.holdQuantity.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }



  componentDidMount() {
    this.props.getUserSession();
    this.props.getLocationKey(this.props.location.pathname)
 
    axios
      .get(`/api/product/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ productInfo: response.data });
      
        //we get the productid from the component and set state so that productInfo contains that product (object)
      })
      .then(() => {

        if (this.state.productInfo[0].category === "dresses") {
          this.props.getDress(this.state.productInfo[0].dressesid);
          this.setState({
            category: "dresses",
            productid: this.state.productInfo[0].productid
          });
        }
        if (this.state.productInfo[0].category === "bonnets") {
          this.props.getBonnet(this.state.productInfo[0].bonnetsid);
          this.setState({
            category: "bonnets",
            productid: this.state.productInfo[0].productid
          });
        }
        if (this.state.productInfo[0].category === "shorts") {
          this.props.getShort(this.state.productInfo[0].shortsid);
          this.setState({
            category: "shorts",
            productid: this.state.productInfo[0].productid
          });
        }
        if (this.state.productInfo[0].category === "bloomers") {
          this.props.getBloomer(this.state.productInfo[0].bloomersid);
          this.setState({
            category: "bloomers",
            productid: this.state.productInfo[0].productid
          });
        }
        if (this.state.productInfo[0].category === "skirts") {
          this.props.getSkirt(this.state.productInfo[0].skirtsid);
          this.setState({
            category: "skirts",
            productid: this.state.productInfo[0].productid
          });
        }
        if (this.state.productInfo[0].category === "shirts") {
          this.props.getShirt(this.state.productInfo[0].shirtsid);
          this.setState({
            category: "shirts",
            productid: this.state.productInfo[0].productid
          });
        }
        if (this.state.productInfo[0].category === "vests") {
          this.props.getVest(this.state.productInfo[0].vestsid);
          this.setState({
            category: "vests",
            productid: this.state.productInfo[0].productid
          });
        }

        if (this.state.productInfo[0].category === "bibdanas") {
          this.props.getBibdana(this.state.productInfo[0].bibdanasid);
          this.setState({
            category: "bibdanas",
            productid: this.state.productInfo[0].productid
          });
        }

        if (this.state.productInfo[0].category === "bowties") {
          this.props.getBowtie(this.state.productInfo[0].bowtiesid);
          this.setState({
            category: "bowties",
            productid: this.state.productInfo[0].productid
          });
        }

        if (this.state.productInfo[0].category === "burpcloths") {
          this.props.getBurpcloth(this.state.productInfo[0].burpclothsid);
          this.setState({
            category: "burpcloths",
            productid: this.state.productInfo[0].productid
          });
        }

        if (this.state.productInfo[0].category === "droolpads") {
          this.props.getDroolpad(this.state.productInfo[0].droolpadsid);
          this.setState({
            category: "droolpads",
            productid: this.state.productInfo[0].productid
          });
        }

        if (this.state.productInfo[0].category === "hairbows") {
          this.props.getHairbow(this.state.productInfo[0].hairbowsid);
          this.setState({
            category: "hairbows",
            productid: this.state.productInfo[0].productid
          });
        }

        if (this.state.productInfo[0].category === "headbands") {
          this.props.getHeadband(this.state.productInfo[0].headbandsid);
          this.setState({
            category: "headbands",
            productid: this.state.productInfo[0].productid
          });
        }

        if (this.state.productInfo[0].category === "suspenders") {
          this.props.getSuspender(this.state.productInfo[0].suspendersid);
          this.setState({
            category: "suspenders",
            productid: this.state.productInfo[0].productid
          });
        }

        if (this.state.productInfo[0].category === "flashsale") {
          this.props.getFlashsale(this.state.productInfo[0].flashid);
          this.setState({
            category: "flashsale",
            productid: this.state.productInfo[0].productid
          });
        }
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentProduct[0]) {
      if (prevState.size !== this.props.currentProduct[0].size) {
        this.setState({ size: this.props.currentProduct[0].size });
      }
    }
  }

  //Use this componentWillUnmount to change state in reducer so the this.props.currentProduct does not hold onto the product image. This will help when user navigates back to this page. They will see the updated product image immediately instead of a flash of the previous product image:

  componentWillUnmount() {
    this.props.updateProduct();
  }


  

  holdSize(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  holdQuantity(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addToCart() {
    
    if(!this.props.user){
      this.setState({redirect: true}, alert('Please sign in to shop'))
        
  } else {
  
  

    if (
      this.state.size === undefined &&
      this.state.productInfo[0].category === "dresses"
    ) {
      alert("Please specify a size");
    } else if (
      this.state.size === undefined &&
      this.state.productInfo[0].category === "shorts"
    ) {
      alert("Please specify a size");
    } else if (
      this.state.size === undefined &&
      this.state.productInfo[0].category === "bloomers"
    ) {
      alert("Please specify a size");
    } else if (
      this.state.size === undefined &&
      this.state.productInfo[0].category === "skirts"
    ) {
      alert("Please specify a size");
      
    } 
    else if (
      this.state.size === undefined &&
      this.state.productInfo[0].category === "shirts"
    ) {
      alert("Please specify a size")}
    
    else if (
      this.state.size === undefined &&
      this.state.productInfo[0].category === "vests"
    ) {
      alert("Please specify a size");
    } else if (
      this.state.size === undefined &&
      this.state.productInfo[0].category === "bonnets"
    ) {
      alert("Please specify a size");
    } else if (
      this.state.size === undefined &&
      this.state.productInfo[0].category === "suspenders"
    ) {
      alert("Please specify a size");
    } else {
      this.props.addToCart(
        this.props.currentProduct[0],
        this.props.currentProduct[0].price,
        this.state.size,
        this.state.quantity,
        this.state.productid
      );
      alert("Product added to cart");
    }}
  }

  render() {

  console.log(this.props.currentProduct[0])
  
    if(this.state.redirect ===true){
      return <Redirect push to="/" />
  }
   
    let toggleBag;

    this.props.bagIsOpen === true ? (toggleBag = -1) : (toggleBag = 1);

    return (
      <div onMouseOver={this.props.hideMenu}>
        {/* {this.state.redirect === true ? <Redirect push to="/login" /> : null} */}
        <div className="container">
          <div className="column1">
            {this.props.currentProduct[0] && (
              <img
                className="product-img"
                src={this.props.currentProduct[0].image}
                alt=""
              />
            )}
          </div>

          <div className="column2">
            {this.props.currentProduct[0] && (
              <div className="product-title">
                {this.props.currentProduct[0].name}
                {this.props.currentProduct[0] &&
                this.state.category === "flashsale" ? (
                  <div className="product-flashsale-size">
                    Size: {this.props.currentProduct[0].size}
                  </div>
                ) : null}
              </div>
            )}


{this.state.category === 'flashsale' && this.props.user && this.props.user.isadmin === true  ?  <Link className="product-edit-link" to=  {`/admin/edit/flashsale/${this.props.match.params.id}`} >
              <div className="product-edit-link-div"> Admin: Edit This Product </div>  </Link> : this.props.user && this.props.user.isadmin === true ? 
              <Link className="product-edit-link" to=  {`/admin/edit/product/${this.props.match.params.id}`} >
              <div className="product-edit-link-div"> Admin: Edit This Product </div>  </Link> : null
            
            }
            
            

              

            {this.props.currentProduct[0] && (
              <div className="product-description">
                {this.props.currentProduct[0].description}
              </div>
            )}

          

            {this.props.currentProduct[0] && (
              <div className="product-price-div">
           
              <div>   Price:</div>
             
             
                <div> ${this.props.currentProduct[0].price}</div>
                 
    
              </div>
            )}

            {this.state.category === "dresses" ||
            this.state.category === "bonnets" ||
            this.state.category === "shorts" ||
            this.state.category === "bloomers" ||
            this.state.category === "skirts" ||
            this.state.category === "shirts" ||
            this.state.category === "vests" ||
            this.state.category === "suspenders" ? (
              <div className="product-size-options">
                <div className="product-size-heading">Size: </div>

                <select
                  value={this.state.size}
                  name="size"
                  style={{ zIndex: toggleBag }}
                  className="product-select"
                  onChange={this.holdSize}
                >
                  <option>Please select a size</option>
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
                </select>
              </div>
            ) : null}

        

            {this.props.currentProduct[0] && (
              <div className="product-quantity-div">
                Quantity:{" "}
                <input
                  className="product-quantity-input"
                  value={this.state.quantity}
                  name="quantity"
                  onChange={this.holdQuantity}
                />
              </div>
            )}

            <div className="product-add-to-bag-button-container">
              {this.props.currentProduct[0] && (
                <button
                  onClick={this.addToCart}
                  className="product-add-to-bag-button"
                >
                  ADD TO BAG
                </button>
              )}
            </div>
          </div>
        </div>
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
    getShirt,
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
    hideMenu,
    getLocationKey
  }
)(Product);


