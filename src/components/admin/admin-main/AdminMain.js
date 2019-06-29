import React, {Component} from "react";
import { Link } from "react-router-dom";

class AdminMain extends Component {

    render(){
        return(
            <div>
                <Link to="/admin/form/dresses">Form Dresses</Link>
                <Link to="/admin/form/bonnets">Form Bonnets</Link>
                <Link to="/admin/form/shorts" >Form Shorts</Link>
                <Link to="/admin/form/bloomers">Form Bloomers</Link>
                <Link to="/admin/form/skirts">Form Skirts</Link>
                <Link to="/admin/form/vests">Form Vests</Link>
                <Link to="/admin/form/bibdanas">Form Bibdanas</Link>
                <Link to="/admin/form/bowties">Form Bowties</Link>
                <Link to="/admin/form/burpcloths">Form Burpcloths</Link>
                <Link to="/admin/form/droolpads">Form Droolpads</Link>
                <Link to="/admin/form/hairbows">Form Hairbows</Link>
                <Link to="/admin/form/headbands" >Form Headbands</Link>
                <Link to="/admin/form/suspenders">Form Suspenders</Link>
               


            </div>
        )
    }
}
export default AdminMain
