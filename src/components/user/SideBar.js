import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import "./account.css"

const SideBar = (props) => {
    console.log(props.information)

return(
    <div className='SB-component'>
       <Link style={{fontWeight: props.information}} className='SB-link' to='/user/information'> <div className='SB-link-item'>Information</div></Link>
        <Link style={{fontWeight: props.orders}} className='SB-link' to='/user/orders'><div className='SB-link-item'>My Orders</div></Link>
       <Link style={{fontWeight: props.favorites}} className='SB-link' to='/user/favorites'> <div className='SB-link-item'>Favorites</div></Link>
    </div>
)
}

export default withRouter(SideBar)