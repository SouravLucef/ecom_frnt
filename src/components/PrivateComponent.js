import React from 'react-router-dom';
import {Navigate, Outlet} from 'react-router-dom';
//outlet will handel the components that we will pass to privateComponent as a props


const PrivateComponent =()=>{

    return<Outlet/>
}

export default PrivateComponent;