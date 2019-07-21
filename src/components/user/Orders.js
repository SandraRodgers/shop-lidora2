import React, { Component } from "react";
import axios from "axios";

//redux
import { connect } from "react-redux";
import { getUserSession, getOrderDetails } from "../../ducks/reducer";

import SideBar from "./SideBar";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  componentDidMount() {
    this.getOrderDetails(this.props.user.customerid);
    this.props.getUserSession();
  }

  getOrderDetails = customer_id => {
    axios.get(`/api/account/orders/${customer_id}`).then(response => {
      console.log(response);
      this.setState({ orders: response.data });
    });
  };

  render() {
    console.log(this.state.orders);

    let orders;

    if (this.props.location.pathname === "/user/orders") {
      orders = "900";
    } else {
      orders = "200";
    }

    let orderList = this.state.orders.map((order, index) => {
      return (
        <div>
          <div className="O-order">
            <div className="O-orders-date">{order.date}</div>
            <div className="O-orders-item">
              <div>{order.name}</div>
              <div> {order.size}</div>
              <div> X {order.quantity}</div>
            </div>
            <div>
              {order.shipped_date === null
                ? "To Be Shipped Soon"
                : order.shipped_date}{" "}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="O-component">
        <SideBar orders={orders} />

        <div className="user-order-items">
          <div>RECENT ORDERS</div>
          {orderList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUserSession: getUserSession, getOrderDetails: getOrderDetails }
)(Orders);
