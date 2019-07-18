import React from 'react'

import "./styleguide.css"
import imgPlaceholder from "../../../assets/img-placeholder.jpg"
import cherry from "../../../assets/cherrygirl.jpg"

const RowStyles = (props) => {
return(
    <div className="row-fabric-component">
        <div className="row-styles-main-row">
        <div className="row-styles-main-row-title">
        <div className='title-text-styles'>Styles: </div>
        <div className='title-text-discover'>Discover the Possibilities</div>
        </div>
        <div className="row-styles-img-div">
        <img className='row-styles-img-top' src={cherry}></img>
        <div className="row-styles-img-text">Sweet Cherry Dress</div>
        </div>
        </div>
    </div>
)
}

export default RowStyles