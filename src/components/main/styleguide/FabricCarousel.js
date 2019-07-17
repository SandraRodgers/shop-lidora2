import React, { Component } from "react";
import Slider from "react-slick";

import imgPlaceholder from "../../../assets/img-placeholder.jpg"
import shoplidora from "../../../assets/shop-lidora.jpeg"

import "../../../../node_modules/slick-carousel/slick/slick.css"
import "../../../../node_modules/slick-carousel/slick/slick-theme.css"

export default class Fade extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // centerMode: true,
      className: 'slider'
    };
    return (
      <div className='fabric-carousel-div' >
          
        <Slider {...settings}  >
        
          <div  >
            <img className= 'slider-img'src={shoplidora} />
          </div>
          <div>
            <img src={imgPlaceholder} />
          </div>
          <div>
            <img src={imgPlaceholder} />
          </div>
          <div>
            <img src={imgPlaceholder} />
          </div>
        </Slider>

      </div>
    );
  }
}