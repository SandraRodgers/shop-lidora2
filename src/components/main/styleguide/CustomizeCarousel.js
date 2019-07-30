import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";

import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

export default class Fade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      custom: []
    };
  }

  componentDidMount() {
    axios.get("/api/style/styles").then(response => {
      this.setState({ custom: response.data });
    });
  }

  render() {
    const settings = {
      arrows: true,
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // centerMode: true,
      className: "slider-2"
    };

    let stylesList = this.state.custom.map((style, index) => {
      return (
        <div key={style.styleid}>
        <div className="custom-slider-img-div" >
          <img alt='styles' className="custom-slider-img" src={style.img} />
        
         
        </div>
        <div className="style-description">{style.style}</div>
        </div>
      );
    });

    return (
      <div className="custom-carousel-div">
        <Slider  {...settings}>{stylesList}</Slider>
      </div>
    );
  }
}
