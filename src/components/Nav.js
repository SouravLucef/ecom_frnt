import React from "react";
import { Link     } from "react-router-dom";
const Nav = () => {
    
    const auth=localStorage.getItem('user');
    return (
        <div className="nav-ul">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/catagories">Catagories</Link></li>
                <li><Link to="/addproduct">Add Product</Link></li>
                
                <li><Link to="/profile">Profile</Link></li>
                <li>{auth ? <Link to="/logout">Logout</Link>:<Link to="/signup">SignUp</Link>}</li>
            </ul>
        </div>
    )
}
export default Nav;