import React, { Component } from 'react';
import { createGlobalStyle } from "styled-components";

import routes from "./routes"

const GlobalStyles = createGlobalStyle`
body {
  @import url('https://fonts.googleapis.com/css?family=Lora');
  font-family: 'Lora', serif;
  @import url('https://fonts.googleapis.com/css?family=Zilla+Slab:300');
  font-family: 'Zilla Slab', serif;
 
}
`

class App extends Component {
 
  render() {
    return (
      <div className="App">
         <GlobalStyles />
         {routes}
      </div>
    );
  }
}

export default App;
