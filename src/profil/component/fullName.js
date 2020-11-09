import React from 'react';
const Fullname = (props) => {
    console.log(props)
return <h1 onClick={Handelname}>{props.name}</h1>;
    function Handelname(){
        alert (props.name)
      }   
}

 
export default Fullname;