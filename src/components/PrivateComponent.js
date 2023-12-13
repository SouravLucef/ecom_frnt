import React from 'react-router-dom';
import {Navigate, Outlet} from 'react-router-dom';
//outlet will handel the components that we will pass to privateComponent as a props


const PrivateComponent =()=>{
    const auth=localStorage.getItem('user');//store data of localstorage in auth
    return auth?<Outlet/>:<Navigate to="/signup"/> //this is to check is there is some data in auth ,,if true show outlet if false show navigate
}

export default PrivateComponent;