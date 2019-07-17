import React, { Component } from 'react';
import { createGlobalStyle } from "styled-components";
import {withRouter} from 'react-router-dom'

import routes from "./routes"

import NavMain from "../src/components/main/nav/NavMain"

const GlobalStyles = createGlobalStyle`
body {
  ${'' /* @import url('https://fonts.googleapis.com/css?family=Junge&display=swap');
  font-family: 'Junge', serif; */}
  @import url('https://fonts.googleapis.com/css?family=DM+Serif+Display&display=swap');
  font-family: 'DM Serif Display', serif;
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" );
  font-family: 'Source Sans Pro', sans-serif;
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display&display=swap');
  font-family: 'Playfair Display', serif;
  @import url('https://fonts.googleapis.com/css?family=Cousine');
  font-family: 'Cousine', monospace;
  @import url('https://fonts.googleapis.com/css?family=Lora');
  font-family: 'Lora', serif;
  @import url('https://fonts.googleapis.com/css?family=Zilla+Slab:300');
  font-family: 'Zilla Slab', serif;


}
`


class App extends Component {
  constructor(props){
    super(props) 
   this.state = {path: ''}
  }
  componentDidMount() {
    let pathName = this.props.location.pathname;
    this.setState(() => {
      return {
        path: pathName,
      }
    })
  }
 
  render() {
    // console.log(this.props.location)
   
    return (
      <div className="App">
         <GlobalStyles />
         {this.props.location.pathname !== '/' 
         && this.props.location.pathname !== '/checkout/one' 
         && this.props.location.pathname !=='/checkout/two' ? <NavMain /> : null }
        
         {routes}
      </div>
    );
  }
}

export default withRouter(App);
