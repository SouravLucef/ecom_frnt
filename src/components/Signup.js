import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate =useNavigate();


    const collectData = async () => {
        console.log(name, email, password);  //here we will intergrate api
        //in fetch the first parameter will have the url and the second parameter will have the body
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),//this the our object and we have to Stringify  so the api can take object
            headers: {
                'Content-Type': 'application/json'
            },
        })
        result = await result.json();
        console.log(result);
        if(result)
        {
            navigate('/');
        }
    }

    return (
        <div className="signup">
            <h1>SignUp</h1>
            <input className="inputbox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
            <input className="inputbox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputbox" type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
            <button className="Signbutton" onClick={collectData} type="button">Sign UP</button>
        </div>
    )
};

export default Signup;