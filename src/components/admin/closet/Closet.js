import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

class Closet extends Component {
    constructor(props){
        super(props)
        this.state = {
            clothing: []
        }
    }

    componentDidMount(){
        axios.get("/api/closet").then(response => {
            console.log(response.data)
            this.setState({clothing: response.data})
        }
        )}
    
    
    render(){
  
        let toggleBag;
        this.props.bagIsOpen === true ? (toggleBag = 0) : (toggleBag = 1);
     
      
        

        let clothingList = this.state.clothing.map(element => {
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
            <div className="product">Closet</div>
          </div>
          <div className="product-rows">{clothingList}</div>
        </div>
        )
    }
}
export default Closet