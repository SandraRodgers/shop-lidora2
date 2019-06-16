import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getVests, openBag } from "../../../../ducks/reducer";
import "../shop.css";

class Vests extends React.Component {
  constructor(props) {
    super(props);

    this.state = { productInfo: [] };
  }
  componentDidMount() {
    this.props.getVests();
  }

  render() {
      console.log(this.props.vests)
    let toggleBag;

    this.props.bagIsOpen === true ? (toggleBag = 0) : (toggleBag = 1);

    let vestsList = this.props.vests.map(element => {
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
          <p className="product">Vests</p>
        </div>
        <div className="product-rows">{vestsList}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    vests: state.vests,
    bagIsOpen: state.bagIsOpen
  };
};

export default connect(
  mapStateToProps,
  { getVests: getVests, openBag: openBag }
)(Vests);
