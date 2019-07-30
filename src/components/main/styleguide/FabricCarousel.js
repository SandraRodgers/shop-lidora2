import React, { Component } from "react";
import Slider from "react-slick";
import axios from 'axios'




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
    axios.get('/api/style/fabrics').then((response)=>{
    this.setState({fabrics: response.data})
    })
  }


  render() {

    const settings = {
      arrows: true,
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // centerMode: true,
      className: 'slider',
      swipe: true
      
  
    };

    let fabricsList = this.state.fabrics.map((fabric, index)=>{

      return(
        <div className='fabric-img-div' key={fabric.fabricid} >
          <img alt='fabric' className= 'slider-img' src={fabric.img} />
          <div className='fabric-name'>{fabric.name}</div>
        </div>
      )
    })

    return (
      <div className='fabric-carousel-div' style={{width: '100vw'}}>
          
        <Slider {...settings}  >
        
        {fabricsList}
     
        </Slider>

      </div>
    );
  }
}