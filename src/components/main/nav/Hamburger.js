import React from "react";

//styled components
import MenuSpan from "../../styled/MenuSpan"
import MenuButton from "../../styled/MenuButton"

class Hamburger extends React.Component {
    constructor(props){
        super(props)
    this.state = {
      openMenu:false,
      clicked: false
    }}

openMenu = () => {
 this.setState({openMenu: !this.state.openMenu})
 this.props.showSideMenu()
 this.setState({clicked: !this.state.clicked})
}

    render( ){
    let backgroundColor = this.props.backgroundColor
return (
//The MenuButton shows up as screen is minimized (responsive design) The MenuSpan is each line of the button
  <MenuButton style={{backgroundColor: backgroundColor}} clicked={this.state.clicked} onClick={this.openMenu}>
    <MenuSpan open={this.state.openMenu} />
    <MenuSpan open={this.state.openMenu} />
    <MenuSpan open={this.state.openMenu} />
  </MenuButton>

);
}}

export default Hamburger;