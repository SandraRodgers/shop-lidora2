import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getBowties, openBag } from "../../../../ducks/reducer";
import "../shop.css";

class Bowties extends React.Component {
    constructor(props){
        super(props)
        this.state = {productInfo:[]}
    }

    componentDidMount() {
        this.props.getBowties();
      }
    render(){
        let toggleBag;

        this.props.bagIsOpen === true ? (toggleBag = 0) : (toggleBag = 1);
        console.log(this.props.bonnets)
        let bowtiesList = this.props.bowties.map(element => {
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
          <p className="product">Bowties</p>
        </div>
        <div className="product-rows">{bowtiesList}</div>
      </div>)
    }


}
const mapStateToProps = state => {
    return {
      bowties: state.bowties,
      bagIsOpen: state.bagIsOpen
    };
  };
  
  export default connect(
    mapStateToProps,
    { getBowties: getBowties, openBag: openBag }
  )(Bowties);