import React, { Component } from "react";

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
      user: ""
    };

    this.logout = this.logout.bind(this);
  }

  uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.

      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    },
    CredentialHelper: "none"
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user, user: user });
    });
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
    this.setState({ isSignedIn: false, user: null });
  }

  render() {
    this.state.user ? console.log(this.state.user) : console.log("no user");
    return (
      <div className="LOG-component">
        {this.state.isSignedIn ? (
          <div className="LOG-signout-button-div">
            <button onClick={this.logout} className="LOG-signout-button">
              Sign Out!
            </button>
          </div>
        ) : (
          <div className="LOG-sign-in-container">
            <h1 className="LOG-sign-in-text">
              Sign in with Google or Facebook
            </h1>
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

export default Login;
