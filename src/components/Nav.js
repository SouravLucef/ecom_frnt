import React from "react";
import { Link     } from "react-router-dom";
const Nav = () => {
    
    return (
        <div className="nav-ul">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/catagories">Catagories</Link></li>
                <li><Link to="/addproduct">Add Product</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
            </ul>
        </div>
    )
}
export default Nav;