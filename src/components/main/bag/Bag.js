import React, {Component} from 'react'

//redux
import { connect } from "react-redux";
import {openBag} from "../../../ducks/reducer"

//styled components
import BagSideMenu from "../../styled/BagSideMenu"

//assets
import bagIcon from "../../../assets/shopping-bag.png"

//css
import "./Bag.css"

class Bag extends Component{
    render(){
        console.log(this.props.open)
        return(
            <div className= 'bag-container'>
         
        
                <BagSideMenu className='BAG-SM-component' open={this.props.open}  >
                    <div className= 'BAG-top-icons'>
                        <img className='BAG-bag-icon' src={bagIcon}/>
                        <div className='BAG-close-button' onClick={()=>this.props.openBag()}>CLOSE</div>
                    </div>
                    <div className='BAG-item-components'></div>
                </BagSideMenu>
           
        
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { openBag: openBag }
)(Bag);

