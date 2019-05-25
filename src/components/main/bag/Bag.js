import React, {Component} from 'react'

import BagSideMenu from "../../styled/BagSideMenu"

class Bag extends Component{
    render(){
        console.log(this.props.open)
        return(
            <div className= 'bag-container'>
            <div>
        
                <BagSideMenu open={this.props.open}  ></BagSideMenu>
           
                </div>
            </div>
        )
    }
}

export default Bag

