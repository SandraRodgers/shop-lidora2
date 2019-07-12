import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./admin-main.css"
import LilacLink from "../../styled/LilacLink"

class AdminMain extends Component {

    render(){
        return(
            <div className='AM-component'>
              <div className="admin-header">Admin Page</div>
        <div className="columns-container">
          <div className="column-1">
          <div className="admin-header">Create New Products</div>
                <Link className="admin-link" to="/admin/form/dresses">Dresses</Link>
                <Link className="admin-link"  to="/admin/form/bonnets" >Bonnets</Link>
                <Link className="admin-link"  to="/admin/form/shorts" >Shorts</Link>
                <Link className="admin-link"  to="/admin/form/bloomers"> Bloomers </Link>
                <Link className="admin-link"  to="/admin/form/skirts"> Skirts </Link>
                <Link className="admin-link"  to="/admin/form/vests"> Vests </Link>
                <Link  className="admin-link" to="/admin/form/bibdanas" > Bibdanas</Link>
                <Link className="admin-link"  to="/admin/form/bowties" > Bowties</Link>
                <Link  className="admin-link" to="/admin/form/burpcloths" > Burpcloths </Link>
                <Link  className="admin-link" to="/admin/form/droolpads"> Droolpads </Link>
                <Link  className="admin-link" to="/admin/form/hairbows"> Hairbows </Link>
                <Link  className="admin-link" to="/admin/form/headbands" >Headbands</Link>
                <Link  className="admin-link" to="/admin/form/suspenders" >Suspenders</Link>
                <Link  className="admin-link" to="/admin/form/flashsale">Flashsale</Link>
               


            </div>
            </div>
            <div className="columns-container">
          <div className="column-2">
          <div className="admin-header">Manage Payments/Orders</div>
          
          <Link className="admin-link" to="/admin/form/coupon">Create Coupons</Link>


            </div>
            </div>
        </div>
     
  

        )
    }
}
export default AdminMain
