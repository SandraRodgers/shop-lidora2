
import React from "react";
import Accordion from "./Accordion"
import "./Accordion.css"

import HiddenSideMenu from "../../styled/HiddenSideMenu"

export default class SideMenu extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          block1: false,
          block2: false,
          block3: false,
        
        };
      }
    
      toggle = (index) => () => {
        this.setState({ [`block${index}`]: !this.state[`block${index}`] });
      }
      
      toggleExpand = (expand = false) => () => {
        this.setState({
          block1: expand,
          block2: expand,
          block3: expand,
        });
      }
    
    render() {
      console.log(this.props);
      const accordionList = [{ title: 'Clothing', content: ['Dresses', 'Shorts', 'Bloomers', 'Skirts', 'Vests'] }, { title: 'Accessories', content:['Bonnets', 'Bowties', 'Suspenders', 'Hairbows', 'Headbands']}, { title: 'Baby', content: ['Bibdanas', 'Burb Clothes', 'Drool Pads'] }, {title: 'Style Guide'}, {title: 'Custom'}, {title: 'Account'}, {title: 'Contact'}, {title: 'Bag'}];

      return (
        <div>
          <HiddenSideMenu open={this.props.open}>
          <dl className="accordion">
        {
          accordionList.map((item, index) => (
            <Accordion nonLinks={['Clothing', 'Accessories', 'Baby']} title={item.title} onClick={this.toggle(index + 1)} expand={this.state[`block${index+1}`]}
            content={item.content}
             />
          ))
        }
      </dl>
          </HiddenSideMenu>
        </div>
      );
    }
  }
  