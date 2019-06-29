import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShopAccessories extends Component {

    
    
    render(){
        let toggleBag;
        this.props.bagIsOpen === true ? (toggleBag = 0) : (toggleBag = 1);
        let accessories = []
        for(let i=0; i<this.props.favorites.length; i++){
            if(this.props.favorites[i].category === 'bonnets' || 
            this.props.favorites[i].category === 'bowties' ||
            this.props.favorites[i].category === 'hairbows' ||
            this.props.favorites[i].category === 'headbands' ||
            this.props.favorites[i].category === 'suspenders'
            ){accessories.push(this.props.favorites[i])}
        }
      
        console.log(accessories)

        let accessoriesList = accessories.map(element => {
            
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
        return(
       <div className="store-product-main">
          <div className="product-header">
            <p className="product">Accessories Best Sellers</p>
          </div>
          <div className="product-rows">{accessoriesList}</div>
        </div>
        )
    }
}
export default ShopAccessories