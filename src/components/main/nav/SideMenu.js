
import React from "react";

import HiddenSideMenu from "../../styled/HiddenSideMenu"

export default class SideMenu extends React.Component {
    render() {
      console.log(this.props);
      return (
        <div>
          <HiddenSideMenu open={this.props.open}>
            {/* <Column>Test</Column>
            <Column>Test</Column>
            <Column>Test</Column>
            <Column>Test</Column> */}
          </HiddenSideMenu>
        </div>
      );
    }
  }
  