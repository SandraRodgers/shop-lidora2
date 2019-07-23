import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getDresses, openBag, hideMenu } from "../../../../ducks/reducer";
import "../shop.css";

class Dresses extends React.Component {
  constructor(props) {
    super(props);

    this.state = { productInfo: [] };
  }
  componentDidMount() {
    this.props.getDresses();
  }

  render() {
    let toggleBag;

    this.props.bagIsOpen === true ? (toggleBag = 0) : (toggleBag = 1);

    let dressList = this.props.dresses.map(element => {
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
          <p className="product">Dresses</p>
        </div>
        <div className="product-rows">{dressList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getDresses, openBag, hideMenu }
)(Dresses);
