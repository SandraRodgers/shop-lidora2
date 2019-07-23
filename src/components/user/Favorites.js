import React from 'react'
import SideBar from "./SideBar"

import { connect } from "react-redux";
import {  openBag, hideMenu } from "../../ducks/reducer";

let information;
let orders;
let favorites;

const Favorites = (props) => {

 
      if (props.location.pathname === "/user/favorites") {
        favorites = "900";
      } else {
        favorites = "200";
      }

return(
    <div className="F-component" onMouseOver={this.props.hideMenu}>
 <SideBar   favorites={favorites}/>
    </div>
)
}

const mapStateToProps = state => state

export default connect(
  mapStateToProps,
  { openBag, hideMenu }
)(Favorites);