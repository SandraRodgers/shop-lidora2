import React, { Component } from "react";
import axios from "axios";

//redux
import { connect } from "react-redux";
import { openBag, getUserSession } from "../../../ducks/reducer";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
      intervalId: {},
      clock: ""
    };
  }

  componentDidMount() {
    this.props.getUserSession();
    var intervalId = setInterval(this.timer, 1000);
    // store intervalId in the state so it can be accessed later:
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  convertTime = () => {
    
  }

  timer = () => {
    let time = new Date(this.state.timer * 1000).toISOString().substr(11, 8);
    // setState method is used to update the state
    this.setState({ timer: this.state.timer + 1 });
    this.setState({ clock: time });
  };

  removeFlashItem() {
      axios.delete(`/api/flashsale/cart/${this.props.flashid}`).then((response)=>
      console.log(response.data.cart))
  }

  render() {
    // console.log(this.state.timer)
    if (this.state.clock === "00:01:10") {
        console.log('10 seconds')
      this.removeFlashItem();
    }

    return <div>{this.state.clock}</div>;
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { openBag: openBag, getUserSession: getUserSession }
)(Timer);

