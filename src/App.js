import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { withRouter } from "react-router-dom";

import routes from "./routes";

import ScrollToTop from "./ScrollToTop";
import NavMain from "../src/components/main/nav/NavMain";

const GlobalStyles = createGlobalStyle`
body {
  @import url('https://fonts.googleapis.com/css?family=Junge&display=swap');
  font-family: 'Junge', serif;
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
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: "",
      isTop: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    let pathName = this.props.location.pathname;
    this.setState(() => {
      return {
        path: pathName
      };
    });
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.isTop !== this.state.isTop){
      this.handleScroll()
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    // console.log(event)
    
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 10;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  };

  render() {
  

    let backgroundColor;
    let transition
    
      this.state.isTop === true
        ? (backgroundColor = "rgb(255,255,255)")
        : (backgroundColor = "rgb(245, 245, 245)") && (transition = 'background-color 1.5s ease') 
    

    return (
      <ScrollToTop>
        <div
          className="App"
          onScroll={this.handleScroll}
          
        >
          <GlobalStyles />
          {this.props.location.pathname !== "/" &&
          this.props.location.pathname !== "/checkout/one" &&
          this.props.location.pathname !== "/checkout/two" ? (
            <NavMain backgroundColor={backgroundColor} transition={transition} isTop={this.state.isTop}  />
          ) : null}

          {routes}
        </div>
      </ScrollToTop>
    );
  }
}

export default withRouter(App);
