import React from "react";
import { useState } from "react";

const Signup =()=>{
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");


    const collectData=()=>{
        console.log(name,email,password);  //here we will intergrate api
        //in fetch the first parameter will have the url and the second parameter will have the body
        const result = fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
        })
    }

    return(
        <div className="signup">
            <h1>SignUp</h1>
            <input className="inputbox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
            <input className="inputbox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
            <input className="inputbox" type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"/>
            <button className="Signbutton" onClick={collectData} type="button">Sign UP</button>
        </div>
    )
};

export default Signup;