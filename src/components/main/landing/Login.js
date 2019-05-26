import React, { Component } from "react";

//firebase
import firebase from "firebase/app";
import "firebase/auth";
import "../../../firebase/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

//css
import "./LandingMain.css";
import { FirebaseAuth } from "react-firebaseui";

// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// // The start method will wait until the DOM is loaded.
// ui.start('#firebaseui-auth-container', uiConfig);

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN
});
firebase.auth().onAuthStateChanged(user => {
  this.setState({ isSignedIn: !user });
});



class Login extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false
    };
  }

  uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.

      firebase.auth.GoogleAuthProvider.PROVIDER_ID
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

// checkUser=()=>{
//     console.log('checkUser')
//     firebase.auth().onAuthStateChanged(user => {
//         this.setState({ isSignedIn: !user });
//       });
//   }

  componentDidUpdate = prevState => {};

  render() {
    return (
      <div className="LOG-component">
        {this.state.isSignedIn ? (
          <div>
            <h2>Signed In!</h2>
            <button onClick={()=>console.log('working')} style={{zIndex: 2}}>
              Sign Out!
            </button>{" "}
          </div>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
            onClick={this.setState({isSignedIn: true})}
          />
        )}
      </div>
    );
  }
}

export default Login;
