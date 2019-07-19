import React from 'react'

import "./custom.css"

import bonnetgirl from "../../../assets/bonnetgirl.jpg"

const Custom = () => {
return(
    <div className="custom-component">
    <div className='custom-main-div'>
    <img className='custom-main-image' src={bonnetgirl}/> 
    <div className='custom-text-div'>
    <div className='custom-title'>Customize</div>  
    <div className="custom-instructions">Special requests and custom orders are highly encouraged. Please fill out the form and I will follow up with you soon to help you plan the special item or to answer any questions you might have.  </div>
    <div className = 'custom-row-1-inputs'>
    <input className='custom-input-name' placeholder='first and last name'/>
    <input className='custom-input-email' placeholder='email'/>
    </div>
    <div className = 'custom-row-1-inputs'>
    <textarea className='custom-input-textarea' rows="5" cols="60" placeholder='message'/>
    {/* <input className='custom-input-name' placeholder='first and last name'/>
    <input className='custom-input-email' placeholder='email'/> */}
    </div>
    
             
                <button
                //   onClick={this.addToCart}
                  className="custom-order-button"
                >
                  SUBMIT REQUEST
                </button>
              
 
    </div>
 
    </div>  

    </div>
)
}

export default Custom