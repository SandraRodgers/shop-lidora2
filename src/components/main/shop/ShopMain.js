import React, { Component } from "react";
import {withRouter} from 'react-router-dom'
import axios from "axios";
import { connect } from "react-redux";
import { openBag, hideMenu } from "../../../ducks/reducer";
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
        

      this.setState({favorites: response.data})
    });
  }

  render() {
    // console.log(this.props)

  

    return (
        <div onMouseOver={this.props.hideMenu} onScroll={this.props.handleScroll}>
            <ShopClothing bagIsOpen= {this.props.bagIsOpen} favorites = {this.state.favorites}/>
            <ShopAccessories bagIsOpen= {this.props.bagIsOpen} favorites = {this.state.favorites}/>
            <ShopBaby bagIsOpen= {this.props.bagIsOpen} favorites = {this.state.favorites}/>
        </div>

      );
  }
}



const mapStateToProps = state => state


const MyComponent = connect(
  mapStateToProps,
  { openBag: openBag, hideMenu: hideMenu }
)(ShopMain);
export default withRouter(MyComponent);