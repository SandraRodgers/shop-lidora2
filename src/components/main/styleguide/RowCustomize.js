import React from "react";

import "./styleguide.css";

import CustomizeCarousel from "../styleguide/CustomizeCarousel";

const RowCustomize = props => {
  return (
    <div className="row-fabrics-component">
      <div className="row-custom-main-row-title">
        <div className="fabrics-title">Customize: </div>
        <div className="fabrics-title-2">Get Inspired</div>
        
      </div>
      <CustomizeCarousel />
    </div>
  );
};

export default RowCustomize;
