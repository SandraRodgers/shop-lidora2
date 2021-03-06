// import React, { Component } from "react";

// //redux
// import { connect } from "react-redux";
// import { signIn, logOut, hideMenu } from "../../../../ducks/reducer";

// //firebase
// import firebase from "firebase/app";
// import "firebase/auth";
// import "./Firebase";

// // import config from "../../../firebase/firebase"
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// //css
// import "../LandingMain.css";

// firebase.initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: "shop-lidora",
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
// });

// class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isSignedIn: false,
//       user: {}
//     };

//     this.logout = this.logout.bind(this);
//   }

//   uiConfig = {
//     signInFlow: "popup",
//     signInSuccessUrl: "http://localhost:3000/login",
//     signInOptions: [
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.FacebookAuthProvider.PROVIDER_ID
//     ],
//     callbacks: {
//       // Avoid redirects after sign-in.
//       signInSuccessWithAuthResult: () => true
//     },
//     CredentialHelper: "none",
  
//   };

//   componentDidMount() {
//     firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         // User is signed in.
//         this.setState({ isSignedIn: !!user, user: user });
//       } else {
//         // No user is signed in.
//         console.log("no user");
//       }
//     });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log(prevState.isSignedIn, this.state.isSignedIn);
//     if (prevState.isSignedIn === false && this.state.isSignedIn === true) {
//       const { displayName, email, uid, photoURL } = this.state.user;
//       this.props.signIn(displayName, email, uid, photoURL);
      
//     }
//   }

//   logout() {
//     firebase
//       .auth()
//       .signOut()
//       .catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//       });
//     this.setState({ isSignedIn: false, user: null }, () => {
//       this.props.logOut();
//     });
//   }

//   render() {
//     console.log(this.props);

//     // this.state.user ? console.log(this.state.user) : console.log("no user");
//     return (
//       <div onMouseOver={this.props.hideMenu} className="LOG-component">
//         {this.state.isSignedIn ? (
//           <div className="LOG-signout-button-div">
//             <button onClick={this.logout} className="LOG-signout-button">
//               Sign Out!
//             </button>
//           </div>
//         ) : (
//           <div className="LOG-sign-in-container">
//             <h1 className="LOG-sign-in-text">
//               Sign in with Google or Facebook
//             </h1>
//             <StyledFirebaseAuth
//               uiConfig={this.uiConfig}
//               firebaseAuth={firebase.auth()}
//               onMouseOver={this.props.hideMenu}
//             />
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => state;

// export default connect(
//   mapStateToProps,
//   {
//     signIn: signIn,
//     logOut: logOut,
//     hideMenu: hideMenu
//   }
// )(Login);
