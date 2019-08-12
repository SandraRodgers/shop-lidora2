import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getShirts, openBag, hideMenu } from "../../../../ducks/reducer";
import "../shop.css";

class Shirts extends React.Component {
  constructor(props) {
    super(props);

    this.state = { productInfo: [] };
  }
  componentDidMount() {
    this.props.getShirts();
  }

  render() {
      console.log(this.props.shirts)
    let toggleBag;

    this.props.bagIsOpen === true ? (toggleBag = 0) : (toggleBag = 1);

    let shirtsList = this.props.shirts.map(element => {
      return (
        <div
          style={{ zIndex: toggleBag }}
          className="product-container"
          key={element.productid}
          onMouseOver ={this.props.hideMenu}
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
          <p className="product">Shirts</p>
        </div>
        <div className="product-rows">{shirtsList}</div>
      </div>
    );
  }
}


const mapStateToProps = state => state

export default connect(
  mapStateToProps,
  { getShirts, openBag, hideMenu }
)(Shirts);