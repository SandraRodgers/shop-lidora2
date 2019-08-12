import React, { Component } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'

//redux
import { connect } from "react-redux";
import { signIn, getUserSession } from "../../ducks/reducer";

import "./footer.css"
import arrow from "../../assets/arrow.svg"
// import flowerLogo from "../../pics/flower.jpg"

class Footer extends Component {
constructor(props){
    super(props)
    this.state = {
        email: ''
    }
}
    componentDidMount(){
        this.props.getUserSession()
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    sendMessage = () => {
        const {email} = this.state
        console.log(email.includes('.'))
        let name;
        if(this.props.user && this.props.user.displayName){
            name = this.props.user.displayName
        } else{
            name = 'unknown name'
        }
        if (email.includes('@')=== false || email.includes('.')===false){
            alert ("Please enter a valid email address.")
        }
        else {
        axios
          .post("/nodemailer/newsletter", {
            name: name,
            email: this.state.email
          })
          .then((response) => {
            this.setState({ email: "" }, ()=>{
                alert('Subscribed to newsletter')
            });
          });
      }};

    render(){
        // console.log(this.props.user)
        return(
            <div>

<div className="footer-component">
<div className="fc-column-1">
   <Link to ="/about" className= "fc-text" >About</Link>
   <Link to='/shop' className= "fc-text"> Store </Link>
   <Link to="/contact" className= "fc-text">Contact</Link>
</div>

<div className="fc-column-2">
    <a href="https://www.facebook.com/shoplidora/" target="_blank" rel="noopener noreferrer"  className= "fc-text">Facebook</a>
    <a href='https://www.instagram.com/shoplidora/' target="_blank" rel="noopener noreferrer" className= "fc-text">Instagram</a>
</div>

{/* <div className="fc-column-3"></div> */}

<div className="fc-column-4">
    <Link to="/styleguide"  className= "fc-text">Style Guide</Link>
    <Link to="/custom" className= "fc-text-CO">Custom Order</Link>
    {/* <Link className= "fc-text"></Link>
    <Link className= "fc-text">Shipping </Link>
    <Link className= "fc-text">Sizes </Link>
    <Link className= "fc-text">Fabrics</Link> */}
</div>

<div className="logo-column">
<div className= "fc-text-newsletter-1">STAY IN THE LOOP!</div>
<div className= "fc-text-newsletter">SUBSCRIBE TO OUR NEWSLETTER</div>
<div className= "fc-text">
<img className='fc-arrow' src={arrow} onClick={this.sendMessage}/>  
<input      name="email"
                value={this.state.email}
                onChange={this.handleChange} placeholder="Enter your email to subscribe"  type='text' className="fc-input-newsletter"/>
                        </div>
{/* <img className="flowerLogo" src={flowerLogo} alt=""></img> */}
</div>
</div>

</div>
        )
    }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    signIn,
    getUserSession
  }
)(Footer);
