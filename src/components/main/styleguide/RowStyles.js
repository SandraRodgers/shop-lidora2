import React from 'react'

import "./styleguide.css"
import imgPlaceholder from "../../../assets/img-placeholder.jpg"

const RowStyles = (props) => {
return(
    <div className="row-fabric-component">
        <div className="row-styles-main-row">
        <div className="row-styles-main-row-title">
        <div>Styles: </div>
        <div>Discover the Possibilities</div>
        </div>
        <img src={imgPlaceholder}></img>
        </div>
    </div>
)
}

export default RowStyles