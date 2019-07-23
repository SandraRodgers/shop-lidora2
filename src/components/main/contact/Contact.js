import React from 'react'

import { connect } from "react-redux";
import { hideMenu } from "../../../../src/ducks/reducer";

import "./contact.css"

const Contact = (props) => {
return(
    <div className='CON-component' onMouseOver={props.hideMenu}>
    <div className='CON-title-1'>Get In Touch</div>
    <div className='CON-paragraph-1'>Email me with any comments, questions, or concerns at <b>shoplidora@gmail.com</b></div>
    

    </div>
)
}

const mapStateToProps = state => state

export default connect(
  mapStateToProps,
  {  hideMenu }
)(Contact);