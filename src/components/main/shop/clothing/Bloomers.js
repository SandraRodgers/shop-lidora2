import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getBloomers, openBag } from "../../../../ducks/reducer";
import "../shop.css";

class Bloomers extends React.Component {
  constructor(props) {
    super(props);

    this.state = { productInfo: [] };
  }
  componentDidMount() {
    this.props.getBloomers();
  }

  render() {
    let toggleBag;

    this.props.bagIsOpen === true ? (toggleBag = 0) : (toggleBag = 1);

    let bloomersList = this.props.bloomers.map(element => {
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
          <p className="product">Bloomers</p>
        </div>
        <div className="product-rows">{bloomersList}</div>
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
  { getBloomers: getBloomers, openBag: openBag }
)(Bloomers);
