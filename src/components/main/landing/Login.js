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
})



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

componentDidMount(){
   
}


checkUser=()=> {
  firebase.auth().onAuthStateChanged(function(user) {
    // console.log(user)
    if (user) {
      const info = {
        displayName: user.displayName,
        email: user.email,
        firebaseId: user.uid,
        profileImg: user.photoURL
      };
     this.setState({isSignedIn:!!this.state.isSignedIn})
    } else {
      this.setState({isSignedIn:true})
    }
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
  }

  render() {

    console.log(this.firebase)
    return (
      <div className="LOG-component"   >
        {this.state.isSignedIn ===true ? (
    
            <div className='LOG-signout-button-div'>
            <button onClick={()=>console.log('click')} className='LOG-signout-button' >
              Sign Out!
            </button>
</div>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
            onClick={()=>this.checkUser()}
          
            // onClick={this.setState({isSignedIn: true})}
           
          />
        )}
      </div>
    );
  }
}

export default Login;
