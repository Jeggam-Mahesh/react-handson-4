import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

const LinkComponent=()=>{
    return (
        <>
       <div id='parent'>
       <Link to ='/'>Home</Link>
        <Link to ='/student'>Student</Link>
        <Link to ='/contact'>Contact</Link>
       </div>
       
        </>
    )
}
export default LinkComponent;
