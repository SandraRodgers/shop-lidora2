import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getDresses } from "../../../../ducks/reducer";
import "../shop.css";

class Dresses extends React.Component {
  componentDidMount() {
    this.props.getDresses();
  }
  render() {
    console.log(this.props.dresses);
    let dressList = this.props.dresses.map((element, id) => {
      console.log(element);
      return (
        <div className="product-container" key={element.dressesid}>
          <Link to={`/products/${element.id}`}>
            <img className="product-photo" src={element.image} alt="" />
          </Link>

          <div className="product-info">
            <div className="product-name" to={`/products/${element.id}`}>
              {element.name}
            </div>

            <Link className="product-price" to={`/products/${element.id}`}>
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
