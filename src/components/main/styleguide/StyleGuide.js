import React, {Component} from 'react'

import { connect } from "react-redux";
import {  openBag, hideMenu } from "../../../../src/ducks/reducer";

import "./styleguide.css"
import RowStyles from "./RowStyles"
import RowFabrics from "./RowFabrics"
import RowCustomize from "./RowCustomize"

class StyleGuide extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div className= 'style-guide-component' onMouseOver={this.props.hideMenu}>
                <RowStyles/>
                <RowFabrics/>
                <RowCustomize/>
            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(
  mapStateToProps,
  { openBag, hideMenu }
)(StyleGuide);