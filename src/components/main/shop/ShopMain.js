import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { openBag } from "../../../ducks/reducer";
import "../../main/shop/shop.css";

class ShopMain extends Component {
  constructor(props) {
    super(props);

    this.state = { favorites: [] };
  }
  componentDidMount() {
    this.getFavorites();
  }

  getFavorites() {
      let noneNull = []
    axios.get("/api/favorites").then(response => {
        for(let i=0; i<response.data.length; i++){
            if(response.data[i]=== null){
                response.data.splice(i, 1)
            }
            
        }
        noneNull.push(response.data)
        // console.log(noneNull)

      this.setState({favorites: response.data})
    });
  }

  render() {
    
    let toggleBag;
    this.props.bagIsOpen === true ? (toggleBag = 0) : (toggleBag = 1);
    // let favoritesList = this.state.favorites.map(element => {
    //     console.log(element)
    //     return (
    //       <div
    //         style={{ zIndex: toggleBag }}
    //         className="product-container"
    //         key={element.productid}
            
    //       >
    //         <Link to={`/products/${element.productid}`}>
    //           <img className="product-photo" src={element.image} alt="" />
    //         </Link>
  
    //         <div className="product-info">
    //           <div className="product-name" to={`/products/${element.productid}`}>
    //             {element.name}
    //           </div>
  
    //           <Link
    //             className="product-price"
    //             to={`/products/${element.productid}`}
    //           >
    //             ${element.price}
    //           </Link>
    //         </div>
    //       </div>
    //     );
    //   });

    return (
        <div></div>
        // <div className="store-product-main">
        //   <div className="product-header">
        //     <p className="product">Best Sellers</p>
        //   </div>
        //   <div className="product-rows">{favoritesList}</div>
        // </div>
      );
  }
}
const mapStateToProps = state => {
  return {
    bagIsOpen: state.bagIsOpen
  };
};

export default connect(
  mapStateToProps,
  { openBag: openBag }
)(ShopMain);
