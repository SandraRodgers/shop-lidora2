import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getDroolpads, openBag } from "../../../../ducks/reducer";
import "../shop.css";

class DroolPads extends React.Component {
    constructor(props){
        super(props)
        this.state = {productInfo:[]}
    }

    componentDidMount() {
        this.props.getDroolpads();
      }
    render(){
        let toggleBag;

        this.props.bagIsOpen === true ? (toggleBag = 0) : (toggleBag = 1);
        console.log(this.props.droolpads)
        let droolpadsList = this.props.droolpads.map(element => {
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
        <div className="product-rows">{droolpadsList}</div>
      </div>)
    }


}
const mapStateToProps = state => {
    return {
      droolpads: state.droolpads,
      bagIsOpen: state.bagIsOpen
    };
  };
  
  export default connect(
    mapStateToProps,
    { getDroolpads: getDroolpads, openBag: openBag }
  )(DroolPads);