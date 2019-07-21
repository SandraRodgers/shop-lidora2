import React from "react";
import SideBar from "./SideBar";


let orders;


const Orders = props => {
  if (props.location.pathname === "/user/orders") {
    orders = "900";
  } else {
    orders = "200";
  }

  return (
    <div className = 'O-component'>
      <SideBar orders={orders} />
    </div>
  );
};

export default Orders;
