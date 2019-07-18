import React, {Component} from 'react'

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
            <div className= 'style-guide-component'>
                <RowStyles/>
                <RowFabrics/>
                <RowCustomize/>
            </div>
        )
    }
}

export default StyleGuide