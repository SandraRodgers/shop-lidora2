import React, { Component } from "react";
import {Redirect} from 'react-router-dom'

//redux
import { connect } from "react-redux";
import { signIn, logOut, hideMenu } from "../../../ducks/reducer";

//firebase
import firebase from "firebase/app";
import "firebase/auth";
import "../../../firebase/firebase";

// import config from "../../../firebase/firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

//css
import "./LandingMain.css";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN
});

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false,
      user: {}
    };

    
  }

  uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    },
    CredentialHelper: "none"
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        this.setState({ isSignedIn: !!user, user: user });
      } else {
        // No user is signed in.
        console.log("no user");
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.isSignedIn, this.state.isSignedIn);
    if (prevState.isSignedIn === false && this.state.isSignedIn === true) {
      const { displayName, email, uid, photoURL } = this.state.user;
      this.props.signIn(displayName, email, uid, photoURL);
    }
  }



  render() {
    console.log(this.props);

    if(this.state.isSignedIn ===true){
      return <Redirect push to="/" />
  }

    // this.state.user ? console.log(this.state.user) : console.log("no user");
    return (
      <div onMouseOver={this.props.hideMenu} className="LOG-component">
        {this.state.isSignedIn ? (
          <div className="LOG-signout-button-div">
            <button onClick={this.logout} className="LOG-signout-button">
              Sign Out!
            </button>
          </div>
        ) : (
          <div className="LOG-sign-in-container">
            <div className="LOG-sign-in-text">
              Sign in with Google or Facebook
            </div>
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    signIn,
    logOut,
    hideMenu
  }
)(Login);
