import React from 'react'
import SideBar from "./SideBar"


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
    <div className="F-component">
 <SideBar   favorites={favorites}/>
    </div>
)
}

export default Favorites