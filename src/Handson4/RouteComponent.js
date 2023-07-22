import React from "react";
import {BrowserRouter} from 'react-router-dom'
import {Route,Routes} from 'react-router-dom'
import Home from "./Home";
import Student from "./Student";
import Contact from "./Contact";
import LinkComponent from "./LinkComponent";
const RouteComponent=()=>{
    return (
        <>
    
       <BrowserRouter>
       <LinkComponent/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/contact' element={<Contact/>}/>
       </Routes>
       </BrowserRouter>
        </>
    )
}
export default RouteComponent;
