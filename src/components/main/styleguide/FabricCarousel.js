import React, { Component } from "react";
import Slider from "react-slick";
import axios from 'axios'

import imgPlaceholder from "../../../assets/img-placeholder.jpg"
import lovelyllamas from "../../../assets/lovely llamas.jpg"
import unicornrainbow from "../../../assets/UnicornRainbow.jpg"


import "../../../../node_modules/slick-carousel/slick/slick.css"
import "../../../../node_modules/slick-carousel/slick/slick-theme.css"

export default class Fade extends Component {
  constructor(props){
    super(props)
    this.state = {
      fabrics: [],
      index: 0
    }
  }

  componentDidMount(){
    axios.get('api/style/fabrics').then((response)=>{
    console.log(response)
    })
  }

  render() {
    const settings = {
      arrows: false,
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 2,
      // centerMode: true,
      className: 'slider'
    };
    return (
      <div className='fabric-carousel-div' >
          
        <Slider {...settings}  >
        
          <div  >
            <img className= 'slider-img'src={lovelyllamas} />
          </div>
           <div>
            <img className= 'slider-img' src={unicornrainbow} />
          </div>
          {/* <div>
            <img src={imgPlaceholder} />
          </div>
          <div>
            <img src={imgPlaceholder} />
          </div> */} 
        </Slider>

      </div>
    );
  }
}