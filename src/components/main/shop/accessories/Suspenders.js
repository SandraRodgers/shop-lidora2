import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getSuspenders, openBag, hideMenu } from "../../../../ducks/reducer";
import "../shop.css";

class Suspenders extends React.Component {
    constructor(props){
        super(props)
        this.state = {productInfo:[]}
    }

    componentDidMount() {
        this.props.getSuspenders();
      }
    render(){
      
        let toggleBag;

        this.props.bagIsOpen === true ? (toggleBag = 0) : (toggleBag = 1);
  
        let suspendersList = this.props.suspenders.map(element => {
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
          <p className="product">Suspenders</p>
        </div>
        <div className="product-rows">{suspendersList}</div>
      </div>)
    }

  }
  const mapStateToProps = state => state
  
  export default connect(
    mapStateToProps,
    { getSuspenders, openBag, hideMenu }
  )(Suspenders);