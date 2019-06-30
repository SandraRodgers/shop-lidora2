import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShopClothing extends Component {

    
    
    render(){
        let toggleBag;
        this.props.bagIsOpen === true ? (toggleBag = 0) : (toggleBag = 1);
        let clothing = []
        for(let i=0; i<this.props.favorites.length; i++){
            if(this.props.favorites[i].category === 'dresses' || 
            this.props.favorites[i].category === 'bloomers' ||
            this.props.favorites[i].category === 'skirts' ||
            this.props.favorites[i].category === 'shorts' ||
            this.props.favorites[i].category === 'vests'
            ){clothing.push(this.props.favorites[i])}
        }
      
        

        let clothingList = clothing.map(element => {
                console.log(element)
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
            <p className="product">Clothing Best Sellers</p>
          </div>
          <div className="product-rows">{clothingList}</div>
        </div>
        )
    }
}
export default ShopClothing