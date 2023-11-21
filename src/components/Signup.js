import React from "react";

const Signup =()=>{
    return(
        <div className="signup">
            <h1>SignUp</h1>
            <input className="inputbox" type="text" placeholder="Enter Name"/>
            <input className="inputbox" type="text" placeholder="Enter Email"/>
            <input className="inputbox" type="text" placeholder="Enter password"/>
            <button className="Signbutton" type="button">Sign UP</button>
        </div>
    )
};

export default Signup;