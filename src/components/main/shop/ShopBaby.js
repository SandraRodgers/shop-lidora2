import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShopBaby extends Component {

    
    
    render(){
        let toggleBag;
        this.props.bagIsOpen === true ? (toggleBag = 0) : (toggleBag = 1);
        let baby = []
        for(let i=0; i<this.props.favorites.length; i++){
            if(this.props.favorites[i].category === 'bibdanas' || 
            this.props.favorites[i].category === 'burpcloths' ||
            this.props.favorites[i].category === 'droolpads' 
           
            ){baby.push(this.props.favorites[i])}
        }
      
 

        let babyList = baby.map(element => {
            
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
            <p className="product">Baby Best Sellers</p>
          </div>
          <div className="product-rows">{babyList}</div>
        </div>
        )
    }
}
export default ShopBaby