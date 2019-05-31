import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getDresses, openBag } from "../../../../ducks/reducer";
import "../shop.css";

class Dresses extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = { productInfo: [] };
    this.linkRef = React.createRef();
    this.focusLink = this.focusLink.bind(this)
  }
  componentDidMount() {
    this.props.getDresses();
  }
  
  focusLink() {
    console.log('focus')
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.linkRef.current.focus();
  }

  render() {
  
    let toggleBag;
    
    this.props.bagIsOpen === true ? (toggleBag = 0) : (toggleBag = 1);
   
    let dressList = this.props.dresses.map((element) => {
      
      return (
        <div
          style={{ zIndex: toggleBag }}
          className="product-container"
          key={element.productid}
         
          ref={this.linkRef} 
        >
          <Link  onClick={() =>this.focusLink()}   to={`/products/${element.productid}`}>
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
const mapStateToProps = state => {
  return {
    dresses: state.dresses,
    bagIsOpen: state.bagIsOpen
  };
};

export default connect(
  mapStateToProps,
  { getDresses: getDresses, openBag: openBag }
)(Dresses);
