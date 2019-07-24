import React from "react";

import axios from 'axios'
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {  openBag, hideMenu } from "../../../../src/ducks/reducer";
import "../shop/shop.css";

class Flashsale extends React.Component {
  constructor(props) {
    super(props);

    this.state = { productInfo: [] };
  }
  componentDidMount() {
    this.getFlashsale()
  }

  getFlashsale(){
    axios.get('/api/admin/flashsale').then((response)=> {
      this.setState({productInfo: response.data})
    })
  }

  componentDidUpdate=(prevProps, prevState)=>{
    if(prevState.productInfo !== this.state.productInfo){
      this.getFlashsale()
    }
  }

  render() {
    let toggleBag;

    this.props.bagIsOpen === true ? (toggleBag = 0) : (toggleBag = 1);

    let flashsaleList = this.state.productInfo.map(element => {
      return (
        <div
          style={{ zIndex: toggleBag }}
          className="product-container"
          key={element.productid}
          onMouseOver={this.props.hideMenu}
        >
          <Link to={`/products/${element.productid}`}>
            <img className="product-photo" src={element.image} alt="" />
          </Link>

          <div className="product-info">
            <div className="product-name" to={`/products/${element.productid}`}>
              {element.name}
            </div>

            <Link
              className="product-price"
              to={`/products/${element.productid}`}
            >
              ${element.price}
            </Link>
          </div>
        </div>
      );
    });

    return (
      <div className="store-product-main">
        <div className="product-header">
          <p className="product">FLASH SALE!</p>
        </div>
   
        <div className="product-rows">{flashsaleList}</div>
      
      </div>
    );
  }
}

const mapStateToProps = state => state

export default connect(
  mapStateToProps,
  { openBag, hideMenu }
)(Flashsale);
