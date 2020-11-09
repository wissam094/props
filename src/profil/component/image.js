
import React from 'react';
import logo from "../../../src/logo.svg"
 const Image = props =>{
     return(

    
    <div>
    <img src={logo} alt="logo" width="100px"/>
    {props.children}
    </div>
     )
}
export default Image;