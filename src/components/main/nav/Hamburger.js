import React from "react";

//styled components
import MenuSpan from "../../styled/MenuSpan"
import MenuButton from "../../styled/MenuButton"

class Hamburger extends React.Component {
    constructor(props){
        super(props)
    this.state = {
      openMenu:false
    }}

openMenu = () => {
 this.setState({openMenu: !this.state.openMenu})
 this.props.showSideMenu()
}

    render( ){
        console.log(this.props)

return (

  <MenuButton onClick={this.openMenu}>
    <MenuSpan open={this.state.openMenu} />
    <MenuSpan open={this.state.openMenu} />
    <MenuSpan open={this.state.openMenu} />
  </MenuButton>
);
}}

export default Hamburger;