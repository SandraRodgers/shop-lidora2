import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { openBag } from "../../../ducks/reducer";
import ShopClothing from "./ShopClothing"
import ShopAccessories from "./ShopAccessories"
import ShopBaby from "./ShopBaby"
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
  

    return (
        <div>
            <ShopClothing bagIsOpen= {this.props.bagIsOpen} favorites = {this.state.favorites}/>
            <ShopAccessories bagIsOpen= {this.props.bagIsOpen} favorites = {this.state.favorites}/>
            <ShopBaby bagIsOpen= {this.props.bagIsOpen} favorites = {this.state.favorites}/>
        </div>

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
