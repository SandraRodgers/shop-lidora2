import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getHairbows, openBag, hideMenu } from "../../../../ducks/reducer";
import "../shop.css";

class Hairbows extends React.Component {
    constructor(props){
        super(props)
        this.state = {productInfo:[]}
    }

    componentDidMount() {
        this.props.getHairbows();
      }
    render(){
        let toggleBag;

        this.props.bagIsOpen === true ? (toggleBag = 0) : (toggleBag = 1);
  
        let hairbowsList = this.props.hairbows.map(element => {
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
              </div>  );
    });
        return(<div className="store-product-main">
        <div className="product-header">
          <p className="product">Hairbows</p>
        </div>
        <div className="product-rows">{hairbowsList}</div>
      </div>)
    }


  }
  const mapStateToProps = state => state
  
  export default connect(
    mapStateToProps,
    {  getHairbows, openBag, hideMenu }
  )(Hairbows);