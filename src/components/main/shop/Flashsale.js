import React from "react";
import { connect } from "react-redux";
import axios from 'axios'
import { Link } from "react-router-dom";
import {  openBag } from "../../../../src/ducks/reducer";
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

  render() {
    let toggleBag;

    this.props.bagIsOpen === true ? (toggleBag = 0) : (toggleBag = 1);

    let flashsaleList = this.state.productInfo.map(element => {
      return (
        <div
          style={{ zIndex: toggleBag }}
          className="product-container"
          key={element.productid}
          
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
const mapStateToProps = state => {
  return {
    bloomers: state.bloomers,
    bagIsOpen: state.bagIsOpen,
  };
};

export default connect(
  mapStateToProps,
  { openBag: openBag }
)(Flashsale);
