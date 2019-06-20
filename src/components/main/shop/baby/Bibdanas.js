import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getBibdanas, openBag } from "../../../../ducks/reducer";
import "../shop.css";

class Bibdanas extends React.Component {
    constructor(props){
        super(props)
        this.state = {productInfo:[]}
    }

    componentDidMount() {
        this.props.getBibdanas();
      }
    render(){
        let toggleBag;

        this.props.bagIsOpen === true ? (toggleBag = 0) : (toggleBag = 1);
        console.log(this.props.bibdanas)
        let bibdanasList = this.props.bibdanas.map(element => {
            return (
              <div
                style={{ zIndex: toggleBag }}
                className="product-container"
                key={element.productid}
                ref={this.linkRef}
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
          <p className="product">Bibdanas</p>
        </div>
        <div className="product-rows">{bibdanasList}</div>
      </div>)
    }


}
const mapStateToProps = state => {
    return {
      bibdanas: state.bibdanas,
      bagIsOpen: state.bagIsOpen
    };
  };
  
  export default connect(
    mapStateToProps,
    { getBibdanas: getBibdanas, openBag: openBag }
  )(Bibdanas);