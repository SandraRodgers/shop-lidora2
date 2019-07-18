import React from 'react'

import "./styleguide.css"
import imgPlaceholder from "../../../assets/img-placeholder.jpg"

import FabricCarousel from "./FabricCarousel"

const RowFabrics = (props) => {
return(
    <div className="row-fabrics-component">
        {/* <div className="row-styles-main-row"> */}
        {/* <img src={imgPlaceholder}></img> */}
        <FabricCarousel />
 
        <div className="row-fabrics-main-row-title">
        <div className='fabrics-title'>Current Fabrics: </div>
        <div className='fabrics-title-2'>Choose your favorites</div>
        {/* <div>Discover the Possibilities</div> */}
       </div>
        
        {/* </div> */}
    </div>
)
}

export default RowFabrics