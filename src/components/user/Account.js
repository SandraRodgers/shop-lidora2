import React from 'react'
import SideBar from "./SideBar"
import { withRouter } from "react-router-dom";



const Account = (props) => {

  

return(
    <div className = 'A-component'>
        <SideBar />
    </div>
)
}

export default withRouter(Account)