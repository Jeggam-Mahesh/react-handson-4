import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

const LinkComponent=()=>{
    return (
        <>
       <div id='parent'>
       <Link to ='/' className="hmlink">Home</Link>
        <Link to ='/student' className="hmlink">Student</Link>
        <Link to ='/contact' className="hmlink">Contact</Link>
       </div>
       
        </>
    )
}
export default LinkComponent;
