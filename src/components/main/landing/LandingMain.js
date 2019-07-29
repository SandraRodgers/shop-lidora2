import React, { Component } from "react";

//redux
import { connect } from "react-redux";
import { getUserSession, logOut } from "../../../ducks/reducer";

//css
import "./LandingMain.css";

//imported assets
import logo from "../../../assets/logo.png";
// import coverpic from "../../../assets/shop-lidora.jpeg";
import coverpic from "../../../assets/Penny2.jpg"

//styled components
import Link from "../../styled/Link";
import Paragraph from "../../styled/Paragraph";

//firebase
import firebase from "firebase/app";
import "firebase/auth";
import "../../../firebase/firebase";

class LandingMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      signedIn: false,
      profile: [],
      isSignedIn: false,
      user: {}
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.props.getUserSession();
  }

  logout() {
    firebase
      .auth()
      .signOut()
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    this.setState({ isSignedIn: false, user: null }, () => {
      this.props.logOut();
    });
  }

  render() {
   
    return (
      <div className="LM-component">
        {/* LEFT COLUMN */}
        <div className="LM-left-column">
          <img className="LM-logo" alt="logo" src={logo} />
          <Paragraph>
            Fun and colors and all the fabrics of the rainbow. Shop Lidora
            clothing is handmade and each piece is one-of-a-kind. Shop the store
            for ready-made pieces or place your custom order.
          </Paragraph>
          <div className="LM-links">
            <Link  to="/shop">Shop</Link>
            {this.props.user ?   <Link onClick={this.logout} className='LM-logout-text' >Logout</Link> :  <Link to="/login">Login</Link>}
           
          </div>
          {this.props.user && this.props.user.isadmin    ? 
<div className="LM-links-admin">
<Link red to='/admin'>Admin Page</Link></div>: null
}

        </div>

        {/* RIGHT COLUMN */}
        <div  className="LM-right-column">
          <img alt="coverpic" src={coverpic} className="LM-coverpic" />
        </div>
        
      </div>
      
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    getUserSession, logOut
  }
)(LandingMain);
