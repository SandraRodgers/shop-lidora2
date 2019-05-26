
import React from 'react';

const FirebaseContext = React.createContext(null);

//The createContext() function essentially creates two components. The FirebaseContext.Provider component is used to provide a Firebase instance once at the top-level of your React component tree, and the FirebaseContext.Consumer component is used to retrieve the Firebase instance if it is needed in the React component.


export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );

export default  FirebaseContext ;


///The above sets up a Higher Order Component ('withFirebase') which can be used throughout the application to access the Firebase instance. (This is done instead of using the renderprops method given by the React Context Consumer). 