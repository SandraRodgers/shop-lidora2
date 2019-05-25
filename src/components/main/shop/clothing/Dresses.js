import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getDresses } from "../../../../ducks/reducer";
import "../shop.css";

class Dresses extends React.Component {
  constructor(){
    super()
    this.state={productInfo:[]}
    
  }
  componentDidMount() {
    this.props.getDresses();
  }

  

  render() {
  
    let dressList = this.props.dresses.map((element, id) => {
      
      return (
        <div className="product-container" key={element.dressesid} >
          <Link to={`/products/${element.productid}`} >
  
            <img className="product-photo" src={element.image} alt="" />
          </Link>

          <div className="product-info">
            <div className="product-name" to={`/products/${element.productid}`}>
              {element.name}
            </div>

            <Link className="product-price" to={`/products/${element.productid}`}>
              ${element.price}
            </Link>
          </div>
        </div>
      );
    });

    return (
      <div className="store-product-main">
        <div className="product-header">
          <p className="product">Dresses</p>
        </div>
        <div className="product-rows">{dressList}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    dresses: state.dresses
  };
};

export default connect(
  mapStateToProps,
  { getDresses: getDresses }
)(Dresses);
