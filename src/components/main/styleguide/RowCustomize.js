import React from "react";

import "./styleguide.css";

import CustomizeCarousel from "../styleguide/CustomizeCarousel";

const RowCustomize = props => {
  return (
    <div className="row-customize-component">
      <div className="row-custom-main-row-title">
        <div className="customize-title">Customize: </div>
        <div className="customize-title-2">Get Inspired</div>
        
      </div>
      <CustomizeCarousel />
    </div>
  );
};

export default RowCustomize;
