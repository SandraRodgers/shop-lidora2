import React, { Component } from "react";
import "./footer.css"
// import flowerLogo from "../../pics/flower.jpg"

class Footer extends Component {
    render(){
        return(
            <div>

<div className="footer-component">
<div className="fc-column-1">
    <div className= "fc-text">About</div>
    <div className= "fc-text">Store</div>
    <div className= "fc-text">Styleguide</div>
    <div className= "fc-text-CO">Custom Order</div>
  
</div>
<div className="fc-column-2">
    <div className= "fc-text">Shipping </div>
    <div className= "fc-text">Sizes </div>
    <div className= "fc-text">Fabrics</div>
</div>
{/* <div className="fc-column-3"></div> */}
<div className="fc-column-4">
<div className= "fc-text">Contact</div>
<div className= "fc-text">Facebook</div>
<div className= "fc-text">Instagram</div>
<div className= "fc-text"></div>

</div>
<div className="logo-column">
<div className= "fc-text-newsletter-1">STAY IN THE LOOP!</div>
<div className= "fc-text-newsletter">SUBSCRIBE TO OUR NEWSLETTER</div>
<div className= "fc-text">
<input placeholder="Enter your email to subscribe"  type='text' className="fc-input-newsletter"/></div>
{/* <img className="flowerLogo" src={flowerLogo} alt=""></img> */}
</div>
</div>

            </div>
        )
    }
}
export default Footer
