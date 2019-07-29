import React from 'react'

import { connect } from "react-redux";
import { hideMenu } from "../../../../src/ducks/reducer";

import "./contact.css"

const About = (props) => {
return(
    <div className='CON-component' onMouseOver={props.hideMenu}>
    <div className='CON-title-1'>About</div>
    <div className='CON-paragraph-1'>This page is under construction. Please check back soon.</div>
    

    </div>
)
}

const mapStateToProps = state => state

export default connect(
  mapStateToProps,
  {  hideMenu }
)(About);